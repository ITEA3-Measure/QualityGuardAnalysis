package org.quality.guard.analysis.service.qualityguardengine.impl.scheduler;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ScheduledFuture;

import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.quality.guard.analysis.core.api.entities.IQualityGuardService;
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
	private IQualityGuardService qualityGuardService;
	
	@Inject
	private QualityGuardExecutionService qualityGuardExecutionService;
	
	private Map<Long, ScheduledFuture> jobs;
	
	@PostConstruct
	public void initJobs() {
		this.jobs = new HashMap<>();
	}
	
	@Override
	public Boolean scheduleQualityGuard(QualityGuard qualityGuard) {
		if (qualityGuard.isIsShedule()) {
			scheduleExecution(qualityGuard);
			return true;
		}
		return false;
	}
	
	private void scheduleExecution(QualityGuard qualityGuard) {
		ScheduledFuture job = taskScheduler.scheduleAtFixedRate(new Runnable() {
            @Override
            public void run() {
            	qualityGuardExecutionService.executeQualityGuard(qualityGuard);
            }
        }, 5000);
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

}
