import { OrderedProduct } from './OrderedProduct';

export default class Order {
  id: number;

  product?: OrderedProduct;

  isDone: boolean;

  createdAt: Date;
}
