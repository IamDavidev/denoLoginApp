import { type RouterContext } from 'https://deno.land/x/oak@v11.1.0/router.ts';
import { ValidUser } from '../../interfaces/validUser.inteface.ts';
import userRegisterAdapter from '../../userRegister.adapter.ts';
import { createUser, findUserById } from '../db/functions.db.ts';

export default async function registerController(
	ctx: RouterContext<'/register'>
) {
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
	if (isUserAlreadyRegistered) {
		response.status = 409;
		response.body = 'User already registered';
		return;
	}
	createUser(User);
	// addUserToBBDD(User);

	console.log('User added to BBDD: 	1', User);
	response.status = registerUserValid.status;
	response.body = User;
}
