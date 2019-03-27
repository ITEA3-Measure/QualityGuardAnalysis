/*******************************************************************************
 * Copyright (C) 2019 Softeam
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
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
