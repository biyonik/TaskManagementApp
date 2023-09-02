import { Status } from '../../create-task-form/enums/status.ts';
import { Priority } from '../../create-task-form/enums/priority.ts';

export interface ICreateTask {
  title: string|undefined;
  description: string|undefined;
  date: Date | null;
  status: Status;
  priority: Priority;
}
