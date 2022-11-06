import { User } from './user.type.ts';

export type ValidUser = User;
export interface IValidRegisterUser {
	isValid: boolean;
	messageError: string;
	status: number;
	user: User | null;
}
