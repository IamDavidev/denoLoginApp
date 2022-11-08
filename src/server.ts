import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import app from '@/infrastruture/app.ts';

app.listen({
	port: 8080,
});
