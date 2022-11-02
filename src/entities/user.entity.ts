import { Role } from '@/src/interfaces/user.type.ts';

export class User {
	constructor(
		public readonly id: string,
		public email: string,
		public password: string,
		public name: string,
		public role: Role
	) {
		this.id = id;
		this.name = name;
		this.password = password;
		this.email = email;
		this.role = role;
	}
}
