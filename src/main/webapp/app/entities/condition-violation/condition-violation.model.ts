import { BaseEntity } from './../../shared';

export const enum GuardStatus {
    'SUCCESS',
    'WARNING',
    'ERROR'
}

export class ConditionViolation implements BaseEntity {
    constructor(
        public id?: number,
        public conditionValue?: string,
        public conditionStatus?: GuardStatus,
        public violation?: BaseEntity,
        public guardCondition?: BaseEntity,
    ) {
    }
}
