import { IDisabled } from './IDisabled.ts';
import { SelectChangeEvent } from '@mui/material';

export interface ISelectFieldOption {
    value: string;
    label: string;
}
export interface ISelectField extends IDisabled {
    name?: string;
    label?: string;
    value?: string;
    onChange?: (event: SelectChangeEvent) => void;
    options?: ISelectFieldOption[];
}
