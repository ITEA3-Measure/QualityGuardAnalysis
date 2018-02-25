package org.quality.guard.analysis.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

import org.quality.guard.analysis.domain.enumeration.GuardOperator;

import org.quality.guard.analysis.domain.enumeration.AnalysisAgregation;

/**
 * A GuardCondition.
 */
@Entity
@Table(name = "guard_condition")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class GuardCondition implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "measure_instance")
    private String measureInstance;

    @Enumerated(EnumType.STRING)
    @Column(name = "operator")
    private GuardOperator operator;

    @Column(name = "error_value")
    private Integer errorValue;

    @Column(name = "warning_value")
    private Integer warningValue;

    @Column(name = "measure_field")
    private String measureField;

    @Enumerated(EnumType.STRING)
    @Column(name = "interval_agregation")
    private AnalysisAgregation intervalAgregation;

    @ManyToOne(fetch = FetchType.EAGER)
    private QualityGuard qualityGuard;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMeasureInstance() {
        return measureInstance;
    }

    public GuardCondition measureInstance(String measureInstance) {
        this.measureInstance = measureInstance;
        return this;
    }

    public void setMeasureInstance(String measureInstance) {
        this.measureInstance = measureInstance;
    }

    public GuardOperator getOperator() {
        return operator;
    }

    public GuardCondition operator(GuardOperator operator) {
        this.operator = operator;
        return this;
    }

    public void setOperator(GuardOperator operator) {
        this.operator = operator;
    }

    public Integer getErrorValue() {
        return errorValue;
    }

    public GuardCondition errorValue(Integer errorValue) {
        this.errorValue = errorValue;
        return this;
    }

    public void setErrorValue(Integer errorValue) {
        this.errorValue = errorValue;
    }

    public Integer getWarningValue() {
        return warningValue;
    }

    public GuardCondition warningValue(Integer warningValue) {
        this.warningValue = warningValue;
        return this;
    }

    public void setWarningValue(Integer warningValue) {
        this.warningValue = warningValue;
    }

    public String getMeasureField() {
        return measureField;
    }

    public GuardCondition measureField(String measureField) {
        this.measureField = measureField;
        return this;
    }

    public void setMeasureField(String measureField) {
        this.measureField = measureField;
    }

    public AnalysisAgregation getIntervalAgregation() {
        return intervalAgregation;
    }

    public GuardCondition intervalAgregation(AnalysisAgregation intervalAgregation) {
        this.intervalAgregation = intervalAgregation;
        return this;
    }

    public void setIntervalAgregation(AnalysisAgregation intervalAgregation) {
        this.intervalAgregation = intervalAgregation;
    }

    public QualityGuard getQualityGuard() {
        return qualityGuard;
    }

    public GuardCondition qualityGuard(QualityGuard qualityGuard) {
        this.qualityGuard = qualityGuard;
        return this;
    }

    public void setQualityGuard(QualityGuard qualityGuard) {
        this.qualityGuard = qualityGuard;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        GuardCondition guardCondition = (GuardCondition) o;
        if (guardCondition.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), guardCondition.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "GuardCondition{" +
            "id=" + getId() +
            ", measureInstance='" + getMeasureInstance() + "'" +
            ", operator='" + getOperator() + "'" +
            ", errorValue=" + getErrorValue() +
            ", warningValue=" + getWarningValue() +
            ", measureField='" + getMeasureField() + "'" +
            ", intervalAgregation='" + getIntervalAgregation() + "'" +
            "}";
    }
}
