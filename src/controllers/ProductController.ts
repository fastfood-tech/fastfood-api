import { Request, Response } from 'express';
import IProductService from '../services/products/IProductService';

export default class ProductController {
  readonly productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;
  }

  async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.productService.getProducts();
      res.status(200).json(products);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
