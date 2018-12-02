import { config } from '../../config';
import * as mssql from 'mssql';

export function connectionPool() {
    return new mssql.ConnectionPool(config.get('connectionString'));
}
