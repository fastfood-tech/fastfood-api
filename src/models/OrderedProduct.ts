import Extra from './Extra';
import Product from './Product';

export class OrderedProduct {
  product: Product;

  amount: number;

  annotations: string;

  selectedExtras: Extra[];
}
