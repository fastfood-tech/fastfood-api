import Extra from 'models/Extra';
import { OrderedProduct } from 'models/OrderedProduct';
import Product from 'models/Product';

type NewOrder = {
  order: [
    {
      productId: number;
      amount: number;
      annotations: string;
      selectedExtras: number[];
    },
  ];
};

export type OrderDetails = {
  id: number;
  isDone: boolean;
  isDelivered: boolean;
  products: OrderedProduct[];
};

export default NewOrder;
