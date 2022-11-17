import {createTRPCProxyClient, httpBatchLink} from '@trpc/client';
import {AppRouter} from '@todo/core/router';
import {message} from '@akrc/ringo';

export const trpc = createTRPCProxyClient<AppRouter>({
	links: [httpBatchLink({url: 'http://localhost:3000/trpc'})],
});

const init = async () => {
	try {
		await trpc.greeting.query();
	} catch (e) {
		message({
			text: "Can't connect to server",
			type: 'error',
			showClose: true,
		});
	}
};

init();
