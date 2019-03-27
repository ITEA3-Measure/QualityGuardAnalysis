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
package org.quality.guard.analysis.service.qualityguardhistory.impl;

import static java.time.ZoneOffset.UTC;
import static java.time.temporal.ChronoUnit.DAYS;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.inject.Inject;

import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.domain.Violation;
import org.quality.guard.analysis.domain.enumeration.GuardStatus;
import org.quality.guard.analysis.repository.ViolationRepository;
import org.quality.guard.analysis.service.qualityguardhistory.api.IQualityGuardHistoryService;
import org.springframework.stereotype.Service;

@Service
public class QualityGuardHistoryService implements IQualityGuardHistoryService {
	
	@Inject
	private ViolationRepository violationRepository;
	
	@Override
	public List<IncidentStatus> retrieveIncidentsHistory(QualityGuard qualityGuard, String intervalAgregation) throws ParseException {
		List<IncidentStatus> incidentHistory = new ArrayList<IncidentStatus>();
		Date to = null, from = null;
		for (int i = 0; i < 10; i++) {
			if (intervalAgregation.equals("MOY_MIN")) {
				ZonedDateTime now = ZonedDateTime.now().truncatedTo(ChronoUnit.MINUTES).plusMinutes(1);
				to = Date.from(now.minusMinutes(i+1).toInstant());
				from = Date.from(now.minusMinutes(i).toInstant());
			} if (intervalAgregation.equals("MOY_HH")) {
				ZonedDateTime now = ZonedDateTime.now().truncatedTo(ChronoUnit.HOURS).plusHours(1);
				to = Date.from(now.minusHours(i+1).toInstant());
				from = Date.from(now.minusHours(i).toInstant());
			} if (intervalAgregation.equals("MOY_DD")) {
				ZonedDateTime now = ZonedDateTime.now().truncatedTo(ChronoUnit.DAYS).plusDays(1);
				to = Date.from(now.minusDays(i+1).toInstant());
				from = Date.from(now.minusDays(i).toInstant());
			} if (intervalAgregation.equals("MOY_WW")) {
				ZonedDateTime now = ZonedDateTime.now(UTC).truncatedTo(ChronoUnit.DAYS).with(DayOfWeek.MONDAY).plusWeeks(1);			
				to = Date.from(now.minusWeeks(i+1).toInstant());
				from = Date.from(now.minusWeeks(i).toInstant());
			} if (intervalAgregation.equals("MOY_MM")) {
				ZonedDateTime now = ZonedDateTime.now(UTC).truncatedTo(DAYS).withDayOfMonth(1).plusMonths(1);
				to = Date.from(now.minusMonths(i+1).toInstant());
				from = Date.from(now.minusMonths(i).toInstant());
			}
			
  			GuardStatus status = GuardStatus.SUCCESS;
  			List<Violation> violations =  violationRepository.getViolationsByQualityGuardIdBetweenIntervals(qualityGuard.getId(), from, to);

  			for (Violation violation : violations) {
				if (violation.getViolationStatus().equals(GuardStatus.ERROR)) {
					status = GuardStatus.ERROR;
					break;
				} else if (violation.getViolationStatus().equals(GuardStatus.WARNING)) {
					status = GuardStatus.WARNING;
				}
			}
			incidentHistory.add(new IncidentStatus(status, getFormatDateStatus(from, intervalAgregation)));
		}
		return incidentHistory;
	}

	public String getFormatDateStatus(Date dateStatus, String interval) throws ParseException {
		switch (interval) {
		case "MOY_MIN":
			return new SimpleDateFormat("HH:mm").format(dateStatus);
		case "MOY_HH":
			return new SimpleDateFormat("HH:mm").format(dateStatus);
		case "MOY_DD":
			return new SimpleDateFormat("dd-MM").format(dateStatus);
		case "MOY_WW":
			return new SimpleDateFormat("dd-MM").format(dateStatus);
		case "MOY_MM":
			return new SimpleDateFormat("MM-yy").format(dateStatus);
		}
		return "";
	}

}
