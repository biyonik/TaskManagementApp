import { FC, ReactElement } from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader.ts';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

const TaskHeader: FC<ITaskHeader> = (props): ReactElement => {
  const { title, date } = props;
  return (
    <Box
      display='flex'
      width='100%'
      justifyContent='space-between'
      mb={3}
    >
      <Box>
        <Typography variant='h6'>
          {title}
        </Typography>
      </Box>
      <Box>
        <Chip
          label={`${format(date!, 'dd/MM/yyyy')}`}
          variant='outlined'
        />
      </Box>
    </Box>
  );
};

TaskHeader.defaultProps = {
  title: 'Task Title',
  date: new Date,
};

TaskHeader.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
}

export default TaskHeader;
