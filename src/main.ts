import * as Koa from 'koa';
import { injector } from 'njct';
import * as compose from 'koa-compose';
import * as route from 'koa-route';
import * as koaJsonError from 'koa-json-error';
import { config } from './config';
import { home } from './app/home/home.controller';
import { getTrainingRequest } from './app/training-request/training-request.controller';

injector.provide('config', () => config);

const app = new Koa();
app.use(koaJsonError());
app.use(route.get('/', home));
app.use(route.get('/training-request/:trainingRequest', getTrainingRequest));
app.listen(config.get('port'), () => {
    console.log(`Server running on port ${config.get('port')}`);
});
