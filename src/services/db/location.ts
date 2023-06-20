import { prisma } from './prisma';

export const createLocation = (city: string, country: string) => {
  return prisma.location.create({ data: { country, city } });
};

export const getLocationByCountryCity = (city: string, country: string) => {
  return prisma.location.findFirst({ where: { country, city } });
};

export const createLocationIfNotExist = async (
  city: string,
  country: string
) => {
  const loc = await getLocationByCountryCity(city, country);
  if (!loc) return createLocation(city, country);
  return loc;
};
