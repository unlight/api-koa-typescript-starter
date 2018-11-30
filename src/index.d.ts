type MutableRequired<T> = { -readonly [K in keyof T]-?: T[K] };
type PropertyMock<T> = { [key: string]: MutableRequired<T> };
type Mock<T, U = any, V = any, W = any, X = any> = MutableRequired<T>
    & PropertyMock<U>
    & PropertyMock<PropertyMock<V>>
    & PropertyMock<PropertyMock<PropertyMock<W>>>
    & PropertyMock<PropertyMock<PropertyMock<PropertyMock<X>>>>;
