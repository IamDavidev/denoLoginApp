import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

import { app } from '@/src/app.ts';

app.listen({
	port: 8080,
});
