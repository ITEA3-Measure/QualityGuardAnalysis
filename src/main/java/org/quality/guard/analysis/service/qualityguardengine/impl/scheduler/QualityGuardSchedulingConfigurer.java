package org.quality.guard.analysis.service.qualityguardengine.impl.scheduler;

import javax.inject.Inject;

import org.quality.guard.analysis.core.api.entities.IQualityGuardService;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.service.qualityguardengine.api.ISchedulingService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.SchedulingConfigurer;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.scheduling.config.ScheduledTaskRegistrar;

@Configuration
@EnableScheduling
public class QualityGuardSchedulingConfigurer implements SchedulingConfigurer {

	@Inject
	private ISchedulingService scheduleService;
	
	@Inject
	private IQualityGuardService qualityGuardService;
	
	@Bean()
    public ThreadPoolTaskScheduler taskScheduler() {
        return new ThreadPoolTaskScheduler();
    }
	
	@Override
	public void configureTasks(ScheduledTaskRegistrar taskRegistrar) {
		taskRegistrar.setTaskScheduler(taskScheduler());
		for (QualityGuard qualityGuard : qualityGuardService.findAll()) {
			if(qualityGuard.isIsShedule() != null && qualityGuard.isIsShedule()) {
				scheduleService.scheduleQualityGuard(qualityGuard);
			}
		}
	}

}
