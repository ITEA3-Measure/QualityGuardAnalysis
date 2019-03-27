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
package org.quality.guard.analysis.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

import org.quality.guard.analysis.domain.enumeration.GuardOperator;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    
    @Column(name = "measure_name")
    private String measureName;

    @Enumerated(EnumType.STRING)
    @Column(name = "operator")
    private GuardOperator operator;

    @Column(name = "error_value")
    private Float errorValue;

    @Column(name = "warning_value")
    private Float warningValue;

    @Column(name = "measure_field")
    private String measureField;

    @Enumerated(EnumType.STRING)
    @Column(name = "interval_agregation")
    private AnalysisAgregation intervalAgregation;

    @ManyToOne
    @JsonIgnore
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
    
    public String getMeasureName() {
        return measureName;
    }

    public GuardCondition measureName(String measureName) {
        this.measureName = measureName;
        return this;
    }

    public void setMeasureName(String measureName) {
        this.measureName = measureName;
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

    public Float getErrorValue() {
        return errorValue;
    }

    public GuardCondition errorValue(Float errorValue) {
        this.errorValue = errorValue;
        return this;
    }

    public void setErrorValue(Float errorValue) {
        this.errorValue = errorValue;
    }

    public Float getWarningValue() {
        return warningValue;
    }

    public GuardCondition warningValue(Float warningValue) {
        this.warningValue = warningValue;
        return this;
    }

    public void setWarningValue(Float warningValue) {
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
