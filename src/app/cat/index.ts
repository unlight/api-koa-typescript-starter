import * as Router from 'koa-tree-router';
import { catBrowse } from './cat-browse.route';
import { catCreate } from './cat-create.route';
import { catCreateValidation } from './cat-create-validation.route';

export const catRouter = new Router({ prefix: '/cat' });
catRouter.on('GET', '/browse', catBrowse);
catRouter.on('POST', '/', catCreateValidation, catCreate);
