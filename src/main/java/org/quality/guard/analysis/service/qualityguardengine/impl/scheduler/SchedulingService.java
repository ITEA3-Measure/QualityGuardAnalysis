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
package org.quality.guard.analysis.service.qualityguardengine.impl.scheduler;

import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.service.qualityguardengine.api.ISchedulingService;
import org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution.QualityGuardExecutionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.stereotype.Component;

@Component
@Scope("singleton")
public class SchedulingService implements ISchedulingService{
	
	@Autowired
    private TaskScheduler taskScheduler;
	
	@Inject
	private QualityGuardExecutionService qualityGuardExecutionService;
	
	private Map<Long, ScheduledFuture> jobs;
	
	@PostConstruct
	public void initJobs() {
		this.jobs = new HashMap<>();
	}
	
	@Override
	public Boolean scheduleQualityGuard(QualityGuard qualityGuard) {
		if (qualityGuard.isIsSchedule()) {
			scheduleExecution(qualityGuard);
			return true;
		}
		return false;
	}
	
	private void scheduleExecution(QualityGuard qualityGuard) {
		Long minIntervalAgregation = getMinIntervalAgregation(qualityGuard);
		ScheduledFuture job = taskScheduler.scheduleAtFixedRate(new Runnable() {
            @Override
            public void run() {
            	try {
					qualityGuardExecutionService.executeQualityGuard(qualityGuard);
				} catch (UnknownHostException e) {
					e.printStackTrace();
				}
            }
        }, minIntervalAgregation);
		this.jobs.put(qualityGuard.getId(), job);
	}
	
	@Override
	public Boolean removeQualityGuard(Long qualityGuardId) {
		ScheduledFuture job = jobs.get(qualityGuardId);
		if (job != null) {
			job.cancel(true);
			jobs.remove(qualityGuardId);
		}		
		return true;
	}

	@Override
	public Boolean isShedule(Long qualityGuardId) {
		if (jobs.containsKey(qualityGuardId)) {
			return true;
		}
		return false;
	}
	
	public Long getMinIntervalAgregation(QualityGuard qualityGuard) {
		List<GuardCondition> relatedRules = new ArrayList<GuardCondition>();
		QualityGuardExecutionService qualityGuardExecutionService= new QualityGuardExecutionService(); 
		relatedRules.addAll(qualityGuard.getGuardConditions());
		List<Long> intervalAgregation = new ArrayList<Long>();
		for (GuardCondition guardCondition : relatedRules) {
			intervalAgregation.add(qualityGuardExecutionService.getTimeAgo(guardCondition.getIntervalAgregation().name()));
		}
		Long minIntervalAgregation = Collections.min(intervalAgregation);
		return minIntervalAgregation;
	}

}
