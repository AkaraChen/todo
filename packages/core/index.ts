import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import { route } from './router';
import cors from 'cors';
import logger from './util/logger';
import 'reflect-metadata';
import { databaseInit } from './service/source';

const trpc = trpcExpress.createExpressMiddleware({ router: route });

const init = async () => {
    logger.info('Starting Todo Server...');
    await databaseInit();
    const app = express();
    app.use('/trpc', cors(), trpc);
    app.listen(3000, () => {
        logger.info('Todo Server is running on http://localhost:3000');
    });
};

init();
