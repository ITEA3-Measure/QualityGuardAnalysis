package org.quality.guard.analysis.web.rest;

import org.quality.guard.analysis.QualityGuardAnalysisApp;

import org.quality.guard.analysis.domain.ConditionViolation;
import org.quality.guard.analysis.repository.ConditionViolationRepository;
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
import java.util.List;

import static org.quality.guard.analysis.web.rest.TestUtil.createFormattingConversionService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.quality.guard.analysis.domain.enumeration.GuardStatus;
/**
 * Test class for the ConditionViolationResource REST controller.
 *
 * @see ConditionViolationResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = QualityGuardAnalysisApp.class)
public class ConditionViolationResourceIntTest {

    private static final String DEFAULT_CONDITION_VALUE = "AAAAAAAAAA";
    private static final String UPDATED_CONDITION_VALUE = "BBBBBBBBBB";

    private static final GuardStatus DEFAULT_CONDITION_STATUS = GuardStatus.SUCCESS;
    private static final GuardStatus UPDATED_CONDITION_STATUS = GuardStatus.WARNING;

    @Autowired
    private ConditionViolationRepository conditionViolationRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restConditionViolationMockMvc;

    private ConditionViolation conditionViolation;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final ConditionViolationResource conditionViolationResource = new ConditionViolationResource(conditionViolationRepository);
        this.restConditionViolationMockMvc = MockMvcBuilders.standaloneSetup(conditionViolationResource)
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
    public static ConditionViolation createEntity(EntityManager em) {
        ConditionViolation conditionViolation = new ConditionViolation()
            .conditionValue(DEFAULT_CONDITION_VALUE)
            .conditionStatus(DEFAULT_CONDITION_STATUS);
        return conditionViolation;
    }

    @Before
    public void initTest() {
        conditionViolation = createEntity(em);
    }

    @Test
    @Transactional
    public void createConditionViolation() throws Exception {
        int databaseSizeBeforeCreate = conditionViolationRepository.findAll().size();

        // Create the ConditionViolation
        restConditionViolationMockMvc.perform(post("/api/condition-violations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(conditionViolation)))
            .andExpect(status().isCreated());

        // Validate the ConditionViolation in the database
        List<ConditionViolation> conditionViolationList = conditionViolationRepository.findAll();
        assertThat(conditionViolationList).hasSize(databaseSizeBeforeCreate + 1);
        ConditionViolation testConditionViolation = conditionViolationList.get(conditionViolationList.size() - 1);
        assertThat(testConditionViolation.getConditionValue()).isEqualTo(DEFAULT_CONDITION_VALUE);
        assertThat(testConditionViolation.getConditionStatus()).isEqualTo(DEFAULT_CONDITION_STATUS);
    }

    @Test
    @Transactional
    public void createConditionViolationWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = conditionViolationRepository.findAll().size();

        // Create the ConditionViolation with an existing ID
        conditionViolation.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restConditionViolationMockMvc.perform(post("/api/condition-violations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(conditionViolation)))
            .andExpect(status().isBadRequest());

        // Validate the ConditionViolation in the database
        List<ConditionViolation> conditionViolationList = conditionViolationRepository.findAll();
        assertThat(conditionViolationList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllConditionViolations() throws Exception {
        // Initialize the database
        conditionViolationRepository.saveAndFlush(conditionViolation);

        // Get all the conditionViolationList
        restConditionViolationMockMvc.perform(get("/api/condition-violations?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(conditionViolation.getId().intValue())))
            .andExpect(jsonPath("$.[*].conditionValue").value(hasItem(DEFAULT_CONDITION_VALUE.toString())))
            .andExpect(jsonPath("$.[*].conditionStatus").value(hasItem(DEFAULT_CONDITION_STATUS.toString())));
    }

    @Test
    @Transactional
    public void getConditionViolation() throws Exception {
        // Initialize the database
        conditionViolationRepository.saveAndFlush(conditionViolation);

        // Get the conditionViolation
        restConditionViolationMockMvc.perform(get("/api/condition-violations/{id}", conditionViolation.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(conditionViolation.getId().intValue()))
            .andExpect(jsonPath("$.conditionValue").value(DEFAULT_CONDITION_VALUE.toString()))
            .andExpect(jsonPath("$.conditionStatus").value(DEFAULT_CONDITION_STATUS.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingConditionViolation() throws Exception {
        // Get the conditionViolation
        restConditionViolationMockMvc.perform(get("/api/condition-violations/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateConditionViolation() throws Exception {
        // Initialize the database
        conditionViolationRepository.saveAndFlush(conditionViolation);
        int databaseSizeBeforeUpdate = conditionViolationRepository.findAll().size();

        // Update the conditionViolation
        ConditionViolation updatedConditionViolation = conditionViolationRepository.findOne(conditionViolation.getId());
        // Disconnect from session so that the updates on updatedConditionViolation are not directly saved in db
        em.detach(updatedConditionViolation);
        updatedConditionViolation
            .conditionValue(UPDATED_CONDITION_VALUE)
            .conditionStatus(UPDATED_CONDITION_STATUS);

        restConditionViolationMockMvc.perform(put("/api/condition-violations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedConditionViolation)))
            .andExpect(status().isOk());

        // Validate the ConditionViolation in the database
        List<ConditionViolation> conditionViolationList = conditionViolationRepository.findAll();
        assertThat(conditionViolationList).hasSize(databaseSizeBeforeUpdate);
        ConditionViolation testConditionViolation = conditionViolationList.get(conditionViolationList.size() - 1);
        assertThat(testConditionViolation.getConditionValue()).isEqualTo(UPDATED_CONDITION_VALUE);
        assertThat(testConditionViolation.getConditionStatus()).isEqualTo(UPDATED_CONDITION_STATUS);
    }

    @Test
    @Transactional
    public void updateNonExistingConditionViolation() throws Exception {
        int databaseSizeBeforeUpdate = conditionViolationRepository.findAll().size();

        // Create the ConditionViolation

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restConditionViolationMockMvc.perform(put("/api/condition-violations")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(conditionViolation)))
            .andExpect(status().isCreated());

        // Validate the ConditionViolation in the database
        List<ConditionViolation> conditionViolationList = conditionViolationRepository.findAll();
        assertThat(conditionViolationList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteConditionViolation() throws Exception {
        // Initialize the database
        conditionViolationRepository.saveAndFlush(conditionViolation);
        int databaseSizeBeforeDelete = conditionViolationRepository.findAll().size();

        // Get the conditionViolation
        restConditionViolationMockMvc.perform(delete("/api/condition-violations/{id}", conditionViolation.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<ConditionViolation> conditionViolationList = conditionViolationRepository.findAll();
        assertThat(conditionViolationList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ConditionViolation.class);
        ConditionViolation conditionViolation1 = new ConditionViolation();
        conditionViolation1.setId(1L);
        ConditionViolation conditionViolation2 = new ConditionViolation();
        conditionViolation2.setId(conditionViolation1.getId());
        assertThat(conditionViolation1).isEqualTo(conditionViolation2);
        conditionViolation2.setId(2L);
        assertThat(conditionViolation1).isNotEqualTo(conditionViolation2);
        conditionViolation1.setId(null);
        assertThat(conditionViolation1).isNotEqualTo(conditionViolation2);
    }
}
