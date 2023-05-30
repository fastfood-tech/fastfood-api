import { faker } from '@faker-js/faker';
import { prisma } from 'config/database';
import Extra from 'models/Extra';

type ExtraData = Omit<Extra, 'id'>;

export async function seedExtras(count: number): Promise<void> {
  const extrasData: ExtraData[] = [];

  for (let i = 0; i < count; i += 1) {
    const name = faker.commerce.productName();
    const description = faker.lorem.sentence();
    const price = Number(faker.commerce.price());
    const imageUrl = faker.image.url();

    const extraData: ExtraData = {
      name,
      description,
      price,
      imageUrl,
    };

    extrasData.push(extraData);
  }

  await prisma.extra.createMany({
    data: extrasData,
  });
}
