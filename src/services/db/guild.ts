import { prisma } from './prisma';

export const createGuild = (guildId: string) => {
  return prisma.server.create({ data: { guildId } });
};

export const getGuildById = (guildId: string) => {
  return prisma.server.findFirst({ where: { guildId } });
};

export const createGuildIfNotExist = async (guildId: string) => {
  const guild = await getGuildById(guildId);
  if (!guild) {
    await createGuild(guildId);
  }
  return guild;
};

export const getAllGuilds = () => {
  return prisma.server.findMany();
};

export const setGuildPrayersChannelId = async (
  guildId: string,
  prayersChannelId: string
) => {
  return prisma.server.update({
    where: { guildId },
    data: { prayersChannelId },
  });
};

export const setGuildPrayersMessageId = async (
  guildId: string,
  prayersMessageId: string
) => {
  return prisma.server.update({
    where: { guildId },
    data: { prayersMessageId },
  });
};
