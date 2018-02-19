package org.quality.guard.analysis.service.qualityguardengine.api;

import org.quality.guard.analysis.domain.QualityGuard;

public interface ISchedulingService {
	
    Boolean scheduleQualityGuard(QualityGuard qualityGuard);

    Boolean removeQualityGuard(Long qualityGuardId);

    Boolean isShedule(Long qualityGuardId);

}
