import { BaseEntity } from './../../shared';

export const enum GuardOperator {
    'SUPERIOR',
    'INFERIOR'
}

export const enum AnalysisAgregation {
    'STRICT',
    'MOY_MIN',
    'MOY_HH',
    'MOY_DD',
    'MOY_WW',
    'MOY_MM'
}

export class GuardCondition implements BaseEntity {
    constructor(
        public id?: number,
        public measureInstance?: string,
        public operator?: GuardOperator,
        public errorValue?: number,
        public warningValue?: number,
        public measureField?: string,
        public intervalAgregation?: AnalysisAgregation,
        public qualityGuard?: BaseEntity,
    ) {
    }
}
