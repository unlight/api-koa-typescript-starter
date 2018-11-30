import * as Koa from 'koa';
import * as Router from 'koa-router';
import { homeRoute } from './home/home.route';

const app = new Koa();
const router = new Router();

router.get('/', homeRoute);

app.use(router.routes());
app.listen(8752, () => console.log('Server running on port 8752'));
