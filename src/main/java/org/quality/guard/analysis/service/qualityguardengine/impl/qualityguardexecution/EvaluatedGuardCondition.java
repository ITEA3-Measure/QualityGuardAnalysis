package org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution;

import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.domain.enumeration.GuardOperator;
import org.quality.guard.analysis.domain.enumeration.GuardStatus;

public class EvaluatedGuardCondition {

	private GuardCondition guardCondition;

	private double value;

	private GuardStatus guardStatus;

	public EvaluatedGuardCondition(GuardCondition condition, double value) {
		this.guardCondition = condition;
		this.value = value;
		this.guardStatus = evaluateStatus();
	}

	private GuardStatus evaluateStatus() {
		if (guardCondition.getOperator().equals(GuardOperator.SUPERIOR)) {
			if (value < guardCondition.getErrorValue()) {
				return GuardStatus.ERROR;
			}

			if (value < guardCondition.getWarningValue()) {
				return GuardStatus.WARNING;
			}
			return GuardStatus.SUCCESS;
		}

		if (value > guardCondition.getErrorValue()) {
			return GuardStatus.ERROR;
		}

		if (value > guardCondition.getWarningValue()) {
			return GuardStatus.WARNING;
		}
		return GuardStatus.SUCCESS;
	}

	public GuardCondition getGuardCondition() {
		return guardCondition;
	}

	public double getValue() {
		return value;
	}

	public GuardStatus getGuardStatus() {
		return guardStatus;
	}
	
	
}
