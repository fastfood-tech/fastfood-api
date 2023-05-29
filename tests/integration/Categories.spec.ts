import supertest from 'supertest';
import Category from 'models/Category';
import app from '../../src/app';
import { seedCategories } from './factories/categoryFactory';

describe('GET /categories', () => {
  it('should return all categories', async () => {
    await seedCategories();

    const response = await supertest(app).get('/categories');
    const categories: Category[] = response.body;

    expect(categories).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          image: expect.any(String),
        }),
      ]),
    );
  });
});
