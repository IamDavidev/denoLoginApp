import prisma from '@/src/client/prism.client.ts';
import { User } from '../entities/user.entity.ts';
import { User } from '../interfaces/user.type.ts';

export async function findUserById(id: string) {
	if (!id || typeof id !== 'string') return null;
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: id,
			},
		});
		if (user !== undefined) return user;
		return null;
	} catch (err) {
		throw new Error(err);
	}
}

export async function findUserByEmail(email: string) {
	if (!email || typeof email !== 'string') return null;
	try {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (user !== null) return user;
		return null;
	} catch (err) {
		throw new Error(err);
	}
}

export async function createUser(user: User) {
	if (!user) throw new Error('User is required');
	try {
		await prisma.user.create({
			data: {
				id: user.id,
				email: user.email,
				name: user.name,
				password: user.password,
				uuid: user.id,
				role: user.role,
			},
		});
	} catch (err) {
		throw new Error(err);
	}
}
