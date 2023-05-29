import { faker } from '@faker-js/faker';
import { Category } from '@prisma/client';
import { prisma } from 'config/database';

type categoryParams = Omit<Category, 'id'>;

export function createCategoryData() {
  return {
    name: faker.commerce.department(),
    image: faker.image.url(),
  };
}

export async function seedCategories(amount = 5) {
  const categories: categoryParams[] = [];

  for (let i = 0; i < amount; i += 1) {
    const category: categoryParams = createCategoryData();

    categories.push(category);
  }

  const restult = await prisma.category.createMany({
    data: categories,
    skipDuplicates: true,
  });

  return restult.count;
}
