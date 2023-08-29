import { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TaskDescriptionField, TaskTitleField, TaskDateField } from '../index.ts';

const CreateTaskForm: FC = (): ReactElement => {
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
      <Typography
        mb={2}
        component={'h2'}
        variant={'h6'}
      >
        Create A Task
      </Typography>
      <Stack
        sx={{
          width: '100%'
        }}
        spacing={2}
      >
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
      </Stack>

    </Box>
  )
}

export default CreateTaskForm;
