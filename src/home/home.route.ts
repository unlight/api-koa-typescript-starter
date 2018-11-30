import { IRouterContext } from 'koa-router';
import { inject } from 'njct';
import { homeService } from './home.service';

export async function homeRoute(context: IRouterContext) {
    const service = inject('home.service', () => homeService);
    const result = await service.getGreetings();
    context.body = { data: result };
}
