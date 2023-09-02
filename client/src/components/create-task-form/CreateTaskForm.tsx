import React, { FC, ReactElement, useState, useEffect } from 'react';
import { Box, SelectChangeEvent, Stack, Typography, LinearProgress, Button, Alert, AlertTitle } from '@mui/material';
import { TaskDescriptionField, TaskTitleField, TaskDateField, TaskSelectField } from '../index.ts';
import { ISelectFieldOption } from './interfaces/ISelectField.ts';
import { Status } from './enums/status.ts';
import { Priority } from './enums/priority.ts';
import { sendApiRequest } from '../../helpers/sendApiRequest.ts';
import { ICreateTask } from '../task-area/interfaces/ICreateTask.ts';
import { useMutation } from '@tanstack/react-query';
import { useTaskStatusChangedContext } from '../../context';

interface ICreateTaskFormState extends ICreateTask {}

const CreateTaskForm: FC = (): ReactElement => {
  /**
   * States
   */
  const [state, setState] = useState<ICreateTaskFormState>({
    title: undefined,
    description: undefined,
    date: new Date(),
    status: Status.todo,
    priority: Priority.normal,
  });
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  /**
   * Refs
   */
  const textFieldRef: React.RefObject<HTMLInputElement> = React.useRef<HTMLInputElement>(null);
  const textAreaRef: React.RefObject<HTMLTextAreaElement> = React.useRef<HTMLTextAreaElement>(null);

  /**
   * Contexts
   */
  const {toggle} = useTaskStatusChangedContext();

  /**
   * Custom event handlers
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = (date: Date | null) => {
    setState({
      ...state,
      date: date,
    });
  };
  /**
   * Mutations
   */
  const createTaskMutation = useMutation((data: ICreateTask) =>
    sendApiRequest<ICreateTask>(
      'http://localhost:5174/api/v1/tasks',
      'POST',
      data,
    ),
  );

  /**
   * Mutation handlers
   */
  function createTaskHandler() {
    const { title, date, description, status, priority } = state;
    if (!title || !date || !description) {
      return;
    }
    const task = {
      title,
      description,
      date,
      status,
      priority,
    };
    createTaskMutation.mutate(task);
    setState({
      title: '',
      description: '',
      date: new Date(),
      status: Status.todo,
      priority: Priority.normal,
    });
    if (textFieldRef.current) {
      textFieldRef.current.focus();
      textFieldRef.current.value = '';
    }

    if (textAreaRef.current) {
      textAreaRef.current.value = '';
    }
  }

  /**
   * Custom functions
   */
  function buttonDisabledStatus(): boolean {
    return !state.title || !state.date || !state.description || !state.status || !state.priority || createTaskMutation.isLoading;
  }

  /**
   * Manage side effects inside the application
   */
  useEffect(() => {
    if (createTaskMutation.isSuccess) {
      setShowSuccess(true);
      toggle();
    }

    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [createTaskMutation.isSuccess]);

  /**
   * Render
   */
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
      }}
      px={4}
      my={6}
    >
      {showSuccess ? (
        <Alert
          severity={'success'}
          sx={{
            width: '100%',
            marginBottom: '16px',
          }}
        >
          <AlertTitle>Success</AlertTitle>
          Task has been created successfully!
        </Alert>
      ) : null}

      <Typography
        mb={2}
        component={'h2'}
        variant={'h6'}
      >
        Create A Task
      </Typography>
      <Stack
        sx={{
          width: '100%',
        }}
        spacing={2}
      >
        <TaskTitleField onChange={handleChange} inputRef={textFieldRef} disabled={createTaskMutation.isLoading} />
        <TaskDescriptionField onChange={handleChange} inputRef={textAreaRef} disabled={createTaskMutation.isLoading} />
        <TaskDateField onChange={handleDateChange} value={state.date} disabled={createTaskMutation.isLoading} />
        <Stack direction={'row'} spacing={2} sx={{ width: '100%' }}>
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            label={'Status'}
            name={'status'}
            value={state.status}
            onChange={handleChange}
            options={
              Object.keys(Status).map((key) => ({
                value: key,
                label: Status[key as keyof typeof Status].toString().toUpperCase(),
              } as ISelectFieldOption)) as ISelectFieldOption[]
            }
          />
          <TaskSelectField
            disabled={createTaskMutation.isLoading}
            label={'Priority'}
            name={'priority'}
            value={state.priority}
            onChange={handleChange}
            options={
              Object.entries(Priority).map(([key, value]) => ({
                value: key,
                label: value.toString().toUpperCase(),
              } as ISelectFieldOption)) as ISelectFieldOption[]
            }
          />
        </Stack>
        {createTaskMutation.isLoading ? <LinearProgress /> : null}
        <Button
          variant='contained'
          size={'large'}
          fullWidth
          onClick={createTaskHandler}
          disabled={buttonDisabledStatus()}
        >Create Task</Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
