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

app.use(async (ctx, next) => {
    console.log('x1');
  const start = Date.now();
  ctx.body = {x: 1};
  await next();
  console.log('x1a');
  ctx.body = {x: '1a'};
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
  // ctx.body = {ok: 1};
});

app.use(async (ctx, next) => {
  console.log('x2');
  ctx.body = {x: 2};
  await next();
  console.log('x3');
  ctx.body = {x: 3};
});

app.use(async (ctx, next) => {
  console.log('x4');
  await next();
  console.log('x5');
  ctx.body = {x: 5};
});

// app.use(trainingRequestParam2);
// app.use(getTrainingRequest);
// app.use(async (ctx, next) => { next() });
    // _.get('/training-request/:trainingRequestId', compose([trainingRequestParam2 as any, getTrainingRequest])))

// app.use(router.routes());
app.listen(config.get('port'), () => console.log(`Server running on port ${config.get('port')}`));
