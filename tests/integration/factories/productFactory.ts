import { faker } from '@faker-js/faker';
import Product from 'models/Product';
import { prisma } from 'config/database';
import { OrderedProduct } from 'models/OrderedProduct';
import { Prisma } from '@prisma/client';
import { seedExtras } from './extrasFactory';

type ProductData = Omit<Product, 'id' | 'extras'>;

export async function seedProducts(count: number): Promise<void> {
  const productsData: ProductData[] = [];

  for (let i = 0; i < count; i += 1) {
    const name = faker.commerce.productName();
    const code = faker.number.int({ min: 1000, max: 9999 });
    const imageUrl = faker.image.url();
    const categoryId = faker.number.int({ min: 1, max: 5 });
    const ingredients = faker.lorem.words(5);
    const price = +faker.commerce.price();

    const productData: ProductData = {
      name,
      code,
      imageUrl,
      categoryId,
      ingredients,
      price,
    };

    productsData.push(productData);
  }

  await prisma.product.createMany({
    data: productsData,
  });
}

export async function seedOrderedProduct(): Promise<void> {
  await seedProducts(1);
  const product = await prisma.product.findFirst({ include: { extras: true } });

  await seedExtras(1);
  const extra = await prisma.extra.findFirst({});

  const orderedProduct: Prisma.OrderedProductCreateInput = {
    amount: faker.number.int({ min: 1, max: 10 }),
    annotations: faker.lorem.words(5),
    product: {
      connect: { id: product.id },
    },
    selectedExtras: {
      connect: [{ id: extra.id }],
    },
  };

  await prisma.orderedProduct.create({ data: orderedProduct });
}
