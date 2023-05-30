import Extra from './Extra';
import Product from './Product';

export class OrderedProduct {
  id: number;

  product?: Product;

  amount: number;

  annotations: string;

  selectedExtras?: Extra[] | number[];
}
