import { IRouterContext } from 'koa-tree-router';
import { inject } from 'njct';
import { CatService } from './cat.service';

export async function catCreate(context: IRouterContext, next: any) {
    const catService = inject(CatService);
    const cat = context.request.body;
    const result = await catService.addCat(cat);
    context.body = result;
}
