import nashi from "@akrc/nashi";
import {tw} from "twind";

export default (text: string) =>
  nashi
    .create("div")
    .text(text)
    .class(tw`p-2`);
