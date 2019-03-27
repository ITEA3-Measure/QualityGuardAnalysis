package org.quality.guard.analysis.web.rest;

import org.quality.guard.analysis.QualityGuardAnalysisApp;

import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.repository.QualityGuardRepository;
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

import org.quality.guard.analysis.domain.enumeration.CombinationMode;
/**
 * Test class for the QualityGuardResource REST controller.
 *
 * @see QualityGuardResource
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = QualityGuardAnalysisApp.class)
public class QualityGuardResourceIntTest {

    private static final String DEFAULT_QUALITY_GUARD_NAME = "AAAAAAAAAA";
    private static final String UPDATED_QUALITY_GUARD_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_DESCRIPTION = "AAAAAAAAAA";
    private static final String UPDATED_DESCRIPTION = "BBBBBBBBBB";

    private static final CombinationMode DEFAULT_COMBINATION_MODE = CombinationMode.OR;
    private static final CombinationMode UPDATED_COMBINATION_MODE = CombinationMode.AND;

    private static final Long DEFAULT_MEASURE_PROJECT_ID = 1L;
    private static final Long UPDATED_MEASURE_PROJECT_ID = 2L;

    private static final Boolean DEFAULT_IS_SCHEDULE = false;
    private static final Boolean UPDATED_IS_SCHEDULE = true;

    @Autowired
    private QualityGuardRepository qualityGuardRepository;

    @Autowired
    private MappingJackson2HttpMessageConverter jacksonMessageConverter;

    @Autowired
    private PageableHandlerMethodArgumentResolver pageableArgumentResolver;

    @Autowired
    private ExceptionTranslator exceptionTranslator;

    @Autowired
    private EntityManager em;

    private MockMvc restQualityGuardMockMvc;

    private QualityGuard qualityGuard;

    @Before
    public void setup() {
        MockitoAnnotations.initMocks(this);
        final QualityGuardResource qualityGuardResource = new QualityGuardResource(qualityGuardRepository);
        this.restQualityGuardMockMvc = MockMvcBuilders.standaloneSetup(qualityGuardResource)
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
    public static QualityGuard createEntity(EntityManager em) {
        QualityGuard qualityGuard = new QualityGuard()
            .qualityGuardName(DEFAULT_QUALITY_GUARD_NAME)
            .description(DEFAULT_DESCRIPTION)
            .combinationMode(DEFAULT_COMBINATION_MODE)
            .measureProjectId(DEFAULT_MEASURE_PROJECT_ID)
            .isSchedule(DEFAULT_IS_SCHEDULE);
        return qualityGuard;
    }

    @Before
    public void initTest() {
        qualityGuard = createEntity(em);
    }

    @Test
    @Transactional
    public void createQualityGuard() throws Exception {
        int databaseSizeBeforeCreate = qualityGuardRepository.findAll().size();

        // Create the QualityGuard
        restQualityGuardMockMvc.perform(post("/api/quality-guards")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(qualityGuard)))
            .andExpect(status().isCreated());

        // Validate the QualityGuard in the database
        List<QualityGuard> qualityGuardList = qualityGuardRepository.findAll();
        assertThat(qualityGuardList).hasSize(databaseSizeBeforeCreate + 1);
        QualityGuard testQualityGuard = qualityGuardList.get(qualityGuardList.size() - 1);
        assertThat(testQualityGuard.getQualityGuardName()).isEqualTo(DEFAULT_QUALITY_GUARD_NAME);
        assertThat(testQualityGuard.getDescription()).isEqualTo(DEFAULT_DESCRIPTION);
        assertThat(testQualityGuard.getCombinationMode()).isEqualTo(DEFAULT_COMBINATION_MODE);
        assertThat(testQualityGuard.getMeasureProjectId()).isEqualTo(DEFAULT_MEASURE_PROJECT_ID);
        assertThat(testQualityGuard.isIsSchedule()).isEqualTo(DEFAULT_IS_SCHEDULE);
    }

    @Test
    @Transactional
    public void createQualityGuardWithExistingId() throws Exception {
        int databaseSizeBeforeCreate = qualityGuardRepository.findAll().size();

        // Create the QualityGuard with an existing ID
        qualityGuard.setId(1L);

        // An entity with an existing ID cannot be created, so this API call must fail
        restQualityGuardMockMvc.perform(post("/api/quality-guards")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(qualityGuard)))
            .andExpect(status().isBadRequest());

        // Validate the QualityGuard in the database
        List<QualityGuard> qualityGuardList = qualityGuardRepository.findAll();
        assertThat(qualityGuardList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    @Transactional
    public void getAllQualityGuards() throws Exception {
        // Initialize the database
        qualityGuardRepository.saveAndFlush(qualityGuard);

        // Get all the qualityGuardList
        restQualityGuardMockMvc.perform(get("/api/quality-guards?sort=id,desc"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.[*].id").value(hasItem(qualityGuard.getId().intValue())))
            .andExpect(jsonPath("$.[*].qualityGuardName").value(hasItem(DEFAULT_QUALITY_GUARD_NAME.toString())))
            .andExpect(jsonPath("$.[*].description").value(hasItem(DEFAULT_DESCRIPTION.toString())))
            .andExpect(jsonPath("$.[*].combinationMode").value(hasItem(DEFAULT_COMBINATION_MODE.toString())))
            .andExpect(jsonPath("$.[*].measureProjectId").value(hasItem(DEFAULT_MEASURE_PROJECT_ID)))
            .andExpect(jsonPath("$.[*].isSchedule").value(hasItem(DEFAULT_IS_SCHEDULE.booleanValue())));
    }

    @Test
    @Transactional
    public void getQualityGuard() throws Exception {
        // Initialize the database
        qualityGuardRepository.saveAndFlush(qualityGuard);

        // Get the qualityGuard
        restQualityGuardMockMvc.perform(get("/api/quality-guards/{id}", qualityGuard.getId()))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON_UTF8_VALUE))
            .andExpect(jsonPath("$.id").value(qualityGuard.getId().intValue()))
            .andExpect(jsonPath("$.qualityGuardName").value(DEFAULT_QUALITY_GUARD_NAME.toString()))
            .andExpect(jsonPath("$.description").value(DEFAULT_DESCRIPTION.toString()))
            .andExpect(jsonPath("$.combinationMode").value(DEFAULT_COMBINATION_MODE.toString()))
            .andExpect(jsonPath("$.measureProjectId").value(DEFAULT_MEASURE_PROJECT_ID))
            .andExpect(jsonPath("$.isSchedule").value(DEFAULT_IS_SCHEDULE.booleanValue()));
    }

    @Test
    @Transactional
    public void getNonExistingQualityGuard() throws Exception {
        // Get the qualityGuard
        restQualityGuardMockMvc.perform(get("/api/quality-guards/{id}", Long.MAX_VALUE))
            .andExpect(status().isNotFound());
    }

    @Test
    @Transactional
    public void updateQualityGuard() throws Exception {
        // Initialize the database
        qualityGuardRepository.saveAndFlush(qualityGuard);
        int databaseSizeBeforeUpdate = qualityGuardRepository.findAll().size();

        // Update the qualityGuard
        QualityGuard updatedQualityGuard = qualityGuardRepository.findOne(qualityGuard.getId());
        // Disconnect from session so that the updates on updatedQualityGuard are not directly saved in db
        em.detach(updatedQualityGuard);
        updatedQualityGuard
            .qualityGuardName(UPDATED_QUALITY_GUARD_NAME)
            .description(UPDATED_DESCRIPTION)
            .combinationMode(UPDATED_COMBINATION_MODE)
            .measureProjectId(UPDATED_MEASURE_PROJECT_ID)
            .isSchedule(UPDATED_IS_SCHEDULE);

        restQualityGuardMockMvc.perform(put("/api/quality-guards")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(updatedQualityGuard)))
            .andExpect(status().isOk());

        // Validate the QualityGuard in the database
        List<QualityGuard> qualityGuardList = qualityGuardRepository.findAll();
        assertThat(qualityGuardList).hasSize(databaseSizeBeforeUpdate);
        QualityGuard testQualityGuard = qualityGuardList.get(qualityGuardList.size() - 1);
        assertThat(testQualityGuard.getQualityGuardName()).isEqualTo(UPDATED_QUALITY_GUARD_NAME);
        assertThat(testQualityGuard.getDescription()).isEqualTo(UPDATED_DESCRIPTION);
        assertThat(testQualityGuard.getCombinationMode()).isEqualTo(UPDATED_COMBINATION_MODE);
        assertThat(testQualityGuard.getMeasureProjectId()).isEqualTo(UPDATED_MEASURE_PROJECT_ID);
        assertThat(testQualityGuard.isIsSchedule()).isEqualTo(UPDATED_IS_SCHEDULE);
    }

    @Test
    @Transactional
    public void updateNonExistingQualityGuard() throws Exception {
        int databaseSizeBeforeUpdate = qualityGuardRepository.findAll().size();

        // Create the QualityGuard

        // If the entity doesn't have an ID, it will be created instead of just being updated
        restQualityGuardMockMvc.perform(put("/api/quality-guards")
            .contentType(TestUtil.APPLICATION_JSON_UTF8)
            .content(TestUtil.convertObjectToJsonBytes(qualityGuard)))
            .andExpect(status().isCreated());

        // Validate the QualityGuard in the database
        List<QualityGuard> qualityGuardList = qualityGuardRepository.findAll();
        assertThat(qualityGuardList).hasSize(databaseSizeBeforeUpdate + 1);
    }

    @Test
    @Transactional
    public void deleteQualityGuard() throws Exception {
        // Initialize the database
        qualityGuardRepository.saveAndFlush(qualityGuard);
        int databaseSizeBeforeDelete = qualityGuardRepository.findAll().size();

        // Get the qualityGuard
        restQualityGuardMockMvc.perform(delete("/api/quality-guards/{id}", qualityGuard.getId())
            .accept(TestUtil.APPLICATION_JSON_UTF8))
            .andExpect(status().isOk());

        // Validate the database is empty
        List<QualityGuard> qualityGuardList = qualityGuardRepository.findAll();
        assertThat(qualityGuardList).hasSize(databaseSizeBeforeDelete - 1);
    }

    @Test
    @Transactional
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(QualityGuard.class);
        QualityGuard qualityGuard1 = new QualityGuard();
        qualityGuard1.setId(1L);
        QualityGuard qualityGuard2 = new QualityGuard();
        qualityGuard2.setId(qualityGuard1.getId());
        assertThat(qualityGuard1).isEqualTo(qualityGuard2);
        qualityGuard2.setId(2L);
        assertThat(qualityGuard1).isNotEqualTo(qualityGuard2);
        qualityGuard1.setId(null);
        assertThat(qualityGuard1).isNotEqualTo(qualityGuard2);
    }
}
