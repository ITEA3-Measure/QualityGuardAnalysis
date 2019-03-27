/*******************************************************************************
 * Copyright (C) 2019 Softeam
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
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
