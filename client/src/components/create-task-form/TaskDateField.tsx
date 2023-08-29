import { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { IDateField } from './interfaces/IDateField.ts';
import PropTypes from 'prop-types';


const TaskDateField: FC<IDateField> = (props): ReactElement => {
  const { disabled, value, onChange } = props;

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label='Task Date'
          format={'dd/MM/yyyy'}
          value={value}
          disabled={disabled}
          onChange={onChange}
        />
      </LocalizationProvider>
    </>
  );
};

TaskDateField.defaultProps = {
  disabled: false,
  value: new Date(),
  onChange: (_date) => {
  },
};

TaskDateField.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func,
};

export default TaskDateField;
