import { inject } from 'njct';
import { connectionPool } from '../database/connection-pool';

export class TrainingRequestRepository {

    constructor(
        private connection = inject('connectionPool', connectionPool),
    ) { }

    async getById(id: string) {
        const result = await (await this.connection).query`SELECT [TRAINING_REQUEST_PK]
            [TRAINING_REQUEST_Name],
            [TRAINING_REQUEST_Note],
            [TRAINING_REQUEST_ModUser],
            [TRAINING_REQUEST_ID],
            [TRAINING_REQUEST_STATUS_FK],
            [StartTime],
            [EndTime],
            [Date_Created],
            [Date_Modified]
            FROM [dbo].[TRAINING_REQUEST]
            WHERE [TRAINING_REQUEST_PK] = ${id}`;
        debugger;
        return result;
    }
}
