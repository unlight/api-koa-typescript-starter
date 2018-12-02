import { TrainingRequestRepository } from './training-request.repository';
import { inject } from 'njct';

export class TrainingRequestService {

    constructor(
        private trainingRequestRepository = inject(TrainingRequestRepository),
    ) { }

    async getById(id: string) {
        debugger;
        const result = await this.trainingRequestRepository.getById(id);
        return result;
    }
}
