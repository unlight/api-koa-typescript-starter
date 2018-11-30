import * as Koa from 'koa';
import * as Router from 'koa-router';
import { homeRoute } from './home/home.route';
import { config } from './config';

const app = new Koa();
const router = new Router();

router.get('/', homeRoute);

app.use(router.routes());
app.listen(config.get('port'), () => console.log(`Server running on port ${config.get('port')}`));
