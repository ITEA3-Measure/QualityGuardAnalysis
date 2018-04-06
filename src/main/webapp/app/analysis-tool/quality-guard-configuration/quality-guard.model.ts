import { BaseEntity } from './../../shared';
import { GuardCondition } from './guard-condition.model';
import { Violation } from './violation.model';
import { IncidentStatus } from './incident-status.model';

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
        public guardConditions?: GuardCondition[],
        public violation?: Violation,
        public violations?: Violation[],
        public incidentsHistory?: IncidentStatus[],
    ) {
    }
}
