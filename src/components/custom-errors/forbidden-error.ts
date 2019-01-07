import { CustomError, CustomErrorOptions } from './custom-error';

export class ForbiddenError extends CustomError {

    constructor(resource: string);
    constructor(...args: any[]);
    constructor(...args: any[]) {
        let data: any;
        if (args.length === 1) {
            const [resource] = args;
            data = { resource };
        }
        args.unshift({
            data,
            status: 403,
            message: `You don't have permission to do that.`,
        } as CustomErrorOptions);
        super(...args as []);
    }
}
