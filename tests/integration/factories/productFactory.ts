import { faker } from '@faker-js/faker';
import Product from 'models/Product';
import { prisma } from 'config/database';

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
