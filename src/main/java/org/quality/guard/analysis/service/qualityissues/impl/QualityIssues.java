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
