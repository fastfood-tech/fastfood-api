import { Order, Prisma, PrismaClient } from '@prisma/client';
import { OrderDetails } from 'protocols';
import { OrderedProduct } from 'models/OrderedProduct';
import IOrderRepository from './IOrderRepository';

export default class OrderRepository implements IOrderRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async createOrder(
    isDone: boolean,
    isDelivered: boolean,
    orderedProductIds: number[],
  ): Promise<void> {
    const mappedIds = orderedProductIds.map(orderedProductId => {
      return { id: orderedProductId };
    });

    const orderData: Prisma.OrderCreateInput = {
      isDone,
      isDelivered,
      orderedProduct: { connect: mappedIds },
    };

    await this.prisma.order.create({
      data: orderData,
    });
  }

  async findOpen(): Promise<OrderDetails[]> {
    const orders = await this.prisma.order.findMany({
      where: { isDelivered: false },
      include: {
        orderedProduct: { include: { selectedExtras: true, product: true } },
      },
    });

    const result: OrderDetails[] = orders.map(o => {
      return {
        id: o.id,
        isDelivered: o.isDelivered,
        isDone: o.isDone,
        products: o.orderedProduct.map(p => {
          return {
            id: p.id,
            amount: p.amount,
            annotations: p.annotations,
            selectedExtras: p.selectedExtras,
            productName: p.product.name,
          };
        }),
      };
    });

    return result;
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
