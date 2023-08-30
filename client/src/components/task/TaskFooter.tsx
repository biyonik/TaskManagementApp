import {FC, ReactElement} from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter.tsx';
import PropTypes from 'prop-types';
const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {onStatusChange, onClick } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
    <FormControlLabel
      control={<Switch color={'warning'} onChange={onStatusChange} />}
      label="In Progress"
    />
    <Button
      variant="contained"
      color="success"
      size="small"
      sx={{
        borderRadius: '8px',
        color: 'white',
      }}
      onClick={onClick}
    >
      Mark as complete
    </Button>
    </Box>
  )
}

TaskFooter.defaultProps = {
  onStatusChange: (_event) => {},
  onClick: (_event) => {},
};

TaskFooter.propTypes = {
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
};

export default TaskFooter;
