import Product from 'models/Product';

export default interface IProductRepository {
  findAll: () => Promise<Product[]>;
}
