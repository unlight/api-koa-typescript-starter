import { HomeRepository } from './home.repository';
import { inject } from 'njct';

export class HomeService {

    constructor(
        private homeRepository = inject(HomeRepository, inject.type.service),
    ) { }

    async getGreetings() {
        return 'Hello World!';
    }

    async getRemoteGreets() {
        return this.homeRepository.getRemoteGreets();
    }
}
