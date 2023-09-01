import { Task } from '../entities/tasks/task.entity';
import { AppDataSource } from '../../index';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { UpdateResult } from 'typeorm';

export class TaskService {
  constructor(
    private taskRepository = AppDataSource.getRepository(Task),
  ) {}

  /**
   * Get all tasks
   * @returns {Promise<Task[]|undefined>}
   * @memberof TaskService
   */
  public async getAll(): Promise<Task[]|undefined> {
    let allTasks: Task[] = [];
    try {
      allTasks = await this.taskRepository.find({
        order: {
          date: 'ASC',
        },
      });

      if(!allTasks || !allTasks.length) {
        return undefined;
      }

      allTasks = instanceToPlain(allTasks) as Task[];
      return allTasks;
    } catch (error) {
      throw new Error(`Error fetching all task ${error}`);
    }
  }

  /**
   * Get task by id
   * @param {string} id
   * @returns {Promise<Task|undefined>}
   * @memberof TaskService
   */
  public async getById(id: string): Promise<Task|undefined> {
    try {
      const task = await this.taskRepository.findOne({ where: { id } });
      if (!task) {
        return undefined;
      }
      return instanceToPlain(task) as Task;
    } catch (error) {
      throw new Error(`Error fetching task ${error}`);
    }
  }

  public async create(task: Task): Promise<Task|undefined> {
    try {
      return await this.taskRepository.save(task);
    } catch (error) {
      throw new Error(`Error creating task ${error}`);
    }
  }

  public async update(id: string, task: Task): Promise<UpdateResult|undefined> {
    try {
      const taskToUpdate = await this.taskRepository.findOne({ where: { id } });
      if (!taskToUpdate) {
        return undefined;
      }
      taskToUpdate.title = task.title;
      taskToUpdate.description = task.description;
      taskToUpdate.date = task.date;
      taskToUpdate.status = task.status;
      taskToUpdate.priority = task.priority;
      const result = await this.taskRepository.update(id, plainToInstance(Task, {
        title: task.title,
        description: task.description,
        date: task.date,
        status: task.status,
        priority: task.priority,
      }));
      return instanceToPlain(result) as UpdateResult;
    } catch (error) {
      throw new Error(`Error updating task ${error}`);
    }
  }

  public async remove(id: string) : Promise<boolean>{
    try {
      const task = await this.taskRepository.findOne({ where: { id } });
      if (!task) {
        return false;
      }
      await this.taskRepository.delete(id);
      return true;
    } catch (error) {
      throw new Error(`Error removing task ${error}`);
    }
  }
}
