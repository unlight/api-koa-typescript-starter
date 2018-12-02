import * as Koa from 'koa';
import * as Router from 'koa-router';
import { config } from './config';
import { homeRoute } from './app/home/home.route';
import { getTrainingRequest } from './app/training-request/training-request.route';
import { trainingRequestParam } from './app/training-request/training-request.param';
import { inject, injector } from 'njct';
import { connectionPool } from './app/database/connection-pool';
import { waitConnectionPool } from './app/database/wait-connection-pool';

const app = new Koa();
const router = new Router();

injector.mock('connectionPool', connectionPool);

app.use(waitConnectionPool);
router.get('/', homeRoute);
router.param('trainingRequestId', trainingRequestParam).get('/training-request/:trainingRequestId', getTrainingRequest);

app.use(router.routes());
app.listen(config.get('port'), () => console.log(`Server running on port ${config.get('port')}`));
