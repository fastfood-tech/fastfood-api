import Product from '../../models/Product';
import IProductRepository from '../../repositories/products/IProductRepository';
import IProductService from './IProductService';

export default class ProductService implements IProductService {
  private readonly productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
