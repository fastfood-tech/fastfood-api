import Category from '../../models/Category';
import ICategoryRepository from '../../repositories/categories/ICategoryRepository';
import ICategoryService from './ICategoryService';

export default class CategoryService implements ICategoryService {
  private readonly categoryRepository: ICategoryRepository;

  constructor(categoryRepository: ICategoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async getCategories(): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll();
    return categories;
  }
}
