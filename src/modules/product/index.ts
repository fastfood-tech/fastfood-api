import ProductService from '../../services/products/ProductService';
import ProductRepository from '../../repositories/products/ProductRepository';
import ProductController from '../../controllers/ProductController';
import { prisma } from '../../config/database';

export const productRepository = new ProductRepository(prisma);
export const productService = new ProductService(productRepository);
export const productController = new ProductController(productService);
