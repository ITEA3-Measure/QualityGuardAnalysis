package org.quality.guard.analysis.web.services;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;


@RestController
@RequestMapping(value="/history-manager")
public class HistoryManagerService {

	@GetMapping(value="/state-history")
	@Timed
	public void computeStateHistory() {
		
	}
}
