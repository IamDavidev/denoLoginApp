// import { assertEquals } from 'https://deno.land/std@0.152.0/testing/asserts.ts';
import {
	assertEquals,
	assertNotEquals,
} from 'https://deno.land/std@0.152.0/testing/asserts.ts';
import { describe, it } from 'https://deno.land/std@0.161.0/testing/bdd.ts';
import { app } from '../src/app.ts';

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

const newUser = {
	id: '8e393fa5-b964-56a3-a100-40a53c6b1419',
	name: 'Jhon',
	email: 'David@david.com',
	// password: 'XLQPswQLpD4x60nb8hcg',
	password: '352xALX&Jmsq',
};
const port = 8083;
describe('Test Enpoint ', () => {
	it('[POST USERS] Shuold return array of users ', async () => {
		const abortController: AbortController = new AbortController();
		const { signal } = abortController;
		app.listen({ port, signal });
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
			abortController.abort();
		} catch (err) {
			abortController.abort();
			console.log('Errror', err);
		}
	});

	it('[GET USERS] Shuold return array of users ', async () => {
		const abortController: AbortController = new AbortController();
		const { signal } = abortController;
		app.listen({ port, signal });
		try {
			const response = await fetch('http://localhost:8083/users', {
				method: METHODS_FETCH._GET_,
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await response.json();
			assertNotEquals(data, null, 'data is null');
			abortController.abort();
		} catch (err) {
			abortController.abort();
			console.log('Errror', err);
		}
	});
});
