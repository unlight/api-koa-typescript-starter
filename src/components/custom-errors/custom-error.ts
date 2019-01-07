export type CustomErrorOptions = { [K in Exclude<keyof CustomError, 'stack' | 'name'>]?: CustomError[K] };

export class CustomError extends Error {

    readonly status: number;
    readonly data?: any;
    readonly code?: string;
    readonly inner?: Error;

    constructor(options: CustomErrorOptions);
    constructor(...args: any[]);
    constructor(...args: any[]) {
        let message: string | undefined;
        let status: number = 0;
        let data: any;
        let code: string | undefined;
        let inner: Error | undefined;
        for (const arg of args) {
            const typeofArg = typeof arg;
            switch (true) {
                case message !== undefined && typeofArg === 'string': {
                    code = arg;
                } break;
                case typeofArg === 'string': {
                    message = arg;
                } break;
                case typeofArg === 'number': {
                    status = arg;
                } break;
                case arg instanceof Error: {
                    inner = arg;
                } break;
                case typeofArg === 'object': {
                    if ('status' in arg) { status = arg.status; }
                    if ('message' in arg) { message = arg.message; }
                    if ('data' in arg) { data = arg.data; }
                    if ('code' in arg) { code = arg.code; }
                    if ('inner' in arg) { inner = arg.inner; }
                } break;
            }
        }
        super(message);
        this.status = status;
        this.data = data;
        this.code = code;
        this.inner = inner;
        this.name = this.constructor.name;
        Object.setPrototypeOf(this, this.constructor.prototype);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(this.message).stack;
        }
    }
}
