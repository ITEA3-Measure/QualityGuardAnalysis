import { BaseEntity } from './../../shared';

export const enum CombinationMode {
    'OR',
    'AND'
}

export class QualityGuard implements BaseEntity {
    constructor(
        public id?: number,
        public qualityGuardName?: string,
        public description?: string,
        public combinationMode?: CombinationMode,
        public measureProjectId?: number,
        public isSchedule?: boolean,
        public violation?: BaseEntity,
        public violations?: BaseEntity[],
        public guardConditions?: BaseEntity[],
    ) {
        this.isSchedule = false;
    }
}
