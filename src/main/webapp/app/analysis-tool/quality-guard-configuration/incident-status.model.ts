import { BaseEntity } from '../../shared';

export class IncidentStatus implements BaseEntity {
    constructor(
        public id?: number,
        public guardStatus?: string,
        public dateStatus?: string,
    ) {
    }
}
