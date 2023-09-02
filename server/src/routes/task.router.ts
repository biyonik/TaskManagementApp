import { Request, Response, Router } from 'express';
import { TaskController } from '../controllers/task.controller';
import { createValidator, deleteValidator, updateValidator } from '../validators/task.validator';
export class TaskRouter {
  constructor(
    private taskController: TaskController = new TaskController(),
  ) {
  }

  public getRouter(): Router {
    const router: Router = Router();

    router.get('/', async (requestObject: Request, responseObject: Response) => {
      return await this.taskController.getAll(requestObject, responseObject);
    });

    router.get('/:id', async (requestObject: Request, responseObject: Response) => {
      return await this.taskController.getById(requestObject, responseObject);
    });

    router.post('/', createValidator, async (requestObject: Request, responseObject: Response) => {
      return await this.taskController.create(requestObject, responseObject);
    });

    router.put('/', updateValidator, async (requestObject: Request, responseObject: Response) => {
      return await this.taskController.update(requestObject, responseObject);
    });

    router.delete('/:id', deleteValidator, async (requestObject: Request, responseObject: Response) => {
      return await this.taskController.remove(requestObject, responseObject);
    });

    return router;
  }
}
