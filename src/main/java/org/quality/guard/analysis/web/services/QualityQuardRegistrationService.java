package org.quality.guard.analysis.web.services;

import java.util.List;

import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.repository.QualityGuardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;

@RestController
@RequestMapping(value = "/quality-guard-registration")
public class QualityQuardRegistrationService {

	@Autowired
	private QualityGuardRepository qualityGuardRepository;

	@GetMapping(value = "/quality-guards")
	public List<QualityGuard> getAllQualityGuards() {
		return qualityGuardRepository.findAll();
	}

	@GetMapping(value = "/quality-guards/{id}")
	public QualityGuard getQualityGuard(@PathVariable Long id) {
		return qualityGuardRepository.findOne(id);
	}

	@PostMapping(value = "/quality-guards")
	public void saveQualityGuard(@RequestBody QualityGuard qualityGuard) {
		qualityGuardRepository.save(qualityGuard);
	}
	
	@PutMapping(value="/quality-guards/{id}")
	public void updateQualityGuard(@RequestBody QualityGuard qualityGuard, @PathVariable Long id) {
		qualityGuard.setId(id);
		qualityGuardRepository.save(qualityGuard);
	}
	
	@DeleteMapping(value="/quality-guards/{id}")
	public boolean deleteQualityGuard(@PathVariable Long id) {
		qualityGuardRepository.delete(id);
		return true;
	}

	/*
	 * @PostMapping(value = "/analysis/register")
	 * 
	 * @Timed public void registerQualityGuardTool() { }
	 * 
	 * @PostMapping(value = "/notification/registration")
	 * 
	 * @Timed public void subscribeNotification() {
	 * 
	 * }
	 * 
	 * @PostMapping(value = "/notification/pooling")
	 * 
	 * @Timed public void registerMain() {
	 * 
	 * }
	 * 
	 * @DeleteMapping(value = "/notification/pooling")
	 * 
	 * @Timed public void deleteQualityGuard() {
	 * 
	 * }
	 */
}
