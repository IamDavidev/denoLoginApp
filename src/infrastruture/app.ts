import { Application } from '$oak/mod.ts';
import { router } from '@/infrastruture/routes.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', (): void => {
	console.log('server is running on port 8080');
});

export default app;
