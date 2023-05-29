import OrderRepository from 'repositories/orders/OrderRepository';
import OrderService from 'services/orders/OrdersService';
import OrderController from 'controllers/OrderController';
import { productRepository } from 'modules/product';
import { prisma } from '../../config/database';

export const orderRepository = new OrderRepository(prisma);
export const orderService = new OrderService(
  orderRepository,
  productRepository,
);
export const orderController = new OrderController(orderService);
