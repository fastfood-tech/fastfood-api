import { Category } from '@prisma/client';

export default interface ICategoryService {
  getCategories: () => Promise<Category[]>;
}
