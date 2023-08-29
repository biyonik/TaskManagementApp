import { IDisabled } from './IDisabled.ts';

export interface IDateField extends IDisabled {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
}
