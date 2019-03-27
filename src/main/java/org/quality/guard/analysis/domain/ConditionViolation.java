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

import org.quality.guard.analysis.domain.enumeration.GuardStatus;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * A ConditionViolation.
 */
@Entity
@Table(name = "condition_violation")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ConditionViolation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "condition_value")
    private String conditionValue;

    @Enumerated(EnumType.STRING)
    @Column(name = "condition_status")
    private GuardStatus conditionStatus;

    @Column(name = "measure_instance")
    private String measureInstance;
    
    @Column(name = "measure_field")
    private String measureField;
    
    @ManyToOne
    @JsonIgnore
    private Violation violation;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getConditionValue() {
        return conditionValue;
    }

    public ConditionViolation conditionValue(String conditionValue) {
        this.conditionValue = conditionValue;
        return this;
    }

    public void setConditionValue(String conditionValue) {
        this.conditionValue = conditionValue;
    }

    public GuardStatus getConditionStatus() {
        return conditionStatus;
    }

    public ConditionViolation conditionStatus(GuardStatus conditionStatus) {
        this.conditionStatus = conditionStatus;
        return this;
    }

    public void setConditionStatus(GuardStatus conditionStatus) {
        this.conditionStatus = conditionStatus;
    }
    
    public String getMeasureInstance() {
        return measureInstance;
    }

    public ConditionViolation measureInstance(String measureInstance) {
        this.measureInstance = measureInstance;
        return this;
    }

    public void setMeasureInstance(String measureInstance) {
        this.measureInstance = measureInstance;
    }
    
    public String getMeasureField() {
        return measureField;
    }

    public ConditionViolation measureField(String measureField) {
        this.measureField = measureField;
        return this;
    }

    public void setMeasureField(String measureField) {
        this.measureField = measureField;
    }

    public Violation getViolation() {
        return violation;
    }

    public ConditionViolation violation(Violation violation) {
        this.violation = violation;
        return this;
    }

    public void setViolation(Violation violation) {
        this.violation = violation;
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
        ConditionViolation conditionViolation = (ConditionViolation) o;
        if (conditionViolation.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), conditionViolation.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ConditionViolation{" +
            "id=" + getId() +
            ", conditionValue='" + getConditionValue() + "'" +
            ", conditionStatus='" + getConditionStatus() + "'" +
            "}";
    }
}
