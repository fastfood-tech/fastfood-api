import Extra from 'models/Extra';
import { OrderedProduct } from 'models/OrderedProduct';
import Product from 'models/Product';

type NewOrder = {
  clientName: string;
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
  clientName: string;
  products: OrderedProduct[];
};

export type ProductFilterOptions = {
  name?: string;
  code?: number;
  categoryId?: number;
};

export default NewOrder;
