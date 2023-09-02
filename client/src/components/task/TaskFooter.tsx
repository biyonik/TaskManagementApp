import {FC, ReactElement} from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter.tsx';
import PropTypes from 'prop-types';
import { Status } from '../create-task-form/enums/status.ts';
const TaskFooter: FC<ITaskFooter> = (props): ReactElement => {
  const {id, status, onStatusChange, onClick } = props;

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
    >
    <FormControlLabel
      control={<Switch color={'warning'} onChange={(e) => onStatusChange && onStatusChange(e, id!)} defaultChecked={status === Status.inProgress} />}
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
      onClick={(e) => onClick && onClick(e, id!)}
    >
      Mark as complete
    </Button>
    </Box>
  )
}

TaskFooter.defaultProps = {
  id: "0",
  status: Status.todo,
  onStatusChange: (_event, _id) => {},
  onClick: (_event, _id) => {},
};

TaskFooter.propTypes = {
  id: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  status: PropTypes.string
};

export default TaskFooter;
