import { ProductFilterOptions } from 'protocols';
import Product from '../../models/Product';

export default interface IProductService {
  getProducts: (filterOptions?: ProductFilterOptions) => Promise<Product[]>;
  getTop(): Promise<Product[]>;
}
