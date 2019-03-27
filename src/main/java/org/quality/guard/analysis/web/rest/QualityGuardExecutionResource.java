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
package org.quality.guard.analysis.web.rest;

import org.quality.guard.analysis.core.api.entities.IQualityGuardService;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.service.qualityguardengine.api.ISchedulingService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.inject.Inject;

@RestController
@RequestMapping(value = "api/quality-guard/sheduling")
public class QualityGuardExecutionResource {
	
	@Inject
	private ISchedulingService schedulingService;
	
	@Inject
	private IQualityGuardService qualityGuardService;
	
	@RequestMapping(value = "/start", method = RequestMethod.GET)
	public Boolean startQualityGuardSchedule(@RequestParam("id") String id) {
		if(id.matches("\\d+")) {
			Long qualityGuardId = Long.valueOf(id);
			if(!schedulingService.isShedule(qualityGuardId)) {
				QualityGuard qualityGuard = qualityGuardService.findOne(qualityGuardId);
				if (!qualityGuard.isIsSchedule()) {
					qualityGuard.isSchedule(true);
					qualityGuardService.update(qualityGuard);
				}
				return schedulingService.scheduleQualityGuard(qualityGuard);
			}
		}
		return false;
	}
	
	@RequestMapping(value="/stop", method = RequestMethod.GET)
	public Boolean stopQualityGuardSchedule(@RequestParam("id") String id) {
		if(id.matches("\\d+")) {
			Long qualityGuardId = Long.valueOf(id);
			if(schedulingService.isShedule(qualityGuardId)) {
				QualityGuard qualityGuard = qualityGuardService.findOne(qualityGuardId);
				if (qualityGuard.isIsSchedule()) {
					qualityGuard.isSchedule(false);
					qualityGuardService.update(qualityGuard);
				}
				return schedulingService.removeQualityGuard(qualityGuardId);
			}
		}
		return false;
	}
	
	@RequestMapping(value="/isshedule", method = RequestMethod.GET)
	public Boolean isScheduleQualityGuard(@RequestParam("id") String id) {
		if(id.matches("\\d+")) {
			Long qualityGuardId = Long.valueOf(id);
			return schedulingService.isShedule(qualityGuardId);
		}
		return false;
	}
	
}
