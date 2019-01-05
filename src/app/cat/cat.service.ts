import { inject } from 'njct';
import { CatRepository } from './cat.repository';

export class CatService {

    constructor(
        private catRepository = inject(CatRepository)
    ) { }

    async getAll() {
        return this.catRepository.getAll();
    }
}
