import Todo from '../model/todo';
import logger from '../util/logger';
import {AppDataSource} from './source';

export const createTodo = async (description: string) => {
	const todo = new Todo();
	todo.description = description;
	todo.active = true;
	try {
		await AppDataSource.manager.save(todo);
	} catch (e) {
		logger.error(e);
	}
};
