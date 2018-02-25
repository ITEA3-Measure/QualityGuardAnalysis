package org.quality.guard.analysis.core.api.entities;

import java.util.List;

import org.quality.guard.analysis.domain.GuardCondition;

/**
 * Service Interface for managing GuardCondition.
 */
public interface IGuardConditionService {
	/**
     * Save a guardCondition.
     * @param guardCondition the entity to save
     * @return the persisted entity
     */
	GuardCondition save(GuardCondition guardCondition);

    /**
     * Get all the guardCondition.
     * @return the list of entities
     */
    List<GuardCondition> findAll();

    /**
     * Get the "id" guardCondition.
     * @param id the id of the entity
     * @return the entity
     */
    GuardCondition findOne(Long id);

    /**
     * Delete the "id" guardCondition.
     * @param id the id of the entity
     */
    void delete(Long id);
    
}
