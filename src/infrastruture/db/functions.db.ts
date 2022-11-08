import { User } from '@/src/entities/user.entity.ts';
import prisma from '@/src/infrastruture/client/prism.client.ts';

export async function findUserById(id: string) {
	console.info(
		'🚀 ~>  file: functions.db.ts ~>  line 5 ~>  findUserById ~>  id',
		id
	);
	if (!id || typeof id !== 'string') throw new Error('id is not valid');
	try {
		const user = await prisma.user.findUnique({
			where: {
				id: id,
			},
		});
		console.info(
			'🚀 ~>  file: functions.db.ts ~>  line 16 ~>  findUserById ~>  s',
			user
		);
		if (user === undefined) return null;
		return user;
	} catch (err) {
		console.log(
			'🚀 ~ file: functions.db.ts ~ line 18 ~ findUserById ~ err',
			err
		);
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
		console.info(
			'🚀 ~>  file: functions.db.ts ~>  line 35 ~>  findUserByEmail ~>  user',
			user
		);

		if (user === null) return null;
		return user;
	} catch (err) {
		console.log('🚀 ~ file: functions.db.ts ~ findUserByEmail ~ err', err);
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

export async function getAllUsers() {
	try {
		const users = await prisma.user.findMany();
		return users;
	} catch (err) {
		console.log('Error: ', err);
	}
}
