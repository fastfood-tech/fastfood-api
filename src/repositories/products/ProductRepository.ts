import { Prisma, PrismaClient } from '@prisma/client';

import Product from 'models/Product';
import { OrderedProduct } from 'models/OrderedProduct';
import IProductRepository from './IProductRepository';

export default class ProductRepository implements IProductRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { extras: true } });
  }

  async createOrderProduct(
    orderProduct: OrderedProduct,
  ): Promise<OrderedProduct> {
    const extraMappedids = orderProduct.selectedExtras.map(s => {
      return {
        id: s.id,
      };
    });

    const asd: Prisma.OrderedProductCreateInput = {
      amount: orderProduct.amount,
      annotations: orderProduct.annotations,
      product: { connect: { id: orderProduct.product.id } },
      selectedExtras: { connect: extraMappedids },
    };

    return this.prisma.orderedProduct.create({ data: asd });
  }
}
