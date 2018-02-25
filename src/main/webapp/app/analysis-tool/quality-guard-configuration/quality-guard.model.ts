import { BaseEntity } from './../../shared';
import { GuardCondition } from './guard-condition.model';

export const enum CombinationMode {
    'OR',
    'AND'
}

export const enum GuardStatus {
    'SUCCESS',
    'WARNING',
    'ERROR'
}

export class QualityGuard implements BaseEntity {
    constructor(
        public id?: number,
        public qualityGuardName?: string,
        public description?: string,
        public combinationMode?: CombinationMode,
        public measureProjectId?: number,
        public guardConditions?: GuardCondition[],
    ) {
    }
}
