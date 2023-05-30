import { ProductFilterOptions } from 'protocols';
import { OrderedProduct } from '../../models/OrderedProduct';
import Product from '../../models/Product';

export default interface IProductRepository {
  findAll: (filterOptions?: ProductFilterOptions) => Promise<Product[]>;
  findTop(): Promise<Product[]>;
  createOrderProduct: (
    orderProduct: Omit<OrderedProduct, 'id'> | { productId: number },
  ) => Promise<OrderedProduct>;
  getProductById(productId: number): Promise<Product>;
  getOrderedProductById(productId: number): Promise<OrderedProduct>;
}
