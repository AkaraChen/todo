import {createTRPCProxyClient, httpBatchLink} from '@trpc/client';
import {AppRouter} from '@todo/core/router';
import {message} from '@akrc/ringo';
import '@akrc/ringo/style/message/ant.css';

const trpc = createTRPCProxyClient<AppRouter>({
	links: [httpBatchLink({url: 'http://localhost:3000/trpc'})],
});

const init = async () => {
	try {
		await trpc.todo.create.mutate('114514');
		message({
			text: 'Successfully created a todo!',
			type: 'success',
		});
	} catch (e) {
		message({text: 'Error on creating todo.', type: 'error'});
	}
};

init();
