import {router, procedure} from '../trpc';
import {z} from 'zod';
import {createTodo} from '../service/todo';

export const todoRoute = router({
	create: procedure
		.input(z.string().min(5).max(30).trim())
		.mutation(({input}) => {
			return createTodo(input);
		}),
});
