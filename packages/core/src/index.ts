import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import {route} from "./_app";
import cors from "cors";

const app = express();
app.use(
  "/trpc",
  cors(),
  trpcExpress.createExpressMiddleware({
    router: route,
  })
);
app.listen(3000);
