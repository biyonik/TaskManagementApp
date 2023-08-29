import { FC, ReactElement } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { TaskDescriptionField, TaskTitleField, TaskDateField, TaskSelectField } from '../index.ts';

import { ISelectFieldOption } from './interfaces/ISelectField.ts';
import { Status } from './enums/status.ts';
import { Priority } from './enums/priority.ts';

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
        <Stack direction={'row'} spacing={2} sx={{width: '100%'}}>
          <TaskSelectField
            label={'Status'}
            name={'status'}
            options={
              Object.keys(Status).map((key) => ({
                value: key,
                label: Status[key as keyof typeof Status].toString().toUpperCase(),
              } as ISelectFieldOption)) as ISelectFieldOption[]
            }
          />
          <TaskSelectField
            label={'Priority'}
            name={'priority'}
            options={
              Object.entries(Priority).map(( [key, value] ) => ({
                value: key,
                label: value.toString().toUpperCase(),
              } as ISelectFieldOption)) as ISelectFieldOption[]
            }
          />
        </Stack>
      </Stack>

    </Box>
  )
}

export default CreateTaskForm;
