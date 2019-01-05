import { IRouterContext } from 'koa-tree-router';
import { inject } from 'njct';
import { CatService } from './cat.service';
import { CatCreateValidator } from './cat-create.validator';
import { ValidationError, HttpStatusError } from 'common-errors';

export async function catBrowse(context: IRouterContext, next: any) {
    const catService = inject(CatService);
    context.body = await catService.getAll();
}

export async function catCreate(context: IRouterContext, next: any) {
    const catService = inject(CatService);
    const catCreateValidator = inject(CatCreateValidator);
    const cat = context.request.body;
    const validationResult = await catCreateValidator.validateAsync(cat);
    if (validationResult.isInvalid()) {
        const err = new HttpStatusError(400);
        throw err;
    }
    const result = await catService.addCat(cat);
    context.body = result;
}
