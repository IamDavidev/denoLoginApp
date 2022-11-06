import { red, yellow } from '$fmt/colors.ts';
import { Application, Router, type RouterContext } from '$oak/mod.ts';
import * as uuid from 'https://deno.land/std@0.119.0/uuid/mod.ts';

import { createUser, findUserById } from '@/src/db/functions.db.ts';
import { ValidUser } from '@/src/interfaces/validUser.inteface.ts';
import userRegisterAdapter from '@/src/userRegister.adapter.ts';

console.log(red('hello world'));

export const app = new Application();
export const router = new Router();
const PORT = 8080;

type THasUuid = string;
export async function generateUUID(): Promise<THasUuid> {
	const name_space = String(uuid.v1.generate());
	const data: Uint8Array = new TextEncoder().encode('deno.land');
	const hash_uuid: THasUuid = await uuid.v5.generate(name_space, data);
	return hash_uuid;
}
export function validateUUID(uuidReq: THasUuid): boolean {
	return uuid.v5.validate(uuidReq);
}

// Endpoints

router
	.post('/register', async (ctx: RouterContext<'/register'>) => {
		const { request, response } = ctx;

		// check if user is already registered
		const registerUserValid = await userRegisterAdapter(
			request.body({
				type: 'json',
			})
		);
		if (!registerUserValid.isValid) {
			response.status = registerUserValid.status;
			response.body = registerUserValid.messageError;
			return;
		}
		const User = registerUserValid.user as ValidUser;
		const isUserAlreadyRegistered = await findUserById(User.id);
		if (typeof isUserAlreadyRegistered !== 'undefined') {
			response.status = 409;
			response.body = 'The user is already registered';
			return;
		}
		createUser(User);
		// addUserToBBDD(User);

		console.log('User added to BBDD: 	1', User);
		response.status = registerUserValid.status;
		response.body = User;
	})
	.get('/users', (ctx: RouterContext<'/users'>) => {
		const { response } = ctx;
		response.body = 'Hello world';
		// const users = Array.from(UsersBBDD.values());
		// response.body = s;
	});

// middlewares
app.use(router.routes());
app.use(router.allowedMethods());

// event of server
app.addEventListener('listen', (): void => {
	console.log(yellow(`Server is running on port [-${PORT}-]`));
});
