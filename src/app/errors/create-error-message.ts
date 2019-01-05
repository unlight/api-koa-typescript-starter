import { ValidationFailure } from 'fluent-ts-validator';

export function createErrorMessage(v: ValidationFailure) {
    return `${v.propertyName}: ${v.message}`;
}
