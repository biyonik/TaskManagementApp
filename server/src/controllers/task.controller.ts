import { TaskService } from '../services/task.service';
import e, { Request, Response } from 'express';
import { validationResult } from 'express-validator';

export class TaskController {

  constructor(
    private taskService: TaskService= new TaskService(),
  ) {
  }

  /**
   * Get all tasks
   * @returns {Promise<Task[]|undefined>}
   * @memberof TaskController
   */
  public async getAll(requestObject: Request, responseObject: Response): Promise<e.Response<any, Record<string, any>>> {
    const allTasks = await this.taskService.getAll();
    if (allTasks && allTasks.length) {
      return responseObject.status(200).json(allTasks);
    } else {
      return responseObject.status(404).json({ message: 'No tasks found' });
    }
  }

  /**
   * Get one task
   * @param {Request} requestObject
   * @param {Response} responseObject
   * @returns {Promise<Task|undefined>}
   * @memberof TaskController
   */
  public async getById(requestObject: Request, responseObject: Response): Promise<e.Response<any, Record<string, any>>> {
    const task = await this.taskService.getById(requestObject.params.id);
    if (task) {
      return responseObject.status(200).json(task);
    } else {
      return responseObject.status(404).json({ message: 'No task found' });
    }
  }

  public async create(requestObject: Request, responseObject: Response): Promise<e.Response<any, Record<string, any>>> {
    const errors = validationResult(requestObject);
    if (!errors.isEmpty()) {
      return responseObject.status(400).json({ errors: errors.array() });
    }
    const task = await this.taskService.create(requestObject.body);
    if (task) {
      return responseObject.status(201).json(task);
    } else {
      return responseObject.status(500).json({ message: 'Error creating task' });
    }
  }

  public async update(requestObject: Request, responseObject: Response): Promise<e.Response<any, Record<string, any>>> {
    const errors = validationResult(requestObject);
    if (!errors.isEmpty()) {
      return responseObject.status(400).json({ errors: errors.array() });
    }
    const task = await this.taskService.update(requestObject.params.id, requestObject.body);
    if (task) {
      return responseObject.status(200).json(task);
    } else {
      return responseObject.status(500).json({ message: 'Error updating task' });
    }
  }

  public async remove(requestObject: Request, responseObject: Response): Promise<e.Response<any, Record<string, any>>> {
    const task = await this.taskService.remove(requestObject.params.id);
    if (task) {
      return responseObject.status(200).json(task);
    } else {
      return responseObject.status(500).json({ message: 'Error removing task' });
    }
  }

}
