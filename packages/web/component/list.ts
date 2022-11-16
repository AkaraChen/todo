import nashi from "@akrc/nashi";
import {tw} from "twind";
import {clear} from "./input";
import todo from "./todo";

const list = nashi
  .create("div")
  .class(tw`flex flex-col border(gray-400 2 solid) w-full mt-4 rounded`);

const placeholder = nashi.create("img");
list.append(placeholder);

placeholder.prop("src", "https://via.placeholder.com/300");
export const add = (text: string) => {
  placeholder.style("display", "none");
  list.append(todo(text));
  clear();
};

export default list;
