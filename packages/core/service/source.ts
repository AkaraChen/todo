import logger from '../util/logger';
import 'reflect-metadata';
import {DataSource} from 'typeorm';
import Todo from '../model/todo';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: '../../data.db',
    entities: [Todo]
});

export const databaseInit = async () => {
    logger.info('Connecting database...');
    try {
        await AppDataSource.initialize();
        logger.success('Init database connection successfully!');
    } catch {
        logger.error('Can\'t connect to database.');
    }
};
