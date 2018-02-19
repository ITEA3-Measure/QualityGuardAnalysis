package org.quality.guard.analysis.core.api.entities;

import java.util.List;

import org.quality.guard.analysis.domain.QualityGuard;

/**
 * Service Interface for managing QualityGuard.
 */
public interface IQualityGuardService {
	/**
     * Save a qualityGuard.
     * @param qualityGuard the entity to save
     * @return the persisted entity
     */
    QualityGuard save(QualityGuard qualityGuard);
    
    /**
     * Update a qualityGuard.
     * @param qualityGuard the entity to update
     * @return the persisted entity
     */
    QualityGuard update(QualityGuard qualityGuard);

    /**
     * Get all the qualityGuards.
     * @return the list of entities
     */
    List<QualityGuard> findAll();

    /**
     * Get the "id" qualityGuard.
     * @param id the id of the entity
     * @return the entity
     */
    QualityGuard findOne(Long id);

    /**
     * Delete the "id" qualityGuard.
     * @param id the id of the entity
     */
    void delete(Long id);
    
    /**
     * Get all the qualityGuards of a specified project.
     * @return the list of entities
     */
    List<QualityGuard> findQualityGuardsByProject(Long projectId);
}
