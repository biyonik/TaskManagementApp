import { Status } from '../../create-task-form/enums/status.ts';
import { Priority } from '../../create-task-form/enums/priority.ts';

export interface ITaskApi {
  id: string;
  title: string;
  description: string;
  date: string;
  status: `${Status}`;
  priority: `${Priority}`;
}
