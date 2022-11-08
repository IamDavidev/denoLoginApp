import { PrismaClient } from '@/prisma-client/deno/edge.ts';

const prisma: PrismaClient = new PrismaClient();

export default prisma;
