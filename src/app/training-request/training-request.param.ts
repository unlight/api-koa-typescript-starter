import { IRouterContext, IParamMiddleware } from 'koa-router';

export async function trainingRequestParam(param: string, context: IRouterContext, next: () => Promise<any>) {
    context.state.trainingRequest = await ({ trainingRequestId: '3a1fa03f-0240-4ff7-9947-7e603c4b4293' });
    next();
}
