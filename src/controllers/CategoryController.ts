import { Request, Response } from 'express';
import Category from '../models/Category';
import ICategoryService from '../services/categories/ICategoryService';

export default class CategoryController {
  readonly categoryService: ICategoryService;

  constructor(categoryService: ICategoryService) {
    this.categoryService = categoryService;
  }

  async getCategories(req: Request, res: Response): Promise<void> {
    try {
      const categories = await this.categoryService.getCategories();
      res.status(200).json(categories);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}
