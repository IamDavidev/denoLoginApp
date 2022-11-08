import { type RouterContext } from '$oak/router.ts';

import userRegisterAdapter from '@/userRegister.adapter.ts';
import UserRepository from '@/infrastruture/respositories/user.repository.ts';
import { ValidUser } from '@/interfaces/validUser.inteface.ts';

export default async function registerController(
	ctx: RouterContext<'/register'>
) {
	const userRepository = new UserRepository();
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

	const isUserAlreadyRegistered = await userRepository.findUserById(User.id);
	if (isUserAlreadyRegistered) {
		response.status = 409;
		response.body = 'User already registered';
		return;
	}
	userRepository.createUser(User);

	console.log('User added to BBDD: 	1', User);
	response.status = registerUserValid.status;
	response.body = User;
}
