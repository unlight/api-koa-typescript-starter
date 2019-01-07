import { config } from '../../config';
import * as sql from 'mssql';
import { IResult } from 'mssql';
import { injector, inject } from 'njct';

const connectionString = config.get('connectionString');
export const connectionPool = new sql.ConnectionPool(connectionString);

export async function usingConnection(request: (pool: sql.ConnectionPool) => Promise<IResult<any>>) {
    let pool;
    try {
        pool = await connectionPool.connect();
        var result = await request(pool);
    } catch (e) {
        throw e;
    } finally {
        await pool && pool.close();
    }
    return result;
}
