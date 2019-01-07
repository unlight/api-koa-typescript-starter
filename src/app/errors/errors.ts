import * as koaJsonError from 'koa-json-error';
import * as errors from 'common-errors';

function postFormat(err: Error, result: any) {
    let status: number | undefined = undefined;
    if (err instanceof errors.NotFoundError) {
        status = 404;
    }
    if (status !== undefined) {
        result.status = status;
    }
    return result;
}

export function errorHandler() {
    return koaJsonError({
        postFormat,
    });
}
