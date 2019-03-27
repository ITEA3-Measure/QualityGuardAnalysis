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

import org.quality.guard.analysis.core.api.entities.IViolationService;
import org.quality.guard.analysis.domain.Violation;
import org.quality.guard.analysis.repository.ViolationRepository;
import org.quality.guard.analysis.service.qualityissues.api.IQualityIssues;
import org.quality.guard.analysis.service.qualityissues.impl.QualityIssues;
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
 * REST controller for managing Violation.
 */
@RestController
@RequestMapping("/api")
public class ViolationResource {

    private final Logger log = LoggerFactory.getLogger(ViolationResource.class);

    private static final String ENTITY_NAME = "violation";

    private final ViolationRepository violationRepository;
    
    @Inject
    private IQualityIssues qualityIssues;
    
    @Inject 
    private IViolationService violationService;

    public ViolationResource(ViolationRepository violationRepository) {
        this.violationRepository = violationRepository;
    }

    /**
     * POST  /violations : Create a new violation.
     *
     * @param violation the violation to create
     * @return the ResponseEntity with status 201 (Created) and with body the new violation, or with status 400 (Bad Request) if the violation has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/violations")
    @Timed
    public ResponseEntity<Violation> createViolation(@RequestBody Violation violation) throws URISyntaxException {
        log.debug("REST request to save Violation : {}", violation);
        if (violation.getId() != null) {
            throw new BadRequestAlertException("A new violation cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Violation result = violationRepository.save(violation);
        return ResponseEntity.created(new URI("/api/violations/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /violations : Updates an existing violation.
     *
     * @param violation the violation to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated violation,
     * or with status 400 (Bad Request) if the violation is not valid,
     * or with status 500 (Internal Server Error) if the violation couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/violations")
    @Timed
    public ResponseEntity<Violation> updateViolation(@RequestBody Violation violation) throws URISyntaxException {
        log.debug("REST request to update Violation : {}", violation);
        if (violation.getId() == null) {
            return createViolation(violation);
        }
        Violation result = violationRepository.save(violation);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, violation.getId().toString()))
            .body(result);
    }

    /**
     * GET  /violations : get all the violations.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of violations in body
     */
    @GetMapping("/violations")
    @Timed
    public List<Violation> getAllViolations() {
        log.debug("REST request to get all Violations");
        return violationRepository.findAll();
        }

    /**
     * GET  /violations/:id : get the "id" violation.
     *
     * @param id the id of the violation to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the violation, or with status 404 (Not Found)
     */
    @GetMapping("/violations/{id}")
    @Timed
    public ResponseEntity<Violation> getViolation(@PathVariable Long id) {
        log.debug("REST request to get Violation : {}", id);
        Violation violation = violationRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(violation));
    }

    /**
     * DELETE  /violations/:id : delete the "id" violation.
     *
     * @param id the id of the violation to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/violations/{id}")
    @Timed
    public ResponseEntity<Void> deleteViolation(@PathVariable Long id) {
        log.debug("REST request to delete Violation : {}", id);
        violationService.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
    
    @GetMapping("/violations/by-quality-guard/{idQualityGuard}")
    @Timed
    public List<Violation> getViolationsByQualityGuardId(@PathVariable Long idQualityGuard){
    	log.debug("REST request to get Violations by qualityGuard id : {} "+ idQualityGuard);
    	return violationRepository.getViolationsByQualityGuardId(idQualityGuard);
    }
    
    @GetMapping("/violations/last-violations/by-quality-guard/{idQualityGuard}")
    @Timed
    public List<Violation> getLastViolationsByQualityGuardId(@PathVariable Long idQualityGuard){
    	log.debug("REST request to get last Violations by qualityGuard id : {} "+ idQualityGuard);
    	return violationRepository.getLastViolationsByQualityGuardId(idQualityGuard);
    }
    
    @GetMapping("/violations/quality-issues/last-violations")
    @Timed
    public List<QualityIssues> getLastViolationsWithQualityGuard() {
    	log.debug("REST request to get last Violations with quality guard");
    	List<QualityIssues> listQualityIssues = qualityIssues.getQualityIssues();
    	return listQualityIssues;
    }
}
