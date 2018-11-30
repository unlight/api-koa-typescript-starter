import { HomeRepository } from './home.repository';
import { inject } from 'njct';

export class HomeService {

    static readonly getInstance = () => new HomeService();
    static readonly token = 'home.service';

    constructor(
        private homeRepository = inject(HomeRepository.token, HomeRepository.getInstance),
    ) { }

    async getGreetings() {
        return 'Hello World!';
    }

    async getRemoteGreets() {
        return this.homeRepository.getRemoteGreets();
    }
}
