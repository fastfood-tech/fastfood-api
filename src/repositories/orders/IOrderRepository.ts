import { Order } from '@prisma/client';

export default interface IOrderRepository {
  createOrder(
    isDone: boolean,
    isDelivered: boolean,
    orderedProductId: number,
  ): Promise<void>;

  findOpen(): Promise<Order[]>;

  getById(orderId: number): Promise<Order>;

  updateOrder(
    orderId: number,
    isDone: boolean,
    isDelivered: boolean,
  ): Promise<Order>;
}
