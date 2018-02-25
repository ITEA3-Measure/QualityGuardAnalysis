package org.quality.guard.analysis.core.api.entities;

import java.util.List;

import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.domain.Violation;

/**
 * Service Interface for managing Violation.
 */
public interface IViolationService {

	/**
     * Save a violation.
     * @param violation the entity to save
     * @return the persisted entity
     */
    Violation save(Violation violation);

    /**
     * Update a violation.
     * @param violation the entity to update
     * @return the persisted entity
     */
    Violation update(Violation violation);
    
    /**
     * Get all the violations.
     * @return the list of entities
     */
    List<Violation> findAll();

    /**
     * Get the "id" violation.
     * @param id the id of the entity
     * @return the entity
     */
    Violation findOne(Long id);

    /**
     * Delete the "id" violation.
     * @param id the id of the entity
     */
    void delete(Long id);
}
