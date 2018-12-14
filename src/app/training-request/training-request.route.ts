import { IRouterContext } from 'koa-router';
import { inject } from 'njct';
import { TrainingRequestService } from './training-request.service';

export async function getTrainingRequest(context: any, next) {
    console.log("getTrainingRequest");
    context.body = { ok: 4 };
    // const trainingRequest = context.state.trainingRequest;
    // context.body = trainingRequest;
    // const trainingRequestService = inject(TrainingRequestService);
    // const trainingRequest = await trainingRequestService.getById(context.params.trainingRequestId)
    //     .catch(err => {
    //         debugger;
    //     });
    // debugger;
    // await new Promise((resolve) => {
    //     setTimeout(resolve, 1000);
    // });
    await next();
    console.log("context.body 2");
    context.body = { ok: true };
}
