package org.quality.guard.analysis.service.qualityguardhistory.api;

import java.text.ParseException;
import java.util.List;

import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.domain.enumeration.GuardStatus;
import org.quality.guard.analysis.service.qualityguardhistory.impl.IncidentStatus;
import org.springframework.stereotype.Service;

@Service
public interface IQualityGuardHistoryService {
	public List<IncidentStatus> retrieveIncidentsHistory(QualityGuard qualityGuard, String intervalAgregation) throws ParseException;
}
