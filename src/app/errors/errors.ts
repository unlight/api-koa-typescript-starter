import * as koaJsonError from 'koa-json-error';
import { CustomError } from '~components/custom-errors';

function postFormat(err: Error, result: any) {
    if (err instanceof CustomError) {
        result.status = err.status;
    }
    return result;
}

export function errorHandler() {
    return koaJsonError({
        postFormat,
    });
}
