import {createTRPCProxyClient, httpBatchLink} from "@trpc/client";
import {AppRouter} from "@todo/core/src/_app";
import {message} from "@akrc/ringo";
import "@akrc/ringo/style/message/ant.css";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({url: "http://localhost:3000/trpc"})],
});

const init = async () => {
  const greet = await trpc.greeting.query();
  message({text: greet, showClose: true});
};

init();
