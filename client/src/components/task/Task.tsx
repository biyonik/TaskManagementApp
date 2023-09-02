import {FC, ReactElement} from 'react';
import { Box } from '@mui/material';
import { TaskDescription, TaskFooter, TaskHeader } from '../index.ts';
import { ITask } from './interfaces/ITask.ts';
import PropTypes from 'prop-types';
import { Priority } from '../create-task-form/enums/priority.ts';
import { Status } from '../create-task-form/enums/status.ts';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor.ts';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    id,
    title,
    date,
    description,
    priority,
    status,
    onStatusChange,
    onClick
  } = props;

  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      flexDirection="column"
      justifyContent="flex-start"
      mb={4}
      p={2}
      sx={{
        width: '100%',
        backgroundColor:'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: `${renderPriorityBorderColor(priority!)}`,
      }}
    >
      {/* Task Header */}
      <TaskHeader
        title={title}
        date={date}
      />
      {/* Task Description */}
      <TaskDescription
        description={description}
      />
      {/* Task Footer */}
      <TaskFooter
        id={id}
        status={status}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  )
}

Task.defaultProps = {
  id: "0",
  title: "Task Title",
  date: new Date(),
  description: "Task Description",
  priority: Priority.high,
  status: Status.todo,
  onStatusChange: (_event) => {},
  onClick: (_event) => {},
}

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
}

export default Task;
