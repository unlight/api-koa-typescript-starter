import { config } from '../../config';
const sql = require('mssql');
const connectionString = config.get('connectionString');

export async function usingConnection(request: (sql: any) => Promise<any>) {
    try {
        var pool = await sql.connect(connectionString);
        var result = await request(sql);
    } catch (e) {
        throw e;
    } finally {
        await pool && pool.close();
    }
    return result;
}
