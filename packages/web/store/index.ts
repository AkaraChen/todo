import {atomWithStorage} from 'jotai/utils';

export interface Todo {
    id: number;
    description: string;
    active: boolean;
}

export const todos = atomWithStorage<Todo[]>('todo', []);
