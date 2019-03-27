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
