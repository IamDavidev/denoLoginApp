import 'https://deno.land/x/dotenv@v3.2.0/load.ts';
import app from '@/infrastruture/app.ts';

import {
	assertEquals,
	assertNotEquals,
} from 'https://deno.land/std@0.152.0/testing/asserts.ts';
import {
	beforeEach,
	describe,
	it,
} from 'https://deno.land/std@0.161.0/testing/bdd.ts';
// import { Role } from "@/prisma-client/deno/index.d.ts";
import { Role, User } from '@/interfaces/user.type.ts';

// {
//   "id": "019f6be7-b9f4-5246-94fe-147a5617f8fe",
//   "name": "David",
//   "password": "352xALX&Jmsq",
//   "email": "david@david.com"
// }
enum METHODS_FETCH {
	_GET_ = 'GET',
	_POST_ = 'POST',
	_PUT_ = 'PUT',
}

const newUser: User = {
	id: '627fe846de8030ff5224c84a',
	name: 'Jhon',
	email: 'David@david.com',
	password: '352xALX&Jmsq',
	role: Role.Guest,
	uuid: '8e393fa5-b964-56a3-a100-40a53c6b1419',
};
const port = 8083;

let abortController: AbortController | null;

//TODO: Separate test in each file

describe('Test Enpoint ', () => {
	beforeEach(() => {
		abortController = new AbortController();
		const signal: AbortSignal = abortController.signal;
		app.listen({
			port,
			signal,
		});
	});

	it('[POST USERS] Shuold create User in BBDD', async () => {
		try {
			const response = await fetch('http://localhost:8083/register', {
				body: JSON.stringify(newUser),
				method: METHODS_FETCH._POST_,
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.text();
			console.info(
				'🚀 ~>  file: init.test.ts ~>  line 64 ~>  it ~>  data',
				data
			);
			assertEquals(response.ok, true, 'response is not ok');
			abortController?.abort();
			abortController = null;
		} catch (err) {
			abortController?.abort();
			console.log('Errror', err);
		}
	});

	it('[GET USERS] Shuold return array of users ', async () => {
		try {
			const response = await fetch('http://localhost:8083/users', {
				method: METHODS_FETCH._GET_,
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			assertNotEquals(data, null, 'data is null');
			abortController?.abort();
			abortController = null;
		} catch (err) {
			abortController?.abort();
			console.log('Errror', err);
		}
	});
});
