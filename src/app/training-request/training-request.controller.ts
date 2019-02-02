import { inject } from 'njct';
import { TrainingRequestService } from './training-request.service';
import { IRouterContext } from 'koa-tree-router';
import { NotFoundError } from 'errorlings';

export async function getTrainingRequest(context: IRouterContext, next: any) {
    const trainingRequestService = inject(TrainingRequestService);
    const result = await trainingRequestService.getById(context.params.trainingRequestId);
    if (!result) {
        throw new NotFoundError();
    }
    context.body = result;
}
