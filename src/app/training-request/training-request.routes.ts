import * as Router from 'koa-tree-router';
import { getTrainingRequest } from './training-request.controller';

export function trainingRequestRoutes(router: Router) {
    router.get('/training-request/:trainingRequestId', getTrainingRequest);
}
