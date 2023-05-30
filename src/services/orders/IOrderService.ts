import Order from 'models/Order';
import { OrderedProduct } from 'models/OrderedProduct';
import NewOrder, { OrderDetails } from 'protocols';

export default interface IOrderService {
  getOrders(): Promise<OrderDetails[]>;
  createOrders: (orderData: NewOrder) => Promise<void>;
  finishOrder: (orderId: number) => Promise<void>;
  deliverOrder: (orderId: number) => Promise<void>;
}
