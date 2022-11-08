import { RouterContext } from 'https://deno.land/x/oak@v11.1.0/router.ts';
import { getAllUsers } from '../db/functions.db.ts';

export default async function userController(ctx: RouterContext<'/users'>) {
	const { response } = ctx;

	const users = await getAllUsers();

	console.info('🚀 ~>  file: app.ts ~>  line 61kk ~>  .get ~>  users', users);

	response.body = users;
}
