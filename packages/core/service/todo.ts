import Todo from '../model/todo';
import {AppDataSource} from './source';

const todoRepo = AppDataSource.getRepository(Todo);

export const createTodo = async (description: string) => {
	const todo = new Todo();
	todo.description = description;
	todo.active = true;
	try {
		const result = await todoRepo.save(todo);
		return result.id;
	} catch (e) {
		return -1;
	}
};

export const getAllTodo = async () => {
	const todos = await todoRepo.find();
	return todos;
};

export const deleteTodo = async (id: number) => {
	const todo = await todoRepo.findOneBy({id});
	await todoRepo.delete(todo);
};

export const toggleTodo = async (id: number, active: boolean) => {
	const todo = await todoRepo.findOneBy({id});
	todo.active = active;
	await todoRepo.save(todo);
};
