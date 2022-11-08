import { Router } from '$oak/router.ts';
import registerController from '@/infrastruture/controllers/register.controller.ts';
import userController from '@/infrastruture/controllers/users.controller.ts';

export const router = new Router();

router
	.post('/register', registerController)
	.get('/users', userController)
	.get('users/:id', () => {
		console.log('id');
	});
