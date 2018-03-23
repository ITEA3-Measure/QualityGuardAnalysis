package org.quality.guard.analysis.service.qualityguardengine.api;

import java.net.UnknownHostException;
import java.util.List;

import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.domain.Violation;
import org.quality.guard.analysis.domain.enumeration.GuardStatus;
import org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution.EvaluatedGuardCondition;

public interface IQualityGuardExecutionService {

	public void executeQualityGuard(QualityGuard qualityGuard) throws UnknownHostException;
	
	public GuardStatus evaluateQualityGuard(QualityGuard qualityGuard, List<EvaluatedGuardCondition> conditions);
	
	public void manageViolations(QualityGuard qualityGuard, GuardStatus newStatus, List<EvaluatedGuardCondition> conditions);
	
	public Violation openViolationIssue(QualityGuard qualityGuard, GuardStatus newStatus, List<EvaluatedGuardCondition> conditions);
	
	public void closeViolationIssue(QualityGuard qualityGuard);
}
