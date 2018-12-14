import * as Koa from 'koa';
import * as Router from 'koa-router';
import { config } from './config';
import { homeRoute } from './app/home/home.route';
import { getTrainingRequest } from './app/training-request/training-request.route';
import { trainingRequestParam, trainingRequestParam2 } from './app/training-request/training-request.param';
import { inject, injector } from 'njct';
import { useConnection } from './app/database/connection';
import * as compose from 'koa-compose';

const app = new Koa();
// const router = new Router();
const _ = require('koa-route');

// injector.mock('connectionPool', connectionPool);

// router.get('/', homeRoute);
// router.param('trainingRequestId', trainingRequestParam).get('/training-request/:trainingRequestId', useConnection, getTrainingRequest);
app.use(trainingRequestParam2);
app.use(getTrainingRequest);
app.use(async (ctx, next) => { next() });
    // _.get('/training-request/:trainingRequestId', compose([trainingRequestParam2 as any, getTrainingRequest])))

// app.use(router.routes());
app.listen(config.get('port'), () => console.log(`Server running on port ${config.get('port')}`));
