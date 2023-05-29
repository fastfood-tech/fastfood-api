import { OrderedProduct } from './OrderedProduct';

export class Order {
  id: number;

  orderedProduct: OrderedProduct;

  isDone: boolean;

  createdAt: Date;
}
