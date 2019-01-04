import * as Koa from 'koa';
import { injector } from 'njct';
import * as compose from 'koa-compose';
import * as route from 'koa-route';
import { config } from './config';
import { home } from './app/home/home.controller';

injector.provide('config', () => config);

const app = new Koa();

app.use(route.get('/', home));

app.listen(config.get('port'), () => console.log(`Server running on port ${config.get('port')}`));
