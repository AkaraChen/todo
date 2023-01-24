import { procedure, router } from '../trpc';
import { z } from 'zod';
import {
    createTodo, deleteTodo, getAllTodo, toggleTodo
} from '../service/todo';

export const todoRoute = router({
    create: procedure
        .input(z.string().min(5).max(30).trim())
        .mutation(async ({ input }) => {
            return await createTodo(input);
        }),
    delete: procedure.input(z.number()).mutation(async ({ input }) => {
        await deleteTodo(input);
    }),
    toggle: procedure
        .input(z.object({ id: z.number(), active: z.boolean() }))
        .mutation(async ({ input }) => {
            await toggleTodo(input.id, input.active);
        }),
    getAll: procedure.query(async () => {
        return await getAllTodo();
    })
});
