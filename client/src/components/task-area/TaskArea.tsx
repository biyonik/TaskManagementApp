import { FC, ReactElement } from 'react';
import { Box, Grid } from '@mui/material';
import { format } from 'date-fns';
import { Task, TaskCounter } from '../index.ts';
import { Status } from '../create-task-form/enums/status.ts';

const TaskArea: FC = (): ReactElement => {
  return (
    <Grid item md={8} sx={{
      height: '100vh',
      top: 0,
      right: 0,
      width: '100vw',
    }}>
      <Box mb={8} px={4}>
        <h2>Status of your tasks as on {" "}
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
          />
          <TaskCounter
            status={Status.inProgress}
          />
          <TaskCounter
            status={Status.completed}
          />
        </Grid>
        <Grid
          item
          display={'flex'}
          flexDirection={'column'}
          xs={10}
          md={8}
        >
          <Task />
          <Task />
          <Task />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TaskArea;
