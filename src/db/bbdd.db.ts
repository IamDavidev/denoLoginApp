// import { User } from '../interfaces/user.type.ts';
import { User } from '@/src/interfaces/user.type.ts';

export const UsersBBDD = new Map<string, User>();

export const findUserById = (id: string): User | undefined => UsersBBDD.get(id);

export const findUserByEmail = (email: string): User | undefined =>
	UsersBBDD.get(email);

export const addUserToBBDD = (user: User): Map<string, User> =>
	UsersBBDD.set(user.id, user);
