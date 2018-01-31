import { BaseEntity } from '../../shared';

export const enum GuardOperator {
    'SUPERIOR',
    'INFERIOR',
    'EQUAL'
}

export const enum AnalysisAgregation {
    'STRICT',
    'MOY_MIN',
    'MOY_HH',
    'MOY_DD',
    'MOY_WW',
    'MOY_MM'
}

export class MeasureInstance {
  constructor(
    public id?: number,
    public instanceName?: string
  ) {
  }
}

export class GuardCondition implements BaseEntity {
    constructor(
        public id?: number,
        public operator?: GuardOperator,
        public measureInstance?: MeasureInstance,
        public errorValue?: number,
        public warningValue?: number,
        public measureField?: MeasureInstance,
        public intervalAgregation?: AnalysisAgregation,
    ) {
    }
}
