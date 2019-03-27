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

import com.codahale.metrics.annotation.Timed;
import org.quality.guard.analysis.domain.ConditionViolation;
import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.repository.ConditionViolationRepository;
import org.quality.guard.analysis.web.rest.errors.BadRequestAlertException;
import org.quality.guard.analysis.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing ConditionViolation.
 */
@RestController
@RequestMapping("/api")
public class ConditionViolationResource {

    private final Logger log = LoggerFactory.getLogger(ConditionViolationResource.class);

    private static final String ENTITY_NAME = "conditionViolation";

    private final ConditionViolationRepository conditionViolationRepository;

    public ConditionViolationResource(ConditionViolationRepository conditionViolationRepository) {
        this.conditionViolationRepository = conditionViolationRepository;
    }

    /**
     * POST  /condition-violations : Create a new conditionViolation.
     *
     * @param conditionViolation the conditionViolation to create
     * @return the ResponseEntity with status 201 (Created) and with body the new conditionViolation, or with status 400 (Bad Request) if the conditionViolation has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/condition-violations")
    @Timed
    public ResponseEntity<ConditionViolation> createConditionViolation(@RequestBody ConditionViolation conditionViolation) throws URISyntaxException {
        log.debug("REST request to save ConditionViolation : {}", conditionViolation);
        if (conditionViolation.getId() != null) {
            throw new BadRequestAlertException("A new conditionViolation cannot already have an ID", ENTITY_NAME, "idexists");
        }
        ConditionViolation result = conditionViolationRepository.save(conditionViolation);
        return ResponseEntity.created(new URI("/api/condition-violations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /condition-violations : Updates an existing conditionViolation.
     *
     * @param conditionViolation the conditionViolation to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated conditionViolation,
     * or with status 400 (Bad Request) if the conditionViolation is not valid,
     * or with status 500 (Internal Server Error) if the conditionViolation couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/condition-violations")
    @Timed
    public ResponseEntity<ConditionViolation> updateConditionViolation(@RequestBody ConditionViolation conditionViolation) throws URISyntaxException {
        log.debug("REST request to update ConditionViolation : {}", conditionViolation);
        if (conditionViolation.getId() == null) {
            return createConditionViolation(conditionViolation);
        }
        ConditionViolation result = conditionViolationRepository.save(conditionViolation);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, conditionViolation.getId().toString()))
            .body(result);
    }

    /**
     * GET  /condition-violations : get all the conditionViolations.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of conditionViolations in body
     */
    @GetMapping("/condition-violations")
    @Timed
    public List<ConditionViolation> getAllConditionViolations() {
        log.debug("REST request to get all ConditionViolations");
        return conditionViolationRepository.findAll();
        }

    /**
     * GET  /condition-violations/:id : get the "id" conditionViolation.
     *
     * @param id the id of the conditionViolation to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the conditionViolation, or with status 404 (Not Found)
     */
    @GetMapping("/condition-violations/{id}")
    @Timed
    public ResponseEntity<ConditionViolation> getConditionViolation(@PathVariable Long id) {
        log.debug("REST request to get ConditionViolation : {}", id);
        ConditionViolation conditionViolation = conditionViolationRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(conditionViolation));
    }

    /**
     * DELETE  /condition-violations/:id : delete the "id" conditionViolation.
     *
     * @param id the id of the conditionViolation to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/condition-violations/{id}")
    @Timed
    public ResponseEntity<Void> deleteConditionViolation(@PathVariable Long id) {
        log.debug("REST request to delete ConditionViolation : {}", id);
        conditionViolationRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
    
    @GetMapping("/condition-violations/by-project/{idProject}/by-quality-guard/{idQualityGuard}")
    @Timed
    public List<ConditionViolation> getConditionViolationByProjectIdAndQualityGuardId(@PathVariable Long idProject,@PathVariable Long idQualityGuard){
    	log.debug("REST request to get GuardConditions by project : {} "+ idProject + " {} "+ idQualityGuard);
    	return conditionViolationRepository.getConditionViolationByProjectIdAndQualityGuardId(idProject, idQualityGuard);
    }
}
