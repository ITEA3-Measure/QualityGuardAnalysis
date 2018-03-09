package org.quality.guard.analysis.web.rest;

import java.text.ParseException;
import java.util.List;

import javax.inject.Inject;

import org.quality.guard.analysis.core.api.entities.IQualityGuardService;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.domain.enumeration.GuardStatus;
import org.quality.guard.analysis.service.qualityguardhistory.api.IQualityGuardHistoryService;
import org.quality.guard.analysis.service.qualityguardhistory.impl.IncidentStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/quality-guard/incident-history")
public class QualityGuardIncidentHistoryResource {
	
	@Inject
	private IQualityGuardService qualityGuardService;
	
	@Inject
	private IQualityGuardHistoryService qualityGuardHistoryService;
	
	@RequestMapping(value = "/guard-status", method = RequestMethod.GET)
	public List<IncidentStatus> retrieveIncidentsHistory(@RequestParam("id") String id, @RequestParam("intervalAgregation") String intervalAgregation) throws ParseException {
		Long qualityGuardId = Long.valueOf(id);
		QualityGuard qualityGuard = qualityGuardService.findOne(qualityGuardId);
		return qualityGuardHistoryService.retrieveIncidentsHistory(qualityGuard, intervalAgregation);
	}
	
}
