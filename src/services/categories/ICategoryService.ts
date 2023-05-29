import Category from 'models/Category';

export default interface ICategoryService {
  getCategories: () => Promise<Category[]>;
}
