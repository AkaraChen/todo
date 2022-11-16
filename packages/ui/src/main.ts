import nashi from "@akrc/nashi";
import {tw} from "twind";
import input from "./component/input";
import list from "./component/list";
import "./twind";

const container = nashi
  .create("div")
  .class(
    tw`flex flex-col items-center justify-center max-w-xl w-full m-auto p-4`
  );
container.append(input);
container.append(list);
nashi("body").append(container);
