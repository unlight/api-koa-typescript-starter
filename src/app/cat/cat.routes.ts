import * as Router from 'koa-tree-router';
import { catCreate } from './cat.controller';
import { catBrowse } from './cat.controller';
import { catCreateValidation } from './cat-create-validation.middleware';

export function catRoutes(router: Router) {
    router.get('/cat/browse', catBrowse);
    router.post('/cat', catCreateValidation, catCreate);
}
