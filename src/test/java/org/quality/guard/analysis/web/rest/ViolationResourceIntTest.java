package org.quality.guard.analysis.web.rest;

import org.quality.guard.analysis.QualityGuardAnalysisApp;

import org.quality.guard.analysis.domain.Violation;
import org.quality.guard.analysis.repository.ViolationRepository;
import org.quality.guard.analysis.web.rest.errors.ExceptionTranslator;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.web.PageableHandlerMethodArgumentResolver;
import org.springframework.http.MediaType;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;

import java.util.Date;
import java.util.List;

import static org.quality.guard.analysis.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.quality.guard.analysis.domain.enumeration.GuardStatus;
/**
 * Test class for the ViolationResource REST controller.
 *
 * @see ViolationResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = QualityGuardAnalysisApp.class)
public class ViolationResourceIntTest {

    private static final Date DEFAULT_INCIDENT_START_DATE = new Date();
    private static final Date UPDATED_INCIDENT_START_DATE = new Date();

    private static final Date DEFAULT_INCIDENT_END_DATE = new Date();
    private static final Date UPDATED_INCIDENT_END_DATE = new Date();

    private static final GuardStatus DEFAULT_VIOLATION_STATUS = GuardStatus.SUCCESS;
    private static final GuardStatus UPDATED_VIOLATION_STATUS = GuardStatus.WARNING;

    @Autowired
    private ViolationRepository violationRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restViolationMockMvc;

    private Violation violation;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final ViolationResource violationResource = new ViolationResource(violationRepository);
        this.restViolationMockMvc = MockMvcBuilders.standaloneSetup(violationResource)
            .setCustomArgumentResolvers(pageableArgumentResolver)
            .setControllerAdvice(exceptionTranslator)
            .setConversionService(createFormattingConversionService())
            .setMessageConverters(jacksonMessageConverter).build();
    }

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Violation createEntity(EntityManager em) {
        Violation violation = new Violation()
            .incidentStartDate(DEFAULT_INCIDENT_START_DATE)
            .incidentEndDate(DEFAULT_INCIDENT_END_DATE)
            .violationStatus(DEFAULT_VIOLATION_STATUS);
        return violation;
    }

    @Before
    public void initTest() {
        violation = createEntity(em);
    }

    @Test
    @Transactional
    public void createViolation() throws Exception {
        int databaseSizeBeforeCreate = violationRepository.findAll().size();

        // Create the Violation
        restViolationMockMvc.perform(post("/api/violations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(violation)))
            .andExpect(status().isCreated());

        // Validate the Violation in the database
        List<Violation> violationList = violationRepository.findAll();
        assertThat(violationList).hasSize(databaseSizeBeforeCreate + 1);
        Violation testViolation = violationList.get(violationList.size() - 1);
        assertThat(testViolation.getIncidentStartDate()).isEqualTo(DEFAULT_INCIDENT_START_DATE);
        assertThat(testViolation.getIncidentEndDate()).isEqualTo(DEFAULT_INCIDENT_END_DATE);
        assertThat(testViolation.getViolationStatus()).isEqualTo(DEFAULT_VIOLATION_STATUS);
    }

    @Test
    @Transactional
    public void createViolationWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = violationRepository.findAll().size();

        // Create the Violation with an existing ID
        violation.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restViolationMockMvc.perform(post("/api/violations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(violation)))
            .andExpect(status().isBadRequest());

        // Validate the Violation in the database
        List<Violation> violationList = violationRepository.findAll();
        assertThat(violationList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllViolations() throws Exception {
        // Initialize the database
        violationRepository.saveAndFlush(violation);

        // Get all the violationList
        restViolationMockMvc.perform(get("/api/violations?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(violation.getId().intValue())))
            .andExpect(jsonPath("$.[*].incidentStartDate").value(hasItem(DEFAULT_INCIDENT_START_DATE.toString())))
            .andExpect(jsonPath("$.[*].incidentEndDate").value(hasItem(DEFAULT_INCIDENT_END_DATE.toString())))
            .andExpect(jsonPath("$.[*].violationStatus").value(hasItem(DEFAULT_VIOLATION_STATUS.toString())));
    }

    @Test
    @Transactional
    public void getViolation() throws Exception {
        // Initialize the database
        violationRepository.saveAndFlush(violation);

        // Get the violation
        restViolationMockMvc.perform(get("/api/violations/{id}", violation.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(violation.getId().intValue()))
            .andExpect(jsonPath("$.incidentStartDate").value(DEFAULT_INCIDENT_START_DATE.toString()))
            .andExpect(jsonPath("$.incidentEndDate").value(DEFAULT_INCIDENT_END_DATE.toString()))
            .andExpect(jsonPath("$.violationStatus").value(DEFAULT_VIOLATION_STATUS.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingViolation() throws Exception {
        // Get the violation
        restViolationMockMvc.perform(get("/api/violations/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateViolation() throws Exception {
        // Initialize the database
        violationRepository.saveAndFlush(violation);
        int databaseSizeBeforeUpdate = violationRepository.findAll().size();

        // Update the violation
        Violation updatedViolation = violationRepository.findOne(violation.getId());
        // Disconnect from session so that the updates on updatedViolation are not directly saved in db
        em.detach(updatedViolation);
        updatedViolation
            .incidentStartDate(UPDATED_INCIDENT_START_DATE)
            .incidentEndDate(UPDATED_INCIDENT_END_DATE)
            .violationStatus(UPDATED_VIOLATION_STATUS);

        restViolationMockMvc.perform(put("/api/violations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedViolation)))
            .andExpect(status().isOk());

        // Validate the Violation in the database
        List<Violation> violationList = violationRepository.findAll();
        assertThat(violationList).hasSize(databaseSizeBeforeUpdate);
        Violation testViolation = violationList.get(violationList.size() - 1);
        assertThat(testViolation.getIncidentStartDate()).isEqualTo(UPDATED_INCIDENT_START_DATE);
        assertThat(testViolation.getIncidentEndDate()).isEqualTo(UPDATED_INCIDENT_END_DATE);
        assertThat(testViolation.getViolationStatus()).isEqualTo(UPDATED_VIOLATION_STATUS);
    }

    @Test
    @Transactional
    public void updateNonExistingViolation() throws Exception {
        int databaseSizeBeforeUpdate = violationRepository.findAll().size();

        // Create the Violation

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restViolationMockMvc.perform(put("/api/violations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(violation)))
            .andExpect(status().isCreated());

        // Validate the Violation in the database
        List<Violation> violationList = violationRepository.findAll();
        assertThat(violationList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteViolation() throws Exception {
        // Initialize the database
        violationRepository.saveAndFlush(violation);
        int databaseSizeBeforeDelete = violationRepository.findAll().size();

        // Get the violation
        restViolationMockMvc.perform(delete("/api/violations/{id}", violation.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<Violation> violationList = violationRepository.findAll();
        assertThat(violationList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Violation.class);
        Violation violation1 = new Violation();
        violation1.setId(1L);
        Violation violation2 = new Violation();
        violation2.setId(violation1.getId());
        assertThat(violation1).isEqualTo(violation2);
        violation2.setId(2L);
        assertThat(violation1).isNotEqualTo(violation2);
        violation1.setId(null);
        assertThat(violation1).isNotEqualTo(violation2);
    }
}
