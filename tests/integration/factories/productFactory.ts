import { faker } from '@faker-js/faker';
import { prisma } from 'config/database';
import { Prisma } from '@prisma/client';
import { seedExtras } from './extrasFactory';
import { seedCategories } from './categoryFactory';

export async function seedProduct(): Promise<void> {
  seedCategories(1);
  const category = await prisma.category.findFirst({});

  seedExtras(1);
  const extras = await prisma.extra.findFirst({});

  const name = faker.commerce.productName();
  const code = faker.number.int({ min: 1000, max: 9999 });
  const imageUrl = faker.image.url();
  const ingredients = faker.lorem.words(5);
  const price = +faker.commerce.price();

  const productData: Prisma.ProductCreateInput = {
    name,
    code,
    imageUrl,
    category: { connect: { id: category.id } },
    ingredients,
    price,
    extras: { connect: [{ id: extras.id }] },
  };

  await prisma.product.create({
    data: productData,
  });
}

export async function seedOrderedProduct(): Promise<void> {
  await seedProduct();
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
