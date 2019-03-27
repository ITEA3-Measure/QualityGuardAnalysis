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
package org.quality.guard.analysis.service.qualityissues.impl;

public class QualityIssues {

	private String incidentStartDate;
	private String violationStatus;
	private String qualityGuardName;
	private String measureInstance;
	private String conditionValue;
	
	public QualityIssues() {
	}

	public QualityIssues(String incidentStartDate, String violationStatus, String qualityGuardName, String measureInstance, String conditionValue) {
		this.incidentStartDate = incidentStartDate;
		this.violationStatus = violationStatus;
		this.qualityGuardName = qualityGuardName;
		this.measureInstance = measureInstance;
		this.conditionValue = conditionValue;
	}

	public String getIncidentStartDate() {
		return incidentStartDate;
	}

	public void setIncidentStartDate(String incidentStartDate) {
		this.incidentStartDate = incidentStartDate;
	}

	public String getViolationStatus() {
		return violationStatus;
	}

	public void setViolationStatus(String violationStatus) {
		this.violationStatus = violationStatus;
	}

	public String getQualityGuardName() {
		return qualityGuardName;
	}

	public void setQualityGuardName(String qualityGuardName) {
		this.qualityGuardName = qualityGuardName;
	}

	public String getMeasureInstance() {
		return measureInstance;
	}

	public void setMeasureInstance(String measureInstance) {
		this.measureInstance = measureInstance;
	}

	public String getConditionValue() {
		return conditionValue;
	}

	public void setConditionValue(String conditionValue) {
		this.conditionValue = conditionValue;
	}
	
}
