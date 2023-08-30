import { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription.ts';
import PropTypes from 'prop-types';

const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
  const {description} = props;
  return (
    <Box>
      <Typography>
        {description}
      </Typography>
    </Box>
  )
}

TaskDescription.defaultProps = {
  description: 'No description provided.',
}

TaskDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

export default TaskDescription;
