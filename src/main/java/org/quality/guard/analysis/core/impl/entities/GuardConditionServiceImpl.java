package org.quality.guard.analysis.core.impl.entities;

import java.util.List;

import javax.inject.Inject;

import org.quality.guard.analysis.core.api.entities.IGuardConditionService;
import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.repository.GuardConditionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class GuardConditionServiceImpl implements IGuardConditionService{
	private final Logger log = LoggerFactory.getLogger(QualityGuardServiceImpl.class);
	
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
