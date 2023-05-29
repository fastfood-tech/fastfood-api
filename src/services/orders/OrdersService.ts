import Order from 'models/Order';
import { OrderedProduct } from 'models/OrderedProduct';
import IProductRepository from 'repositories/products/IProductRepository';
import NewOrder, { OrderDetails } from 'protocols';
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

  async getOrders(): Promise<OrderDetails[]> {
    const orders = await this.orderRepository.findOpen();

    return orders;
  }

  async createOrders(orderData: NewOrder): Promise<void> {
    await Promise.all(
      orderData?.order.map(async p => {
        const orderProduct = await this.productRepository.getProductById(
          p.productId,
        );

        if (!orderProduct)
          throw new OrderServiceException(400, 'Produto inválido');
      }),
    );

    const orderedProductIds = [];

    const promises = orderData?.order.map(async p => {
      const orderProduct = await this.productRepository.createOrderProduct(p);
      orderedProductIds.push(orderProduct.id);
    });

    await Promise.all(promises);

    await this.orderRepository.createOrder(false, false, orderedProductIds);
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
