import supertest from 'supertest';
import Order from 'models/Order';
import { prisma } from 'config/database';
import app from '../../src/app';
import { seedOrder } from './factories/OrderFactory';
import { seedProduct } from './factories/productFactory';

beforeEach(async () => {
  await prisma.order.deleteMany({});
  await prisma.orderedProduct.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.extra.deleteMany({});
});

afterAll(() => prisma.$disconnect());

describe('GET /orders', () => {
  it('should return all undelivered orders', async () => {
    await seedOrder(true, false);

    const response = await supertest(app).get('/orders');
    const orders: Order[] = response.body;

    expect(orders).toMatchObject(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          isDelivered: false,
          isDone: true,
          clientName: expect.any(String),
          products: expect.arrayContaining([
            expect.objectContaining({
              amount: expect.any(Number),
              annotations: expect.any(String),
              id: expect.any(Number),
              selectedExtras: expect.arrayContaining([
                expect.objectContaining({
                  description: expect.any(String),
                  id: expect.any(Number),
                  imageUrl: expect.any(String),
                  name: expect.any(String),
                  orderedProductId: expect.any(Number),
                  price: expect.any(Number),
                }),
              ]),
            }),
          ]),
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

describe('Post /orders', () => {
  it('should save order for valid order details', async () => {
    await seedProduct();
    const product = await prisma.product.findFirst({
      include: { extras: true },
    });
    const validExtra = product.extras[0];

    const validBody = {
      clientName: 'Jão',
      order: [
        {
          productId: product.id,
          amount: 5,
          annotations: 'sem cebola',
          selectedExtras: [validExtra.id],
        },
      ],
    };

    const response = await supertest(app).post('/orders').send(validBody);

    expect(response.statusCode).toEqual(201);
  });

  it('should return status code 400 for inexistent product in order details', async () => {
    const invalidBody = {
      clientName: 'Jão',
      order: [
        {
          productId: 42,
          amount: 42,
          annotations: 'com cebola',
          selectedExtras: [73],
        },
      ],
    };

    const response = await supertest(app).post('/orders').send(invalidBody);

    expect(response.statusCode).toEqual(400);
  });
});

describe('Post /orders/{id}/finish', () => {
  it('should finish order when it is not done yet', async () => {
    await seedOrder(false, false);
    const order = await prisma.order.findFirst({});

    const response = await supertest(app).post(`/orders/${order.id}/finish`);

    expect(response.statusCode).toEqual(200);
  });

  it('should return status 409 if try finish an order when it is already done', async () => {
    await seedOrder(true, false);
    const order = await prisma.order.findFirst({});

    const response = await supertest(app).post(`/orders/${order.id}/finish`);

    expect(response.statusCode).toEqual(409);
  });
});

describe('Post /orders/{id}/deliver', () => {
  it('should deliver order when it is not delivered yet', async () => {
    await seedOrder(true, false);
    const order = await prisma.order.findFirst({});

    const response = await supertest(app).post(`/orders/${order.id}/deliver`);

    expect(response.statusCode).toEqual(200);
  });

  it('should return status 409 if try diliver an order when it is already delivered', async () => {
    await seedOrder(true, true);
    const order = await prisma.order.findFirst({});

    const response = await supertest(app).post(`/orders/${order.id}/finish`);

    expect(response.statusCode).toEqual(409);
  });
});
