import { ProductFilterOptions } from 'protocols';
import Product from '../../models/Product';
import IProductRepository from '../../repositories/products/IProductRepository';
import IProductService from './IProductService';

export default class ProductService implements IProductService {
  private readonly productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async getProducts(filterOptions?: ProductFilterOptions): Promise<Product[]> {
    return this.productRepository.findAll(filterOptions);
  }

  async getTop(): Promise<Product[]> {
    return this.productRepository.findTop();
  }
}
