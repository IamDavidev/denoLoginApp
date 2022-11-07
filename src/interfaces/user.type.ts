export enum Role {
	Admin = 'Admin',
	User = 'User',
	Guest = 'Guest',
}

export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	uuid: string;
	role: Role;
};
