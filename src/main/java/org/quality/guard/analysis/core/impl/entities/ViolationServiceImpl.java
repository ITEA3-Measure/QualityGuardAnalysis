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

import org.quality.guard.analysis.core.api.entities.IViolationService;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.domain.Violation;
import org.quality.guard.analysis.repository.QualityGuardRepository;
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
	
	@Inject
	private QualityGuardRepository qualityRepository;
	
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
		Violation violation = violationRepository.findOne(id);
		QualityGuard  qualityGuard = violation.getActualQualityGuard();
		if(qualityGuard != null) {
			qualityGuard.setViolation(null);
			qualityRepository.save(qualityGuard);
		}
		violationRepository.delete(id);
	}
}
