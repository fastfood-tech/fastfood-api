import { Prisma, PrismaClient } from '@prisma/client';
import Product from 'models/Product';
import Extra from 'models/Extra';
import { ProductFilterOptions } from 'protocols';
import { OrderedProduct } from '../../models/OrderedProduct';
import OrderServiceException from '../../services/orders/exceptions/OrderServiceException';
import IProductRepository from './IProductRepository';

export default class ProductRepository implements IProductRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async findAll({
    categoryId,
    name,
    code,
  }: ProductFilterOptions): Promise<Product[]> {
    return this.prisma.product.findMany({
      include: { extras: true },
      where: {
        id: code,
        categoryId,
        name: {
          contains: name,
          mode: 'insensitive',
        },
      },
    });
  }

  async findTop(): Promise<Product[]> {
    return this.prisma.product.findMany({
      include: { extras: true },
      take: 12,
    });
  }

  async createOrderProduct(
    orderedProduct: OrderedProduct & { productId: number },
  ): Promise<OrderedProduct> {
    const extraMappedids = await Promise.all(
      orderedProduct.selectedExtras.map(async s => {
        const extra = await this.prisma.extra.findFirst({
          where: { id: s },
        });
        if (!extra) throw new OrderServiceException(400, 'invalid extra item');

        return { id: extra.id };
      }),
    );

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
