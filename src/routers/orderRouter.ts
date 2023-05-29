import { Router } from 'express';
import { orderController } from 'modules/orders';

const orderRouter = Router();

orderRouter.get('/', (req, res) => orderController.getOrders(req, res));

export { orderRouter };
