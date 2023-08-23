import React from 'react';
import { IDisabled } from './IDisabled.ts';

export interface ITextField extends IDisabled {
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
