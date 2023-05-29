import { PrismaClient } from '@prisma/client';
import Category from 'models/Category';
import ICategoryRepository from './ICategoryRepository';

export default class CategoryRepository implements ICategoryRepository {
  private readonly prisma: PrismaClient;

  constructor(prismaClient: PrismaClient) {
    this.prisma = prismaClient;
  }

  async create(categoryData: Category): Promise<Category> {
    return this.prisma.category.create({
      data: categoryData,
    });
  }

  async findAll(): Promise<Category[]> {
    return this.prisma.category.findMany();
  }
}
