import { inject } from 'njct';
import { CatRepository } from './cat.repository';
import { CatCreateDto } from './cat-create.dto';

export class CatService {

    constructor(
        private catRepository = inject(CatRepository)
    ) { }

    async getAll() {
        return this.catRepository.getAll();
    }

    async addCat(cat: CatCreateDto) {
        return this.catRepository.addCat(cat);
    }
}
