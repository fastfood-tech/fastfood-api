import { prisma } from '../../config/database';
import CategoryRepository from '../../repositories/categories/CategoryRepository';
import CategoryService from '../../services/categories/CategoryService';
import CategoryController from '../../controllers/CategoryController';

export const categoryRepository = new CategoryRepository(prisma);
export const categoryService = new CategoryService(categoryRepository);
export const categoryController = new CategoryController(categoryService);
