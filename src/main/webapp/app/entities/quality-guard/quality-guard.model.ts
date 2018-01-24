import { BaseEntity } from './../../shared';

export const enum CombinationMode {
    'OR',
    'AND',
    'NA'
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
        public guardStatus?: GuardStatus,
        public violation?: BaseEntity,
        public violations?: BaseEntity[],
        public guardConditions?: BaseEntity[],
    ) {
    }
}
