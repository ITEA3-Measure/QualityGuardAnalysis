package org.quality.guard.analysis.core.impl.entities;

import java.util.List;

import javax.inject.Inject;

import org.quality.guard.analysis.core.api.entities.IViolationService;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.domain.Violation;
import org.quality.guard.analysis.repository.ViolationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ViolationServiceImpl implements IViolationService {
	private final Logger log = LoggerFactory.getLogger(ViolationServiceImpl.class);
	
	@Inject
	private ViolationRepository violationRepository;
	
	/**
     * Save a violation.
     * @param violation the entity to save
     * @return the persisted entity
     */
	public Violation save(Violation violation) {
		log.debug("Request to save Violation : {}", violation);    
		Violation result = violationRepository.save(violation);
        return result;
	}

	/**
     * Update a qualityGuard.
     * @param qualityGuard the entity to update
     * @return the persisted entity
     */
    public Violation update(Violation violation) {
    	log.debug("Request to update Violation : {}", violation);
    	if (violation.getId() == null) {
            return save(violation);
        }
    	Violation result = violationRepository.save(violation);
        return result;
    }
    
	/**
     * Get all the violations.
     * @return the list of entities
     */
	public List<Violation> findAll() {
		log.debug("Request to get all Violations");
    	List<Violation> result = violationRepository.findAll();
		return result;
	}

	/**
     * Get one violation by id.
     * @param id the id of the entity
     * @return the entity
     */
	public Violation findOne(Long id) {
		log.debug("Request to get Violation : {}", id);
		Violation violation = violationRepository.findOne(id);
		return violation;
	}

	/**
     * Delete the  conditionViolation by id.
     * @param id the id of the entity
     */
	public void delete(Long id) {
		log.debug("Request to delete ConditionViolation : {}", id);
		violationRepository.delete(id);
	}
}
