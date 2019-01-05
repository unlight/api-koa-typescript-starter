import { inject } from 'njct';
import { HomeService } from './home.service';
import { IRouterContext } from 'koa-tree-router';

export async function home(context: IRouterContext, next: any) {
    const service = inject(HomeService);
    const result = await service.getGreetings();
    context.body = { data: result };
}
