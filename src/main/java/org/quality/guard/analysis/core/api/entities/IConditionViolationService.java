package org.quality.guard.analysis.core.api.entities;

import java.util.List;

import org.quality.guard.analysis.domain.ConditionViolation;

/**
 * Service Interface for managing ConditionViolation.
 */
public interface IConditionViolationService {
	/**
     * Save a conditionViolation.
     * @param conditionViolation the entity to save
     * @return the persisted entity
     */
	ConditionViolation save(ConditionViolation conditionViolation);

    /**
     * Get all the conditionViolations.
     * @return the list of entities
     */
    List<ConditionViolation> findAll();

    /**
     * Get the "id" conditionViolation.
     * @param id the id of the entity
     * @return the entity
     */
    ConditionViolation findOne(Long id);

    /**
     * Delete the "id" conditionViolation.
     * @param id the id of the entity
     */
    void delete(Long id);
    
}

