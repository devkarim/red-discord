import { createLocationIfNotExist } from './location';
import { prisma } from './prisma';

export const createUser = (id: string) => {
  return prisma.user.create({ data: { id } });
};

export const getUserById = (id: string) => {
  return prisma.user.findFirst({ where: { id } });
};

export const createUserIfNotExist = async (id: string) => {
  const user = await getUserById(id);
  if (!user) return createUser(id);
  return user;
};

export const setUserLocation = async (
  id: string,
  city: string,
  country: string,
  create: boolean = true
) => {
  if (create) {
    await createUserIfNotExist(id);
  }
  const loc = await createLocationIfNotExist(city, country);
  return prisma.user.update({
    where: { id },
    data: {
      location: {
        connect: {
          id: loc.id,
        },
      },
    },
  });
};
