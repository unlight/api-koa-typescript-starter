import { IRouterContext } from 'koa-tree-router';
import { inject } from 'njct';
import { CatService } from './cat.service';

export async function catBrowse(context: IRouterContext, next: any) {
    const catService = inject(CatService);
    context.body = await catService.getAll();
}
