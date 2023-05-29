import supertest from 'supertest';
import { Order } from 'models/Order';
import app from '../../src/app';
import { seedOrder } from './factories/OrderFactory';

describe('GET /orders', () => {
  it('should return all undelivered orders', async () => {
    await seedOrder(true, false);

    const response = await supertest(app).get('/orders');
    const orders: Order[] = response.body;

    expect(orders).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          isDone: true,
          isDelivered: false,
          createdAt: expect.any(Date),
          product: expect.objectContaining({
            id: expect.any(Number),
            amount: expect.any(Number),
            annotations: expect.any(String),
            product: expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              code: expect.any(Number),
              imageUrl: expect.any(String),
              categoryId: expect.any(Number),
              ingredients: expect.any(String),
              price: expect.any(Number),
            }),
            selectedExtras: expect.arrayContaining([
              expect.objectContaining({
                id: expect.any(Number),
                name: expect.any(String),
                imageUrl: expect.any(String),
                price: expect.any(Number),
                description: expect.any(String),
              }),
            ]),
          }),
        }),
      ]),
    );
  });

  it('should return empty array when all orders are delivered', async () => {
    await seedOrder(true, true);

    const response = await supertest(app).get('/orders');
    const orders: Order[] = response.body;

    expect(orders.length).toEqual(0);
  });
});
