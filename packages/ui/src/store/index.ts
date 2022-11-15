import {nanoid} from "nanoid";

interface todo {
  id: string;
  description: string;
  status: "Done" | "Todo";
}

let store: Array<todo> = [];

export const add = (todo: todo) => {
  store.push(todo);
};

export const remove = (id: string) => {
  const index = store.findIndex((todo) => todo.id === id);
  store.splice(index, 1);
};

export const current = () => {
  return store.slice();
};
