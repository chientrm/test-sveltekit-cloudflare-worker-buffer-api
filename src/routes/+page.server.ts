import type { PageServerLoad } from './$types';
import { EncryptJWT } from 'jose';

export const load: PageServerLoad = () => {
	const base64_secret = 'K+ESXQgk/ISHUDwuAjtv6PnbwiyFlt5bDXXNLzD0usU=';
	const key = Buffer.from(base64_secret, 'base64');
	const encrypted = new EncryptJWT({ message: 'SvelteKit' })
		.setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
		.encrypt(key);
	return { encrypted };
};
