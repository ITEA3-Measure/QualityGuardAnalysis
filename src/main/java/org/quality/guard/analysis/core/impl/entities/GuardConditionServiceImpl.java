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
package org.quality.guard.analysis.core.impl.entities;

import java.util.List;

import javax.inject.Inject;

import org.quality.guard.analysis.core.api.entities.IGuardConditionService;
import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.repository.GuardConditionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class GuardConditionServiceImpl implements IGuardConditionService{
	private final Logger log = LoggerFactory.getLogger(GuardConditionServiceImpl.class);
	
	@Inject
	private GuardConditionRepository guardConditionRepository;
	
	/**
     * Save a guardCondition.
     * @param guardCondition the entity to save
     * @return the persisted entity
     */
	public GuardCondition save(GuardCondition guardCondition) {
		log.debug("Request to save QualityGuard : {}", guardCondition);
		GuardCondition result = guardConditionRepository.save(guardCondition);
		return result;
	}

	/**
     * Get all the guardConditions.
     * @return the list of entities
     */
	public List<GuardCondition> findAll() {
		log.debug("Request to get all GuardConditions");
		List<GuardCondition> result = guardConditionRepository.findAll();
		return result;
	}

	/**
     * Get one guardCondition by id.
     * @param id the id of the entity
     * @return the entity
     */
	public GuardCondition findOne(Long id) {
		log.debug("Request to get GuardCondition : {}", id);
		GuardCondition guardCondition = guardConditionRepository.findOne(id);
		return guardCondition;
	}

	/**
     * Delete the  guardCondition by id.
     * @param id the id of the entity
     */
	public void delete(Long id) {
		log.debug("Request to delete GuardCondition : {}", id);
		guardConditionRepository.delete(id);
	}

}
