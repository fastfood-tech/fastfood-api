import { OrderedProduct } from 'models/OrderedProduct';
import Product from 'models/Product';

export default interface IProductRepository {
  findAll: () => Promise<Product[]>;
  createOrderProduct: (orderProduct: OrderedProduct) => Promise<OrderedProduct>;
}
