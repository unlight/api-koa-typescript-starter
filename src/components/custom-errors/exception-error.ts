import { CustomError } from './custom-error';

export class ExceptionError extends CustomError {

    constructor(...args: any[]);
    constructor(...args: []) {
        super(...args);
    }
}
