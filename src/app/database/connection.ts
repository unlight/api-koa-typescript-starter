import { config } from '../../config';
import * as sql from 'mssql';
import { injector, inject } from 'njct';

const connectionString = config.get('connectionString');
export const connectionPool = new sql.ConnectionPool(connectionString);

export async function usingConnection(request: (pool: sql.ConnectionPool) => Promise<sql.IResult<any>>) {
    let pool;
    try {
        pool = await connectionPool.connect();
        var result = await request(pool); // eslint-disable-line tslint/config
    } catch (error) {
        throw error;
    } finally {
        await pool && pool.close(); // eslint-disable-line tslint/config
    }
    return result;
}
