// import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

// import { app } from '@/src/app.ts';

// app.listen({
// 	port: 8080,
// });

// import { PrismaClient } from '../pri/generated/client/deno/edge.ts'
import { serve } from 'https://deno.land/std@0.140.0/http/server.ts';
import { PrismaClient } from '@/prisma/generated/client/deno/edge.ts';

const prisma = new PrismaClient();

async function handler(request: Request) {
	const log = await prisma.log.create({
		data: {
			level: 'Info',
			message: `${request.method} ${request.url}`,
			meta: {
				headers: JSON.stringify(request.headers),
			},
		},
	});
	const body = JSON.stringify(log, null, 2);
	return new Response(body, {
		headers: { 'content-type': 'application/json; charset=utf-8' },
	});
}

serve(handler);
