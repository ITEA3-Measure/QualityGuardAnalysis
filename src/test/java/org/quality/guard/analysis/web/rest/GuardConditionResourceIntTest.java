package org.quality.guard.analysis.web.rest;

import org.quality.guard.analysis.QualityGuardAnalysisApp;

import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.repository.GuardConditionRepository;
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

import org.quality.guard.analysis.domain.enumeration.GuardOperator;
import org.quality.guard.analysis.domain.enumeration.AnalysisAgregation;
/**
 * Test class for the GuardConditionResource REST controller.
 *
 * @see GuardConditionResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = QualityGuardAnalysisApp.class)
public class GuardConditionResourceIntTest {

    private static final String DEFAULT_MEASURE_INSTANCE = "AAAAAAAAAA";
    private static final String UPDATED_MEASURE_INSTANCE = "BBBBBBBBBB";

    private static final GuardOperator DEFAULT_OPERATOR = GuardOperator.SUPERIOR;
    private static final GuardOperator UPDATED_OPERATOR = GuardOperator.INFERIOR;

    private static final Float DEFAULT_ERROR_VALUE = 1F;
    private static final Float UPDATED_ERROR_VALUE = 2F;

    private static final Float DEFAULT_WARNING_VALUE = 1F;
    private static final Float UPDATED_WARNING_VALUE = 2F;

    private static final String DEFAULT_MEASURE_FIELD = "AAAAAAAAAA";
    private static final String UPDATED_MEASURE_FIELD = "BBBBBBBBBB";

    private static final AnalysisAgregation DEFAULT_INTERVAL_AGREGATION = AnalysisAgregation.STRICT;
    private static final AnalysisAgregation UPDATED_INTERVAL_AGREGATION = AnalysisAgregation.MOY_MIN;

    @Autowired
    private GuardConditionRepository guardConditionRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restGuardConditionMockMvc;

    private GuardCondition guardCondition;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final GuardConditionResource guardConditionResource = new GuardConditionResource(guardConditionRepository);
        this.restGuardConditionMockMvc = MockMvcBuilders.standaloneSetup(guardConditionResource)
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
    public static GuardCondition createEntity(EntityManager em) {
        GuardCondition guardCondition = new GuardCondition()
            .measureInstance(DEFAULT_MEASURE_INSTANCE)
            .operator(DEFAULT_OPERATOR)
            .errorValue(DEFAULT_ERROR_VALUE)
            .warningValue(DEFAULT_WARNING_VALUE)
            .measureField(DEFAULT_MEASURE_FIELD)
            .intervalAgregation(DEFAULT_INTERVAL_AGREGATION);
        return guardCondition;
    }

    @Before
    public void initTest() {
        guardCondition = createEntity(em);
    }

    @Test
    @Transactional
    public void createGuardCondition() throws Exception {
        int databaseSizeBeforeCreate = guardConditionRepository.findAll().size();

        // Create the GuardCondition
        restGuardConditionMockMvc.perform(post("/api/guard-conditions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(guardCondition)))
            .andExpect(status().isCreated());

        // Validate the GuardCondition in the database
        List<GuardCondition> guardConditionList = guardConditionRepository.findAll();
        assertThat(guardConditionList).hasSize(databaseSizeBeforeCreate + 1);
        GuardCondition testGuardCondition = guardConditionList.get(guardConditionList.size() - 1);
        assertThat(testGuardCondition.getMeasureInstance()).isEqualTo(DEFAULT_MEASURE_INSTANCE);
        assertThat(testGuardCondition.getOperator()).isEqualTo(DEFAULT_OPERATOR);
        assertThat(testGuardCondition.getErrorValue()).isEqualTo(DEFAULT_ERROR_VALUE);
        assertThat(testGuardCondition.getWarningValue()).isEqualTo(DEFAULT_WARNING_VALUE);
        assertThat(testGuardCondition.getMeasureField()).isEqualTo(DEFAULT_MEASURE_FIELD);
        assertThat(testGuardCondition.getIntervalAgregation()).isEqualTo(DEFAULT_INTERVAL_AGREGATION);
    }

    @Test
    @Transactional
    public void createGuardConditionWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = guardConditionRepository.findAll().size();

        // Create the GuardCondition with an existing ID
        guardCondition.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restGuardConditionMockMvc.perform(post("/api/guard-conditions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(guardCondition)))
            .andExpect(status().isBadRequest());

        // Validate the GuardCondition in the database
        List<GuardCondition> guardConditionList = guardConditionRepository.findAll();
        assertThat(guardConditionList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllGuardConditions() throws Exception {
        // Initialize the database
        guardConditionRepository.saveAndFlush(guardCondition);

        // Get all the guardConditionList
        restGuardConditionMockMvc.perform(get("/api/guard-conditions?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(guardCondition.getId().intValue())))
            .andExpect(jsonPath("$.[*].measureInstance").value(hasItem(DEFAULT_MEASURE_INSTANCE.toString())))
            .andExpect(jsonPath("$.[*].operator").value(hasItem(DEFAULT_OPERATOR.toString())))
            .andExpect(jsonPath("$.[*].errorValue").value(hasItem(DEFAULT_ERROR_VALUE)))
            .andExpect(jsonPath("$.[*].warningValue").value(hasItem(DEFAULT_WARNING_VALUE)))
            .andExpect(jsonPath("$.[*].measureField").value(hasItem(DEFAULT_MEASURE_FIELD.toString())))
            .andExpect(jsonPath("$.[*].intervalAgregation").value(hasItem(DEFAULT_INTERVAL_AGREGATION.toString())));
    }

    @Test
    @Transactional
    public void getGuardCondition() throws Exception {
        // Initialize the database
        guardConditionRepository.saveAndFlush(guardCondition);

        // Get the guardCondition
        restGuardConditionMockMvc.perform(get("/api/guard-conditions/{id}", guardCondition.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(guardCondition.getId().intValue()))
            .andExpect(jsonPath("$.measureInstance").value(DEFAULT_MEASURE_INSTANCE.toString()))
            .andExpect(jsonPath("$.operator").value(DEFAULT_OPERATOR.toString()))
            .andExpect(jsonPath("$.errorValue").value(DEFAULT_ERROR_VALUE))
            .andExpect(jsonPath("$.warningValue").value(DEFAULT_WARNING_VALUE))
            .andExpect(jsonPath("$.measureField").value(DEFAULT_MEASURE_FIELD.toString()))
            .andExpect(jsonPath("$.intervalAgregation").value(DEFAULT_INTERVAL_AGREGATION.toString()));
    }

    @Test
    @Transactional
    public void getNonExistingGuardCondition() throws Exception {
        // Get the guardCondition
        restGuardConditionMockMvc.perform(get("/api/guard-conditions/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateGuardCondition() throws Exception {
        // Initialize the database
        guardConditionRepository.saveAndFlush(guardCondition);
        int databaseSizeBeforeUpdate = guardConditionRepository.findAll().size();

        // Update the guardCondition
        GuardCondition updatedGuardCondition = guardConditionRepository.findOne(guardCondition.getId());
        // Disconnect from session so that the updates on updatedGuardCondition are not directly saved in db
        em.detach(updatedGuardCondition);
        updatedGuardCondition
            .measureInstance(UPDATED_MEASURE_INSTANCE)
            .operator(UPDATED_OPERATOR)
            .errorValue(UPDATED_ERROR_VALUE)
            .warningValue(UPDATED_WARNING_VALUE)
            .measureField(UPDATED_MEASURE_FIELD)
            .intervalAgregation(UPDATED_INTERVAL_AGREGATION);

        restGuardConditionMockMvc.perform(put("/api/guard-conditions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedGuardCondition)))
            .andExpect(status().isOk());

        // Validate the GuardCondition in the database
        List<GuardCondition> guardConditionList = guardConditionRepository.findAll();
        assertThat(guardConditionList).hasSize(databaseSizeBeforeUpdate);
        GuardCondition testGuardCondition = guardConditionList.get(guardConditionList.size() - 1);
        assertThat(testGuardCondition.getMeasureInstance()).isEqualTo(UPDATED_MEASURE_INSTANCE);
        assertThat(testGuardCondition.getOperator()).isEqualTo(UPDATED_OPERATOR);
        assertThat(testGuardCondition.getErrorValue()).isEqualTo(UPDATED_ERROR_VALUE);
        assertThat(testGuardCondition.getWarningValue()).isEqualTo(UPDATED_WARNING_VALUE);
        assertThat(testGuardCondition.getMeasureField()).isEqualTo(UPDATED_MEASURE_FIELD);
        assertThat(testGuardCondition.getIntervalAgregation()).isEqualTo(UPDATED_INTERVAL_AGREGATION);
    }

    @Test
    @Transactional
    public void updateNonExistingGuardCondition() throws Exception {
        int databaseSizeBeforeUpdate = guardConditionRepository.findAll().size();

        // Create the GuardCondition

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restGuardConditionMockMvc.perform(put("/api/guard-conditions")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(guardCondition)))
            .andExpect(status().isCreated());

        // Validate the GuardCondition in the database
        List<GuardCondition> guardConditionList = guardConditionRepository.findAll();
        assertThat(guardConditionList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteGuardCondition() throws Exception {
        // Initialize the database
        guardConditionRepository.saveAndFlush(guardCondition);
        int databaseSizeBeforeDelete = guardConditionRepository.findAll().size();

        // Get the guardCondition
        restGuardConditionMockMvc.perform(delete("/api/guard-conditions/{id}", guardCondition.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<GuardCondition> guardConditionList = guardConditionRepository.findAll();
        assertThat(guardConditionList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(GuardCondition.class);
        GuardCondition guardCondition1 = new GuardCondition();
        guardCondition1.setId(1L);
        GuardCondition guardCondition2 = new GuardCondition();
        guardCondition2.setId(guardCondition1.getId());
        assertThat(guardCondition1).isEqualTo(guardCondition2);
        guardCondition2.setId(2L);
        assertThat(guardCondition1).isNotEqualTo(guardCondition2);
        guardCondition1.setId(null);
        assertThat(guardCondition1).isNotEqualTo(guardCondition2);
    }
}
