export type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] };
export type PropertyMock<T> = { [key: string]: MutableRequired<T> };
export type Mock<T, U = any, V = any, W = any, X = any> = MutableRequired<T>
    & PropertyMock<U>
    & PropertyMock<PropertyMock<V>>
    & PropertyMock<PropertyMock<PropertyMock<W>>>
    & PropertyMock<PropertyMock<PropertyMock<PropertyMock<X>>>>;

import * as koa from 'koa';

export type koaMiddleware = Parameters<koa.Middleware>;

