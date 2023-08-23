import { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import TaskTitleField from './_task-title-field';
import TaskDescriptionField from './_task-description-field.tsx';

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
      </Stack>

    </Box>
  )
}

export default CreateTaskForm;
