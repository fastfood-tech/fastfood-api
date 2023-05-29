import { PrismaClient } from '@prisma/client';

import Product from 'models/Product';
import IProductRepository from './IProductRepository';

export default class ProductRepository implements IProductRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany({ include: { extras: true } });
  }
}
