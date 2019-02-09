import { CatCreateValidator } from './cat-create.validator';
import { inject } from 'njct';
import { IRouterContext } from 'koa-tree-router';
import { ValidationError } from 'errorlings';

export async function catCreateValidation(context: IRouterContext, next: any) {
    const catCreateValidator = inject(CatCreateValidator);
    const cat = context.request.body;
    const validationResult = await catCreateValidator.validateAsync(cat);
    if (validationResult.isInvalid()) {
        throw new ValidationError();
    }
    next();
}
