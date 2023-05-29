import { Request, Response } from 'express';
import IOrderService from 'services/orders/IOrderService';

export default class OrderController {
  readonly orderService: IOrderService;

  constructor(OrderService: IOrderService) {
    this.orderService = OrderService;
  }

  async getOrders(req: Request, res: Response): Promise<void> {
    try {
      const Orders = await this.orderService.getOrders();
      res.status(200).json(Orders);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
