import { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../create-task-form/enums/status.ts';
import PropTypes from 'prop-types';
import { emitCorrectBoderColor } from './helpers/emitCorrectBoderColor.ts';
import { emitCorrectLabel } from './helpers/emitCorrectLabel.ts';

const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { count, status } = props;

  return (
    <>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Avatar sx={{
          backgroundColor: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: `${emitCorrectBoderColor(status!)}`
        }}>
          <Typography color={'#ffffff'} variant='h4'>
            {count}
          </Typography>
        </Avatar>
        <Typography
          color={'#ffffff'}
          fontWeight={'bold'}
          fontSize={'1.25rem'}
          variant='h5'>{emitCorrectLabel(status!)}</Typography>
      </Box>
    </>
  );
};

TaskCounter.defaultProps = {
  count: 0,
  status: Status.inProgress,
}

TaskCounter.propTypes = {
  count: PropTypes.number,
  status: PropTypes.oneOf(Object.values(Status)),
}

export default TaskCounter;
