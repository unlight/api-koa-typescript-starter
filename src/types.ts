export type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] };
export type PropertyMock<T> = { [key: string]: MutableRequired<T> };
export type Mock<T, U = any, V = any, W = any, X = any> = MutableRequired<T>
    & PropertyMock<U>
    & PropertyMock<PropertyMock<V>>
    & PropertyMock<PropertyMock<PropertyMock<W>>>
    & PropertyMock<PropertyMock<PropertyMock<PropertyMock<X>>>>;

import * as koa from 'koa';
import * as router from 'koa-router';

export type koaMiddleware = Parameters<koa.Middleware>;
export type routerMiddleware = Parameters<router.IMiddleware>;
