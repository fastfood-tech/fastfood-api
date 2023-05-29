import { prisma } from 'config/database';
import { Prisma } from '@prisma/client';
import { seedOrderedProduct } from './productFactory';

export async function seedOrder(
  isDone: boolean,
  isDelivered: boolean,
): Promise<void> {
  await seedOrderedProduct();
  const orderedProduct = await prisma.orderedProduct.findFirst();

  const Order: Prisma.OrderCreateInput = {
    isDone,
    isDelivered,
    orderedProduct: {
      connect: { id: orderedProduct.id },
    },
  };

  await prisma.order.create({ data: Order });
}
