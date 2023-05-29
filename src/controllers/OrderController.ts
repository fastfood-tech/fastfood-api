import { Request, Response } from 'express';
import NewOrder from 'protocols';
import IOrderService from 'services/orders/IOrderService';

type createOderBody = {
  order: [
    {
      productId: number;
      amount: number;
      annotations: string;
      selectedExtras: number[];
    },
  ];
};
export default class OrderController {
  readonly orderService: IOrderService;

  constructor(OrderService: IOrderService) {
    this.orderService = OrderService;
  }

  async getOrders(req: Request, res: Response): Promise<void> {
    const Orders = await this.orderService.getOrders();
    res.status(200).json(Orders);
  }

  async finishOrder(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      res.sendStatus(404);
      return;
    }

    await this.orderService.finishOrder(id);
    res.sendStatus(200);
  }

  async deliverOrder(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      res.sendStatus(404);
      return;
    }

    await this.orderService.deliverOrder(id);
    res.sendStatus(200);
  }

  async createOrder(req: Request, res: Response): Promise<void> {
    const body = req.body as NewOrder;

    await this.orderService.createOrders(body);
    res.sendStatus(201);
  }
}
