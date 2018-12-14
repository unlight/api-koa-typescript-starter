import { inject } from 'njct';
import { koaMiddleware } from '../../types';

export async function useConnection(context: koaMiddleware[0], next: koaMiddleware[1]) {
    console.log('useConnection');
    await next();
    console.log('after useConnection');
}
