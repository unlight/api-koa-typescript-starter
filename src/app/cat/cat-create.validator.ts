import { AbstractValidator } from 'fluent-ts-validator';
import { CatCreateDto } from './cat-create.dto';

export class CatCreateValidator extends AbstractValidator<CatCreateDto> {

    constructor() {
        super();
        this.validateIfString(c => c.name)
            .isNotNull()
            .hasMinLength(3)
            .withFailureMessage('Must not be less than 3 characters');
    }
}
