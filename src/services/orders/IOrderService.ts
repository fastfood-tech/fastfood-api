import Order from 'models/Order';
import { OrderedProduct } from 'models/OrderedProduct';

export default interface IOrderService {
  getOrders: () => Promise<Order[]>;
  createOrders: (
    orderData: Order & { product: OrderedProduct },
  ) => Promise<void>;
  finishOrder: (orderId: number) => Promise<void>;
  deliverOrder: (orderId: number) => Promise<void>;
}
