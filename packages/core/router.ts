import {procedure, router} from './trpc';
import {todoRoute} from './controller/todo';

export const route = router({
    greeting: procedure.query(() => 'Hello, TRPC!'),
    todo: todoRoute,
});

export type AppRouter = typeof route;
