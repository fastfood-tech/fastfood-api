import Order from 'models/Order';
import { OrderedProduct } from 'models/OrderedProduct';
import IProductRepository from 'repositories/products/IProductRepository';
import IOrderRepository from '../../repositories/orders/IOrderRepository';
import IOrderService from './IOrderService';
import OrderServiceException from './exceptions/OrderServiceException';

export default class OrderService implements IOrderService {
  private readonly orderRepository: IOrderRepository;

  private readonly productRepository: IProductRepository;

  constructor(
    OrderRepository: IOrderRepository,
    productRepository: IProductRepository,
  ) {
    this.orderRepository = OrderRepository;
    this.productRepository = productRepository;
  }

  async getOrders(): Promise<Order[]> {
    const orders = await this.orderRepository.findOpen();

    return orders;
  }

  async createOrders(
    orderData: Order & { product: OrderedProduct },
  ): Promise<void> {
    const orderProduct = await this.productRepository.createOrderProduct(
      orderData.product,
    );

    await this.orderRepository.createOrder(false, false, orderProduct.id);
  }

  async finishOrder(orderId: number): Promise<void> {
    const order = await this.orderRepository.getById(orderId);

    if (order.isDone) throw new OrderServiceException(409, 'Already done');

    await this.orderRepository.updateOrder(order.id, true, order.isDelivered);
  }

  async deliverOrder(orderId: number): Promise<void> {
    const order = await this.orderRepository.getById(orderId);

    if (order.isDelivered)
      throw new OrderServiceException(409, 'Already delivered');

    await this.orderRepository.updateOrder(order.id, order.isDone, true);
  }
}
