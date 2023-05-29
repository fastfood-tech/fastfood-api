import Product from 'models/Product';

export default interface IProductService {
  getProducts: () => Promise<Product[]>;
}
