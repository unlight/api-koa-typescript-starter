import { inject } from 'njct';
import { connectionPool } from './connection-pool';
import { koaMiddleware } from '../../types';

export async function waitConnectionPool(context: koaMiddleware[0], next: koaMiddleware[1]) {
    debugger;
    const connection = inject('connectionPool', connectionPool);
    const emit = connection.emit;
    connection.emit = function() {
        console.log(arguments);
        emit.apply(this, arguments);
    };

    // connection.on()
    // debugger;
    next();
}
