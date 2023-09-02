import { ITaskApi } from '../interfaces/ITaskApi.ts';
import { TaskCounterStatusType } from '../../task-counter/interfaces/ITaskCounter.ts';

export const countTasks = (tasks: ITaskApi[], status: TaskCounterStatusType): number => {
  if (!Array.isArray(tasks)) return 0;
  return tasks.filter((task: ITaskApi) => task.status === status).length;
};
