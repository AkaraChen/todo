import {trpc} from './trpc';
import {useAtom} from 'jotai';
import {todos} from '.';

const useRefresh = async () => {
    const [todo, setTodo] = useAtom(todos);
    const syncTodo = await trpc.todo.getAll.query();
    if (JSON.stringify(syncTodo) !== JSON.stringify(todo)) {
        setTodo(syncTodo);
    }
};

export default useRefresh;
