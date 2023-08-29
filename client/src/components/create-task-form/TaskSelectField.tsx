import { FC, ReactElement } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { ISelectField, ISelectFieldOption } from './interfaces/ISelectField.ts';
import PropTypes from 'prop-types';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
  const { label, name, value, onChange, options } = props;
  return (
    <FormControl fullWidth size={'medium'}>
      <InputLabel id={`${name}-id`}>{label}</InputLabel>
      <Select
        labelId={`${name}-id`}
        id={name}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      >
        {options && options?.length > 0 ? options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        )) : null
        }
      </Select>
    </FormControl>
  );
};

TaskSelectField.defaultProps = {
  label: 'Select Box',
  name: 'selectBox',
  value: '',
  onChange: (_event) => {},
  options: [
    {value: '', label: 'Add Option'}
  ],
};

TaskSelectField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired) as PropTypes.Validator<ISelectFieldOption[]>,
};

export default TaskSelectField;
