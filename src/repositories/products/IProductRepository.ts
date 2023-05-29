import { OrderedProduct } from 'models/OrderedProduct';
import Product from 'models/Product';

export default interface IProductRepository {
  findAll: () => Promise<Product[]>;
  createOrderProduct: (
    orderProduct: Omit<OrderedProduct, 'id'> | { productId: number },
  ) => Promise<OrderedProduct>;
  getProductById(productId: number): Promise<Product>;
  getOrderedProductById(productId: number): Promise<OrderedProduct>;
}
