import { ExceptionError } from './exception-error';
import { ForbiddenError } from './forbidden-error';
import { NotFoundError } from './notfound-error';
import { CustomError } from './custom-error';
import * as expect from 'expect';

describe('Create error object', () => {

    it('Options', () => {
        expect(new CustomError()).toBeA(CustomError);
    });

    it('Status 1 arg', () => {
        const e = new CustomError(404);
        expect(e.status).toEqual(404);
    });

    it('Message status 2 args', () => {
        const e = new CustomError('Rejectableness', 505);
        expect(e.message).toEqual('Rejectableness');
        expect(e.status).toEqual(505);
    });

    it('Message status code 3 args', () => {
        const e = new CustomError('Boom', 400, 'BoomCode');
        expect(e.message).toEqual('Boom');
        expect(e.status).toEqual(400);
        expect(e.code).toEqual('BoomCode');
    });

    it('Inner error', () => {
        const innerError = new Error();
        const e = new CustomError(400, 'bawdiness', 'parterre', innerError);
        expect(e.inner).toBe(innerError);
    });

    it('Dict', () => {
        const innerError = new Error();
        const data = {};
        const e = new CustomError({
            status: 400,
            code: 'BadCode',
            inner: innerError,
            message: 'BadMessage',
            data,
        });
        expect(e.inner).toBe(innerError);
        expect(e.message).toEqual('BadMessage');
        expect(e.status).toEqual(400);
        expect(e.code).toEqual('BadCode');
        expect(e.data).toBe(data);
    });
});

describe('ExceptionError:', () => {

    it('instanceof from Error', () => {
        const e = new ExceptionError();
        expect(e instanceof Error).toBe(true, 'e instanceof Error');
        expect(e instanceof ExceptionError).toBe(true, 'e instanceof ExceptionError');
    });

    it('name should equal to class name', () => {
        const e = new ExceptionError();
        expect(e.name).toBe('ExceptionError');
    });
});

describe('ForbiddenError:', () => {

    it('instanceof from Error', () => {
        const e = new ForbiddenError();
        expect(e instanceof Error).toBe(true, 'e instanceof Error');
        expect(e instanceof ForbiddenError).toBe(true, 'e instanceof ForbiddenError');
        expect(e instanceof CustomError).toBe(true, 'e instanceof CustomError');
    });

    it('name should equal to class name', () => {
        const e = new ForbiddenError();
        expect(e.name).toBe('ForbiddenError');
    });

    it('forbidden resource name', () => {
        const e = new ForbiddenError('slanderproof');
        expect(e.data.resource).toContain('slanderproof');
    });

});

describe('NotFoundError:', () => {

    it('instanceof from Error', () => {
        const e = new NotFoundError();
        expect(e instanceof NotFoundError).toBe(true, 'e instanceof NotFoundError');
        expect(e instanceof CustomError).toBe(true, 'e instanceof CustomError');
        expect(e instanceof Error).toBe(true, 'e instanceof Error');
    });

    it('name should equal to class name', () => {
        const e = new NotFoundError();
        expect(e.name).toBe('NotFoundError');
    });
});
