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
    orderedProduct: OrderedProduct & { productId: number },
  ): Promise<OrderedProduct> {
    const extraMappedids = orderedProduct.selectedExtras.map(s => {
      return {
        id: s,
      };
    });

    const data: Prisma.OrderedProductCreateInput = {
      amount: orderedProduct.amount,
      annotations: orderedProduct.annotations,
      product: { connect: { id: orderedProduct.productId } },
      selectedExtras: { connect: extraMappedids },
    };

    return this.prisma.orderedProduct.create({ data });
  }

  async getProductById(productId: number): Promise<Product> {
    return this.prisma.product.findFirst({
      where: { id: productId },
      include: { extras: true },
    });
  }

  async getOrderedProductById(productId: number): Promise<OrderedProduct> {
    return this.prisma.orderedProduct.findFirst({
      where: { id: productId },
    });
  }
}
