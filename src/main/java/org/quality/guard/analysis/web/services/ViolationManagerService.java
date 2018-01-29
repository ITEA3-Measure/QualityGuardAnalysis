package org.quality.guard.analysis.web.services;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;

@RestController
@RequestMapping(value="/violation-manager")
public class ViolationManagerService {

	@PostMapping(value="/notification/pooling")
	@Timed
	public void createViolation(){
		
	}
	
	@PutMapping(value="/notification/pooling")
	@Timed
	public void updateViolation(){
		
	}
}
