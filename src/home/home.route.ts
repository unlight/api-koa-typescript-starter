import { IRouterContext } from 'koa-router';
import { inject } from 'njct';
import { HomeService } from './home.service';

export async function homeRoute(context: IRouterContext) {
    const service = inject(HomeService.token, HomeService.getInstance);
    const result = await service.getGreetings();
    context.body = { data: result };
}
