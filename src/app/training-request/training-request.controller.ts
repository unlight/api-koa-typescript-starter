import { inject } from 'njct';
import { TrainingRequestService } from './training-request.service';

export async function getTrainingRequest(context: any, id: string, next) {
    const trainingRequestService = inject(TrainingRequestService);
    const result = await trainingRequestService.getById(id);
    if (!result) {
        throw new Error('404');
    }
    context.body = result;
}
