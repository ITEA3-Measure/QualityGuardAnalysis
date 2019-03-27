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
package org.quality.guard.analysis.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.inject.Inject;

import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.integration.api.IMeasuresAccessService;
import org.quality.guard.analysis.integration.impl.data.MeasureInstanceType;
import org.quality.guard.analysis.repository.GuardConditionRepository;
import org.quality.guard.analysis.web.rest.errors.BadRequestAlertException;
import org.quality.guard.analysis.web.rest.util.HeaderUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codahale.metrics.annotation.Timed;

import io.github.jhipster.web.util.ResponseUtil;

/**
 * REST controller for managing GuardCondition.
 */
@RestController
@RequestMapping("/api")
public class GuardConditionResource {
		
	@Inject
	private IMeasuresAccessService measurAccessService;

    private final Logger log = LoggerFactory.getLogger(GuardConditionResource.class);

    private static final String ENTITY_NAME = "guardCondition";

    private final GuardConditionRepository guardConditionRepository;
    
    public GuardConditionResource(GuardConditionRepository guardConditionRepository) {
        this.guardConditionRepository = guardConditionRepository;
    }

    /**
     * POST  /guard-conditions : Create a new guardCondition.
     *
     * @param guardCondition the guardCondition to create
     * @return the ResponseEntity with status 201 (Created) and with body the new guardCondition, or with status 400 (Bad Request) if the guardCondition has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/guard-conditions")
    @Timed
    public ResponseEntity<GuardCondition> createGuardCondition(@RequestBody GuardCondition guardCondition) throws URISyntaxException {
        log.debug("REST request to save GuardCondition : {}", guardCondition);
        if (guardCondition.getId() != null) {
            throw new BadRequestAlertException("A new guardCondition cannot already have an ID", ENTITY_NAME, "idexists");
        }
        GuardCondition result = guardConditionRepository.save(guardCondition);
        return ResponseEntity.created(new URI("/api/guard-conditions/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /guard-conditions : Updates an existing guardCondition.
     *
     * @param guardCondition the guardCondition to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated guardCondition,
     * or with status 400 (Bad Request) if the guardCondition is not valid,
     * or with status 500 (Internal Server Error) if the guardCondition couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/guard-conditions")
    @Timed
    public ResponseEntity<GuardCondition> updateGuardCondition(@RequestBody GuardCondition guardCondition) throws URISyntaxException {
        log.debug("REST request to update GuardCondition : {}", guardCondition);
        if (guardCondition.getId() == null) {
            return createGuardCondition(guardCondition);
        }
        GuardCondition result = guardConditionRepository.save(guardCondition);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, guardCondition.getId().toString()))
            .body(result);
    }

    /**
     * GET  /guard-conditions : get all the guardConditions.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of guardConditions in body
     */
    @GetMapping("/guard-conditions")
    @Timed
    public List<GuardCondition> getAllGuardConditions() {
        log.debug("REST request to get all GuardConditions");
        return guardConditionRepository.findAll();
        }

    /**
     * GET  /guard-conditions/:id : get the "id" guardCondition.
     *
     * @param id the id of the guardCondition to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the guardCondition, or with status 404 (Not Found)
     */
    @GetMapping("/guard-conditions/{id}")
    @Timed
    public ResponseEntity<GuardCondition> getGuardCondition(@PathVariable Long id) {
        log.debug("REST request to get GuardCondition : {}", id);
        GuardCondition guardCondition = guardConditionRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(guardCondition));
    }

    /**
     * DELETE  /guard-conditions/:id : delete the "id" guardCondition.
     *
     * @param id the id of the guardCondition to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/guard-conditions/{id}")
    @Timed
    public ResponseEntity<Void> deleteGuardCondition(@PathVariable Long id) {
        log.debug("REST request to delete GuardCondition : {}", id);
        guardConditionRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
    
    @GetMapping("/guard-conditions/by-project/{idProject}")
    @Timed
    public List<GuardCondition> getGuardConditionByProjectId(@PathVariable Long idProject){
    	log.debug("REST request to get GuardConditions by project : {}", idProject);
    	return guardConditionRepository.getGuardConditionByProjectId(idProject);
    }
    
    @GetMapping("/guard-conditions/measure-instance-type/by-project/{idProject}")
    @Timed
    public List<MeasureInstanceType> getMeasureInstanceType(@PathVariable Long idProject){
    	return measurAccessService.getPlatformeMeasures(idProject);
    }
}
