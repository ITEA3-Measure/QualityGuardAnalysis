package org.quality.guard.analysis.web.rest;

import com.codahale.metrics.annotation.Timed;
import org.quality.guard.analysis.domain.Violation;

import org.quality.guard.analysis.repository.ViolationRepository;
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
 * REST controller for managing Violation.
 */
@RestController
@RequestMapping("/api")
public class ViolationResource {

    private final Logger log = LoggerFactory.getLogger(ViolationResource.class);

    private static final String ENTITY_NAME = "violation";

    private final ViolationRepository violationRepository;

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
        violationRepository.delete(id);
        return ResponseEntity.ok().headers(HeaderUtil.createEntityDeletionAlert(ENTITY_NAME, id.toString())).build();
    }
}
