import {procedure, router} from "./trpc";

export const route = router({
  greeting: procedure.query(() => "Hello, TRPC!"),
});

export type AppRouter = typeof route;
