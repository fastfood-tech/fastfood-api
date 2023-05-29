import { Router } from 'express';
import { categoryController } from '../modules/category';

const categoryRouter = Router();

categoryRouter.get('/', (req, res) =>
  categoryController.getCategories(req, res),
);

export { categoryRouter };
