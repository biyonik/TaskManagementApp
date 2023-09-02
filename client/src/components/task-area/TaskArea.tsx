import React, { FC, ReactElement, useEffect } from 'react';
import { Box, Grid, Alert, LinearProgress } from '@mui/material';
import { format } from 'date-fns';
import { Task, TaskCounter } from '../index.ts';
import { Status } from '../create-task-form/enums/status.ts';
import { sendApiRequest } from '../../helpers/sendApiRequest.ts';
import { ITaskApi } from './interfaces/ITaskApi.ts';
import { useQuery, useMutation } from '@tanstack/react-query';
import { IUpdateTask } from '../task/interfaces/IUpdateTask.ts';
import { countTasks } from './helpers/countTasks.ts';
import { useTaskStatusChangedContext } from '../../context';

const TaskArea: FC = (): ReactElement => {
  const {updated, toggle} = useTaskStatusChangedContext();
  const { error, isLoading, data, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => await sendApiRequest<ITaskApi[]>('http://localhost:5174/api/v1/tasks', 'GET'),
  });

  // update task mutation
  const updateTaskMutation = useMutation(
    (data: IUpdateTask) => sendApiRequest('http://localhost:5174/api/v1/tasks', 'PUT', data),
  );

  function onStatusChangeHandler(
    event: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: event.target.checked ? Status.inProgress : Status.todo,
    });
  }

  function markAsCompleteHandler(
    _event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) {
    updateTaskMutation.mutate({
      id,
      status: Status.completed,
    });
  }

  /**
   * Side effects
   */

  useEffect(() => {
    refetch();
  }, [updated]);

  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      toggle();
    }
  }, [updateTaskMutation.isSuccess]);


  return <Grid item md={8} sx={{
    height: '100%',
    top: 0,
    right: 0,
    width: '100vw',
  }}>
    <Box mb={8} px={4}>
      <h2>Status of your tasks as on {' '}
        {format(new Date(), 'dd/MM/yyyy')}
      </h2>
    </Box>
    <Grid
      container
      display={'flex'}
      justifyContent={'center'}
    >
      <Grid
        item
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-around'}
        alignItems={'center'}
        md={10}
        xs={12}
        mb={8}
      >
        <TaskCounter
          status={Status.todo}
          count={countTasks(data!, Status.todo)}
        />
        <TaskCounter
          status={Status.inProgress}
          count={countTasks(data!, Status.inProgress)}
        />
        <TaskCounter
          status={Status.completed}
          count={countTasks(data!, Status.completed)}
        />
      </Grid>
      <Grid
        item
        display={'flex'}
        flexDirection={'column'}
        xs={10}
        md={8}
      >
        {error ? <Alert severity='error'>
          There was an error fetching your tasks. Please try again later.
        </Alert> : (
          !error && !isLoading && Array.isArray(data) && data.length === 0 ?
            <Alert severity='warning'>
              You have no tasks. Please create one.
            </Alert> : null
        )}
        {isLoading ? <LinearProgress /> : null}
        {data && Array.isArray(data) && data.length > 0 ? data.map((task: ITaskApi, index: number) => (
          task.status === Status.todo || task.status === Status.inProgress ?
            <Task
              key={index}
              id={task.id}
              title={task.title}
              date={new Date(task.date)}
              description={task.description}
              priority={task.priority}
              status={task.status}
              onStatusChange={onStatusChangeHandler}
              onClick={markAsCompleteHandler}
            /> : false
        )) : null}
      </Grid>
    </Grid>
  </Grid>;
};

export default TaskArea;
