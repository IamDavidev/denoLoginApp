import * as uuid from 'https://deno.land/std@0.119.0/uuid/mod.ts';
import { THasUuid } from '@/infrastruture/uuid.ts';

export const regexEmail = new RegExp(
	/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
export const regexPassword = new RegExp(
	/^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/
);
export const regexName = new RegExp(/^[a-zA-Z]{2,}$/);
// const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function validateUUID(uuidReq: THasUuid): boolean {
	return uuid.v5.validate(uuidReq);
}
