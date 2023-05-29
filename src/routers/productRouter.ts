import { Router } from 'express';
import { productController } from '../modules/product';

const productRouter = Router();

productRouter.get('/', (req, res) => productController.getProducts(req, res));

export { productRouter };
