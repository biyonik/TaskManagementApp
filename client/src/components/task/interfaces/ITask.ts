import { ITaskHeader } from './ITaskHeader.ts';
import { ITaskDescription } from './ITaskDescription.ts';
import { ITaskFooter } from './ITaskFooter.tsx';

export interface ITask extends ITaskHeader, ITaskDescription, ITaskFooter {
  id?: string;
  priority?: string;
  status?: string;
}
