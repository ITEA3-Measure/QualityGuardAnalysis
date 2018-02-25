package org.quality.guard.analysis.service.qualityguardengine.api;

import java.net.UnknownHostException;

import org.quality.guard.analysis.domain.QualityGuard;

public interface IQualityGuardExecutionService {

	void executeQualityGuard(QualityGuard qualityGuard) throws UnknownHostException;
	
}
