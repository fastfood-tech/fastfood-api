import { PrismaClient } from '@prisma/client';
import { categories, extraItems, products } from './seedData';

const prisma = new PrismaClient();

async function main() {
  const productsDb = await prisma.product.findMany({});
  if (productsDb.length >= products.length) {
    console.log('skipping seed');
    return;
  }

  await Promise.all(
    categories.map(async c => {
      await prisma.category.upsert({
        where: { id: c.id },
        update: {},
        create: c,
      });
    }),
  );

  await Promise.all(
    extraItems.map(async e => {
      await prisma.extra.upsert({
        where: { id: e.id },
        update: {},
        create: e,
      });
    }),
  );

  await Promise.all(
    products.map(async p => {
      await prisma.product.create({
        data: {
          ...p,
          extras: {
            connect: p.extras?.map(e => {
              return { id: e };
            }),
          },
        },
      });
    }),
  );
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
