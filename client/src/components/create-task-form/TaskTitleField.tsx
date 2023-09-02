import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField.ts';
import PropTypes from 'prop-types';
const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  const { onChange, disabled, inputRef } = props;

  return (
    <TextField
      id={'title'}
      name={'title'}
      required={true}
      label="Task Title"
      variant="outlined"
      fullWidth
      size="small"
      margin="normal"
      onChange={onChange}
      disabled={disabled}
      inputRef={inputRef}
    />
  )
}

TaskTitleField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}

TaskTitleField.defaultProps = {
  onChange: (_e) => {},
  disabled: false,
}

export default TaskTitleField;
