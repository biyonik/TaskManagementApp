import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField.ts';
import PropTypes from 'prop-types';

const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const { onChange, disabled, inputRef } = props;

  return (
    <TextField
      id={'description'}
      name={'description'}
      label='Task description'
      variant='outlined'
      multiline
      rows={4}
      fullWidth
      disabled={disabled}
      onChange={onChange}
      inputRef={inputRef}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}

TaskDescriptionField.defaultProps = {
  onChange: (_e) => {},
  disabled: false,
}

export default TaskDescriptionField;
