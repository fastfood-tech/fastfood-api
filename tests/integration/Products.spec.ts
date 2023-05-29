import supertest from 'supertest';
import Product from 'models/Product';
import app from '../../src/app';
import { seedProducts } from './factories/productFactory';

describe('GET /products', () => {
  it('should return all products', async () => {
    await seedProducts(5);

    const response = await supertest(app).get('/products');
    const products: Product[] = response.body;

    expect(products).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          code: expect.any(Number),
          imageUrl: expect.any(String),
          categoryId: expect.any(Number),
          ingredients: expect.any(String),
          price: expect.any(Number),
        }),
      ]),
    );
  });
});
