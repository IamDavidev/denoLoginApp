import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

import { app } from '@/src/app.ts';

app.listen({
	port: 8080,
});

// import { PrismaClient } from '../pri/generated/client/deno/edge.ts'
// import { serve } from 'https://deno.land/std@0.140.0/http/server.ts';
// import { PrismaClient } from '@/prisma/generated/client/deno/edge.ts';
// import { PrismaClient } from '@/prisma-client';

// const prisma = new PrismaClient();
