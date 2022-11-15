import nashi from "@akrc/nashi";
import {tw} from "twind";

let inputText = "";

const container = nashi.create("div").class(tw`flex w-full justify-center`);
const input = nashi
  .create("input")
  .class(
    tw`border(gray-400 solid 2 hover:blue-400 active:blue-400) rounded px-2 py-1 w-4/5`
  )
  .input((event) => {
    inputText = (event.target as HTMLInputElement).value;
  });
container.append(input);
const button = nashi
  .create("button")
  .text("Add")
  .class(
    tw`px-2 bg(blue-500 hover:blue-600) text(white) transition w-1/5 ml-2 rounded`
  );
container.append(button);

export default container;
