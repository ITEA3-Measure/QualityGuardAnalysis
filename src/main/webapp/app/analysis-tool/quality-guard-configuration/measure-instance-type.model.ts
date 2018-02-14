import { BaseEntity } from '../../shared';

export class MeasureInstanceType implements BaseEntity {
    constructor(
        public id?: number,
        public instanceName?: string,
        public fields?: Array<string>,
    ) {
    }
}
