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
