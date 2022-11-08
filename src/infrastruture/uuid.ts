import * as uuid from 'https://deno.land/std@0.119.0/uuid/mod.ts';

export type THasUuid = string;
export async function generateUUID(): Promise<THasUuid> {
	const name_space = String(uuid.v1.generate());
	const data: Uint8Array = new TextEncoder().encode('deno.land');
	const hash_uuid: THasUuid = await uuid.v5.generate(name_space, data);
	return hash_uuid;
}
export function validateUUID(uuidReq: THasUuid): boolean {
	return uuid.v5.validate(uuidReq);
}
