package org.quality.guard.analysis.core.impl.entities;

import java.util.List;

import javax.inject.Inject;

import org.quality.guard.analysis.core.api.entities.IConditionViolationService;
import org.quality.guard.analysis.domain.ConditionViolation;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.repository.ConditionViolationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ConditionViolationServiceImpl implements IConditionViolationService {
	private final Logger log = LoggerFactory.getLogger(ConditionViolationServiceImpl.class);
	
	@Inject
	private ConditionViolationRepository conditionViolationRepository;
	
	/**
     * Save a conditionViolation.
     * @param conditionViolation the entity to save
     * @return the persisted entity
     */
	public ConditionViolation save(ConditionViolation conditionViolation) {
		log.debug("Request to save ConditionViolation : {}", conditionViolation);    
		ConditionViolation result = conditionViolationRepository.save(conditionViolation);
        return result;
	}

	/**
     * Get all the conditionViolations.
     * @return the list of entities
     */
	public List<ConditionViolation> findAll() {
		log.debug("Request to get all ConditionViolations");
    	List<ConditionViolation> result = conditionViolationRepository.findAll();
		return result;
	}

	/**
     * Get one conditionViolation by id.
     * @param id the id of the entity
     * @return the entity
     */
	public ConditionViolation findOne(Long id) {
		log.debug("Request to get ConditionViolation : {}", id);
		ConditionViolation conditionViolation = conditionViolationRepository.findOne(id);
		return conditionViolation;
	}

	/**
     * Delete the  conditionViolation by id.
     * @param id the id of the entity
     */
	public void delete(Long id) {
		log.debug("Request to delete ConditionViolation : {}", id);
		conditionViolationRepository.delete(id);
	}

}
