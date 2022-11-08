import { PrismaClient } from '@/prisma-client/deno/edge.ts';
import { type User } from '@/interfaces/user.type.ts';

export default class UserRepository {
	private _prisma: PrismaClient;

	constructor() {
		this._prisma = new PrismaClient();
	}

	public async findUserById(id: string) {
		if (!id || typeof id !== 'string') throw new Error('id is not valid');
		try {
			const user = await this._prisma.user.findUnique({
				where: {
					id: id,
				},
			});
			if (user === undefined) return null;
			return user;
		} catch (err) {
			throw new Error('Error in find User BY Id', err);
		}
	}

	public async findUserByEmail(email: string) {
		if (!email || typeof email !== 'string')
			throw new Error('email is not valid');
		try {
			const user = await this._prisma.user.findUnique({
				where: {
					email,
				},
			});

			if (user === null) return null;
			return user;
		} catch (err) {
			throw new Error('Error in find User BY Email', err);
		}
	}

	public async createUser(user: User) {
		if (!user) throw new Error('User is required');
		try {
			await this._prisma.user.create({
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
			throw new Error('Error in create User', err);
		}
	}

	public async updateUser() {}

	public async getAllUsers() {
		try {
			const users = await this._prisma.user.findMany();
			return users;
		} catch (err) {
			console.log('Error: ', err);
		}
	}
}
