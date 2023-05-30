import { Router } from 'express';
import { productController } from '../modules/product';

const productRouter = Router();

productRouter.get('/', (req, res) => productController.getProducts(req, res));
productRouter.get('/top', (req, res) =>
  productController.getTopProducts(req, res),
);

export { productRouter };
