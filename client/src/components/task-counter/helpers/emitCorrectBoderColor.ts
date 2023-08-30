import { TaskCounterStatusType } from '../interfaces/ITaskCounter.ts';
import { Status } from '../../create-task-form/enums/status.ts';

export const emitCorrectBoderColor = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return 'error.light';
    case Status.inProgress:
      return 'info.light';
    case Status.completed:
      return 'success.light';
  }
}


