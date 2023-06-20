import { prisma } from './prisma';

export const createGuild = (id: string) => {
  return prisma.guild.create({ data: { id } });
};

export const getGuildById = (id: string) => {
  return prisma.guild.findFirst({ where: { id } });
};

export const createGuildIfNotExist = async (id: string) => {
  const guild = await getGuildById(id);
  if (!guild) {
    await createGuild(id);
  }
  return guild;
};

export const getAllGuilds = () => {
  return prisma.guild.findMany();
};

export const setGuildPrayersChannelId = async (
  id: string,
  prayersChannelId: string
) => {
  return prisma.guild.update({
    where: { id },
    data: { prayersChannelId },
  });
};

export const setGuildPrayersMessageId = async (
  id: string,
  prayersMessageId: string
) => {
  return prisma.guild.update({
    where: { id },
    data: { prayersMessageId },
  });
};
