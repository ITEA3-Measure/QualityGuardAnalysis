package org.quality.guard.analysis.service.qualityguardhistory.impl;

import org.quality.guard.analysis.domain.enumeration.GuardStatus;

public class IncidentStatus {

	private GuardStatus guardStatus;
	private String dateStatus;
	
	public IncidentStatus(GuardStatus guardStatus, String dateStatus) {
		this.guardStatus = guardStatus;
		this.dateStatus = dateStatus;
	}

	public GuardStatus getGuardStatus() {
		return guardStatus;
	}

	public String getDateStatus() {
		return dateStatus;
	}
	
}
