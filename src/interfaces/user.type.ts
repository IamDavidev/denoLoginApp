export enum Role {
	Admin = 'Admin',
	User = 'User',
	Guest = 'Guest',
}
// export const Role = {
// 	Admin: 'Admin',
// 	User: 'User',
// 	Guest: 'Guest',
// };
// export type Role = typeof Role[keyof typeof Role];
export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	uuid: string;
	role: Role;
};
