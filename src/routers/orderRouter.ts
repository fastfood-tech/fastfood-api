import { Router } from 'express';
import { orderController } from '../modules/orders';

const orderRouter = Router();

orderRouter.get('/', (req, res) => orderController.getOrders(req, res));
orderRouter.post('/', (req, res) => orderController.createOrder(req, res));
orderRouter.post('/:id/finish', (req, res) =>
  orderController.finishOrder(req, res),
);
orderRouter.post('/:id/deliver', (req, res) =>
  orderController.deliverOrder(req, res),
);

export { orderRouter };
