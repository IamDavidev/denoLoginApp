console.log('Login Deno Hexagonal Architecture');

import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';

const app = new Application();
const router = new Router();

router.get('/books', ctx => {
	//   ctx.response.body = 'Welcome to Deno Hexagonal Architecture Minimal Login';
	ctx.response.body = {
		message: 'Welcome to Deno Hexagonal Architecture Minimal Login',
	};
	ctx.response.type = 'json';
	ctx.response.status = 200;
});

router.get('/books/:id', ctx => {
	// get id
	const id = ctx.params.id;
	console.info('🚀 ~>  file: app.ts ~>  line 20 ~>  router.get ~>  id', id);
	ctx.response.body = `<body>
        <h1>your book has id : ${id}</h1>
</body>`;
});

router.get('/', ctx => {
	console.log('Hello World');
	ctx.response.body = `<!DOCTYPE html>
    <html>
      <head><title>Hello oak!</title><head>
      <body>
        <h1>Hello oak!</h1>
      </body>
    </html>
  `;
});

const PORT = 8080;

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({
	port: PORT,
});
