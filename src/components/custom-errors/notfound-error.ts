import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {

    constructor(...args: any[]);
    constructor(...args: any[]) {
        super(404, ...args as []);
    }
}
