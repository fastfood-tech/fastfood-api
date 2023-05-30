import { Order } from '@prisma/client';
import { OrderDetails } from 'protocols';

export default interface IOrderRepository {
  createOrder(
    isDone: boolean,
    isDelivered: boolean,
    orderedProductIds: number[],
    clientName: string,
  ): Promise<void>;

  findOpen(): Promise<OrderDetails[]>;

  getById(orderId: number): Promise<Order>;

  updateOrder(
    orderId: number,
    isDone: boolean,
    isDelivered: boolean,
  ): Promise<Order>;
}
