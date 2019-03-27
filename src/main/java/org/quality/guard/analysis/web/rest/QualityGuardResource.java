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

import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.integration.api.IMeasuresAccessService;
import org.quality.guard.analysis.integration.impl.data.MeasureInstance;
import org.quality.guard.analysis.integration.impl.data.MeasureInstanceType;
import org.quality.guard.analysis.repository.QualityGuardRepository;
import org.quality.guard.analysis.web.rest.errors.BadRequestAlertException;
import org.quality.guard.analysis.web.rest.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.inject.Inject;

/**
 * REST controller for managing QualityGuard.
 */
@RestController
@RequestMapping("/api")
public class QualityGuardResource {
	
	@Inject
	private IMeasuresAccessService measurAccessService;
	
    private final Logger log = LoggerFactory.getLogger(QualityGuardResource.class);

    private static final String ENTITY_NAME = "qualityGuard";

    private final QualityGuardRepository qualityGuardRepository;

    public QualityGuardResource(QualityGuardRepository qualityGuardRepository) {
        this.qualityGuardRepository = qualityGuardRepository;
    }

    /**
     * POST  /quality-guards : Create a new qualityGuard.
     *
     * @param qualityGuard the qualityGuard to create
     * @return the ResponseEntity with status 201 (Created) and with body the new qualityGuard, or with status 400 (Bad Request) if the qualityGuard has already an ID
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PostMapping("/quality-guards")
    @Timed
    public ResponseEntity<QualityGuard> createQualityGuard(@RequestBody QualityGuard qualityGuard) throws URISyntaxException {

        if (qualityGuard.getId() != null) {
            throw new BadRequestAlertException("A new qualityGuard cannot already have an ID", ENTITY_NAME, "idexists");
        }
        for(GuardCondition guardCondition : qualityGuard.getGuardConditions()) {
        	for (MeasureInstanceType measureInstanceType : measurAccessService.getPlatformeMeasures(qualityGuard.getMeasureProjectId())) {
				if (measureInstanceType.getMeasureInstance().equals(guardCondition.getMeasureInstance())) {
					guardCondition.setMeasureName(measureInstanceType.getMeasureName().toLowerCase());
				}
			}
        	guardCondition.setQualityGuard(qualityGuard);
        }
        qualityGuard.setIsSchedule(false);
        QualityGuard result = qualityGuardRepository.save(qualityGuard);
        return ResponseEntity.created(new URI("/api/quality-guards/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * PUT  /quality-guards : Updates an existing qualityGuard.
     *
     * @param qualityGuard the qualityGuard to update
     * @return the ResponseEntity with status 200 (OK) and with body the updated qualityGuard,
     * or with status 400 (Bad Request) if the qualityGuard is not valid,
     * or with status 500 (Internal Server Error) if the qualityGuard couldn't be updated
     * @throws URISyntaxException if the Location URI syntax is incorrect
     */
    @PutMapping("/quality-guards")
    @Timed
    public ResponseEntity<QualityGuard> updateQualityGuard(@RequestBody QualityGuard qualityGuard) throws URISyntaxException {
        log.debug("REST request to update QualityGuard : {}", qualityGuard);
        if (qualityGuard.getId() == null) {
            return createQualityGuard(qualityGuard);
        }
        for(GuardCondition guardCondition : qualityGuard.getGuardConditions()) {
        	for (MeasureInstanceType measureInstanceType : measurAccessService.getPlatformeMeasures(qualityGuard.getMeasureProjectId())) {
				if (measureInstanceType.getMeasureInstance().equals(guardCondition.getMeasureInstance())) {
					guardCondition.setMeasureName(measureInstanceType.getMeasureName().toLowerCase());
				}
			}
        	guardCondition.setQualityGuard(qualityGuard);
        }
        QualityGuard result = qualityGuardRepository.save(qualityGuard);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(ENTITY_NAME, qualityGuard.getId().toString()))
            .body(result);
    }

    /**
     * GET  /quality-guards : get all the qualityGuards.
     *
     * @return the ResponseEntity with status 200 (OK) and the list of qualityGuards in body
     */
    @GetMapping("/quality-guards")
    @Timed
    public List<QualityGuard> getAllQualityGuards() {
        log.debug("REST request to get all QualityGuards");
        return qualityGuardRepository.findAll();
        }

    /**
     * GET  /quality-guards/:id : get the "id" qualityGuard.
     *
     * @param id the id of the qualityGuard to retrieve
     * @return the ResponseEntity with status 200 (OK) and with body the qualityGuard, or with status 404 (Not Found)
     */
    @GetMapping("/quality-guards/{id}")
    @Timed
    public ResponseEntity<QualityGuard> getQualityGuard(@PathVariable Long id) {
        log.debug("REST request to get QualityGuard : {}", id);
        QualityGuard qualityGuard = qualityGuardRepository.findOne(id);
        return ResponseUtil.wrapOrNotFound(Optional.ofNullable(qualityGuard));
    }

    /**
     * DELETE  /quality-guards/:id : delete the "id" qualityGuard.
     *
     * @param id the id of the qualityGuard to delete
     * @return the ResponseEntity with status 200 (OK)
     */
    @DeleteMapping("/quality-guards/{id}")
    @Timed
    public ResponseEntity<Void> deleteQualityGuard(@PathVariable Long id) {
        log.debug("REST request to delete QualityGuard : {}", id);
        qualityGuardRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
    
    /**
     * GET /quality-guards-by-project/:id : get the "id" qualityGuards
     * 
     * @param id
     * @return the ResponseEntity with status 200 (OK) and the list of qualityGuards by projectId in body
     */
    @GetMapping("/quality-guards/by-project/{id}")
    @Timed
	public List<QualityGuard> getQualityGuardsByProjectId(@PathVariable Long id) {
    	log.debug("REST request to get QualityGuards by project : {}", id);
    	System.out.println(qualityGuardRepository.getQualityGuardsByProjectId(id).toString());
		return qualityGuardRepository.getQualityGuardsByProjectId(id);
	}
     
}
