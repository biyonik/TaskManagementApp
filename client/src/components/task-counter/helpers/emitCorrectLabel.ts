import { TaskCounterStatusType } from '../interfaces/ITaskCounter.ts';
import { Status } from '../../create-task-form/enums/status.ts';

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
switch (status) {
    case Status.todo:
      return `Todo's`;
    case Status.inProgress:
      return 'In Progress';
    case Status.completed:
      return 'Completed';
  }
}
