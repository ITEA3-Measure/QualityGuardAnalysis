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
