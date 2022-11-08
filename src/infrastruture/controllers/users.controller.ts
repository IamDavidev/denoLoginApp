import { RouterContext } from '$oak/router.ts';
import UserRepository from '@/infrastruture/respositories/user.repository.ts';

export default async function userController(ctx: RouterContext<'/users'>) {
	const userRepository = new UserRepository();
	const { response } = ctx;

	// const users = await getAllUsers();
	const users = await userRepository.getAllUsers();

	console.info('🚀 ~>  file: app.ts ~>  line 61kk ~>  .get ~>  users', users);

	response.body = users;
}
