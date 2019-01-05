import * as koaJsonError from 'koa-json-error';
import * as errors from 'common-errors';

// todo: pattern matching
function format(err) {
    let status: number;
    if (err instanceof errors.NotFoundError) {
        status = 404;
    }
    if (!status) {
        return undefined;
    }
    err.status = status;
    return err;
}

export function errorHandler() {
    return koaJsonError();
}
