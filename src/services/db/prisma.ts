import { PrismaClient } from '@prisma/client';
import { __dev__ } from '../../config/constants';

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (__dev__) global.prisma = prisma;
