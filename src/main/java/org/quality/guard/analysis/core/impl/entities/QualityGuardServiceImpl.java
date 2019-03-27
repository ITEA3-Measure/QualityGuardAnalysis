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

import org.quality.guard.analysis.core.api.entities.IQualityGuardService;
import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.repository.ConditionViolationRepository;
import org.quality.guard.analysis.repository.GuardConditionRepository;
import org.quality.guard.analysis.repository.QualityGuardRepository;
import org.quality.guard.analysis.repository.ViolationRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class QualityGuardServiceImpl implements IQualityGuardService{
	private final Logger log = LoggerFactory.getLogger(QualityGuardServiceImpl.class);
	
	@Inject
	private QualityGuardRepository qualityGuardRepository;
	
	@Inject
	private GuardConditionRepository guardConditionRepository;
	
	@Inject
	private ViolationRepository violationRepository;
	
	/**
     * Save a qualityGuard.
     * @param qualityGuard the entity to save
     * @return the persisted entity
     */
    public QualityGuard save(QualityGuard qualityGuard) {
        log.debug("Request to save QualityGuard : {}", qualityGuard);    
        QualityGuard result = qualityGuardRepository.save(qualityGuard);
        return result;
    }
    
    /**
     * Update a qualityGuard.
     * @param qualityGuard the entity to update
     * @return the persisted entity
     */
    public QualityGuard update(QualityGuard qualityGuard) {
    	log.debug("Request to update QualityGuard : {}", qualityGuard);
    	if (qualityGuard.getId() == null) {
            return save(qualityGuard);
        }
        QualityGuard result = qualityGuardRepository.save(qualityGuard);
        return result;
    }

    /**
     * Get all the qualityGuards.
     * @return the list of entities
     */
    @Transactional(readOnly = true)
	public List<QualityGuard> findAll() {
    	log.debug("Request to get all QualityGuards");
    	List<QualityGuard> result = qualityGuardRepository.findAll();
		return result;
	}

    /**
     * Get one qualityGuard by id.
     * @param id the id of the entity
     * @return the entity
     */
	public QualityGuard findOne(Long id) {
		log.debug("Request to get QualityGuard : {}", id);
		QualityGuard qualityGuard = qualityGuardRepository.findOne(id);
		return qualityGuard;
	}

	/**
     * Delete the  qualityGuard by id.
     * @param id the id of the entity
     */
	
	public void delete(Long id) {
		QualityGuard qualityGuard = qualityGuardRepository.findOne(id);
		violationRepository.delete(qualityGuard.getViolation());
		for (GuardCondition guardCondition : qualityGuard.getGuardConditions()) {
			guardConditionRepository.delete(guardCondition);
		}
		qualityGuardRepository.delete(qualityGuard);
	}

	@Override
	public List<QualityGuard> findQualityGuardsByProject(Long projectId) {
		List<QualityGuard> result = qualityGuardRepository.getQualityGuardsByProjectId(projectId);
		return result;
	}

}
