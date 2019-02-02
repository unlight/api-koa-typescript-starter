import * as koaJsonError from 'koa-json-error';
import { CustomError } from 'errorlings';

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
