import { Application, Router } from 'https://deno.land/x/oak@v11.1.0/mod.ts';
import * as uuid from 'https://deno.land/std@0.119.0/uuid/mod.ts';

const app = new Application();
const router = new Router();
const PORT = 8080;

type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};
// bbdd
let users: Array<User> = [];

// regex validations
const regexEmail = new RegExp(
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const regexPassword = new RegExp(
	/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/
);
const regexName = new RegExp(/^[a-zA-Z]{2,}$/);
// const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// function to uuid
type THasUuid = string;
export async function generateUUID(): Promise<THasUuid> {
	const name_space = String(uuid.v1.generate());
	const data: Uint8Array = new TextEncoder().encode('deno.land');
	const hash_uuid: THasUuid = await uuid.v5.generate(name_space, data);
	return hash_uuid;
}
export function validateUUID(uuidReq: THasUuid): boolean {
	return uuid.v5.validate(uuidReq);
}

// Endpoints
router.post('/register', async ({ request, response }) => {
	const result = request.body({
		type: 'json',
	});
	console.info(
		'🚀 ~>  file: app.ts ~>  line 40 ~>  router.post ~>  result',
		await result.value
	);
	const { name, id, email, password } = await result.value;

	// validate fields
	if (!validateUUID(id)) {
		response.status = 400;
		response.body = "The id isn't valid";
		return;
	}
	if (!regexEmail.test(email)) {
		response.status = 400;
		response.body = "The email isn't valid";
		return;
	}
	if (!regexPassword.test(password)) {
		response.status = 400;
		response.body = "The password isn't valid";
		return;
	}
	if (!regexName.test(name)) {
		response.status = 400;
		response.body = "The name isn't valid";
		return;
	}

	// check if user is already registered
	const isUserAlreadyRegistered = users.find(
		user => user.id === id || user.email === email
	);
	if (isUserAlreadyRegistered) {
		response.status = 409;
		response.body = 'The user is already registered';
		return;
	}

	users.push({
		id,
		name,
		email,
		password,
	});
	console.log('User >> []<<< ', users);
	response.status = 201;
	response.body = 'User created';
});

// middlewares
app.use(router.routes());
app.use(router.allowedMethods());

// server
app.listen({
	port: PORT,
});

// event of server
app.addEventListener('listen', (): void => {
	console.log(`Server is running on port [-${PORT}-]`);
});
