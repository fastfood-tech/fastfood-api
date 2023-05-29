import { Order, Prisma, PrismaClient } from '@prisma/client';
import IOrderRepository from './IOrderRepository';

export default class OrderRepository implements IOrderRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async createOrder(
    isDone: boolean,
    isDelivered: boolean,
    orderedProductId: number,
  ): Promise<void> {
    const orderData: Prisma.OrderCreateInput = {
      isDone,
      isDelivered,
      product: { connect: { id: orderedProductId } },
    };

    await this.prisma.order.create({
      data: orderData,
    });
  }

  async findOpen(): Promise<Order[]> {
    const orders = await this.prisma.order.findMany({
      where: { isDelivered: false },
      include: {
        product: { include: { selectedExtras: true, product: true } },
      },
    });

    return orders;
  }

  async getById(orderId: number): Promise<Order> {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId },
    });

    return order;
  }

  async updateOrder(
    orderId: number,
    isDone: boolean,
    isDelivered: boolean,
  ): Promise<Order> {
    const order = await this.prisma.order.findFirst({
      where: { id: orderId },
    });

    order.isDone = isDone;
    order.isDelivered = isDelivered;

    return this.prisma.order.update({
      data: order as Prisma.OrderUpdateInput,
      where: { id: orderId },
    });
  }
}
