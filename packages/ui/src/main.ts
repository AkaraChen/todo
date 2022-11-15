import nashi from "@akrc/nashi";
import {tw} from "twind";
import input from "./component/input";
import "./twind";

const container = nashi
  .create("div")
  .class(tw`flex items-center justify-center max-w-xl w-full m-auto p-4`);
container.append(input);
nashi("body").append(container);
