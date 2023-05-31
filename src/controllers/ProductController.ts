import { Request, Response } from 'express';
import { ProductFilterOptions } from 'protocols';
import IProductService from '../services/products/IProductService';

export default class ProductController {
  readonly productService: IProductService;

  constructor(productService: IProductService) {
    this.productService = productService;
  }

  async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const { code, categoryId, name } = req.query as { [key: string]: string };

      if (code && Number.isNaN(Number(code))) {
        res.sendStatus(400);
        return;
      }

      if (categoryId && Number.isNaN(Number(categoryId))) {
        res.sendStatus(400);
        return;
      }

      const filterOptions: ProductFilterOptions = {};
      if (code) filterOptions.code = Number(code);
      if (categoryId) filterOptions.categoryId = Number(categoryId);

      if (name) filterOptions.name = name;

      const products = await this.productService.getProducts(filterOptions);
      res.status(200).json(products);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getTopProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.productService.getTop();
      res.status(200).json(products);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
