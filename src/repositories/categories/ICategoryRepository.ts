import { Category } from '@prisma/client';

export default interface ICategoryRepository {
  create: (categoryData: Category) => Promise<Category>;
  findAll: () => Promise<Category[]>;
}
