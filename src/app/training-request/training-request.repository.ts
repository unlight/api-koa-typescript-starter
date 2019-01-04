import { inject } from 'njct';
import { usingConnection } from '../database/connection';
import * as sql from 'mssql';

export class TrainingRequestRepository {

    async getById(id: string) {
        const result = await usingConnection(sql => {
            return sql.query`SELECT
                [TRAINING_REQUEST_PK] as trainingRequestId,
                [TRAINING_REQUEST_STATUS_FK] as status,
                [Date_Created] as dateCreated,
                [Date_Modified] as dateModified
                FROM [dbo].[TRAINING_REQUEST]
                WHERE [TRAINING_REQUEST_PK] = ${id}`;
        });
        return result.recordset.length > 0 ? result.recordset[0] : null;
    }
}
