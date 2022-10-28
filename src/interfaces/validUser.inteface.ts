export interface IValidUser {
	id: string;
	name: string;
	email: string;
	password: string;
}

export interface IValidRegisterUser {
	isValid: boolean;
	messageError: string;
	status: number;
	user: IValidUser | null;
}
