import Extra from './Extra';

export default class Product {
  id: number;

  name: string;

  code: number;

  imageUrl: string;

  categoryId: number;

  ingredients: string;

  price: number;

  extras: Extra[];
}
