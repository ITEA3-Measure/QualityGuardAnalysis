import { BaseEntity } from './../../shared';
import { GuardStatus } from './violation.model';

export class ConditionViolation implements BaseEntity {
    constructor(
        public id?: number,
        public conditionValue?: string,
        public conditionStatus?: GuardStatus,
        public guardCondition?: BaseEntity,
        public measureInstance?: string,
        public measureField?: string,
        public violation?: BaseEntity,
    ) {
    }
}
