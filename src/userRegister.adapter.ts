import { type BodyJson } from '$oak/body.ts';
import {
	regexEmail,
	regexName,
	regexPassword,
	validateUUID,
} from '@/src/Validations.ts';
import { IValidRegisterUser } from '@/src/interfaces/validUser.inteface.ts';

async function userRegisterAdapter(
	body: BodyJson
): Promise<IValidRegisterUser> {
	const { name, id, email, password, role, uuid } = await body.value;

	if (!validateUUID(uuid))
		return {
			isValid: false,
			messageError: "The id isn't valid",
			status: 400,
			user: null,
		};
	if (!regexEmail.test(email))
		return {
			isValid: false,
			messageError: "The email isn't valid",
			status: 400,
			user: null,
		};

	if (!regexPassword.test(password))
		return {
			isValid: false,
			messageError: "The password isn't valid",
			status: 400,
			user: null,
		};
	if (!regexName.test(name))
		return {
			isValid: false,
			messageError: "The name isn't valid",
			status: 400,
			user: null,
		};

	if (typeof uuid !== 'string') {
		return {
			isValid: false,
			messageError: "The uuid isn't valid",
			status: 400,
			user: null,
		};
	}

	return {
		isValid: true,
		messageError: '',
		status: 200,
		user: {
			uuid,
			id,
			name,
			email,
			password,
			role,
		},
	};
}

export default userRegisterAdapter;
