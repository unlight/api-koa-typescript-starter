import { inject } from 'njct';
import { TrainingRequestService } from './training-request.service';
import { NotFoundError } from 'common-errors';
import { IRouterContext } from 'koa-tree-router';

export async function getTrainingRequest(context: IRouterContext, next: any) {
    const trainingRequestService = inject(TrainingRequestService);
    const result = await trainingRequestService.getById(context.params.id);
    if (!result) {
        throw new NotFoundError('TrainingRequest');
    }
    context.body = result;
}
