import { IRouterContext } from 'koa-router';
import { inject } from 'njct';
import { TrainingRequestService } from './training-request.service';

export async function getTrainingRequest(context: IRouterContext) {
    // const trainingRequest = context.state.trainingRequest;
    // context.body = trainingRequest;
    const trainingRequestService = inject(TrainingRequestService);
    const trainingRequest = await trainingRequestService.getById(context.params.trainingRequestId)
        .catch(err => {
            debugger;
        });
    debugger;
}
