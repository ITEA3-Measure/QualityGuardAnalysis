export class QualityIssues {
    constructor(
        public incidentStartDate?: string,
        public violationStatus?: string,
        public qualityGuardName?: string,
        public measureInstance?: string,
        public conditionValue?: string,
    ) {
    }
}
