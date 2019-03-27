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

import java.io.Serializable;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import org.hibernate.annotations.BatchSize;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.quality.guard.analysis.domain.enumeration.CombinationMode;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * A QualityGuard.
 */
@Entity
@Table(name = "quality_guard")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class QualityGuard implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "quality_guard_name")
    private String qualityGuardName;

    @Column(name = "description")
    private String description;

    @Enumerated(EnumType.STRING)
    @Column(name = "combination_mode")
    private CombinationMode combinationMode;

    @Column(name = "measure_project_id")
    private Long measureProjectId;

    @Column(name = "is_schedule")
    private Boolean isSchedule;

    @OneToOne
    @JoinColumn(name="violation_id", unique = true)
    private Violation violation;

    @OneToMany(mappedBy = "qualityGuard")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Violation> violations = new HashSet<>();

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "qualityGuard", cascade = CascadeType.ALL)
    @Cache(usage = CacheConcurrencyStrategy.NONE)
    private Set<GuardCondition> guardConditions = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQualityGuardName() {
        return qualityGuardName;
    }

    public QualityGuard qualityGuardName(String qualityGuardName) {
        this.qualityGuardName = qualityGuardName;
        return this;
    }

    public void setQualityGuardName(String qualityGuardName) {
        this.qualityGuardName = qualityGuardName;
    }

    public String getDescription() {
        return description;
    }

    public QualityGuard description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public CombinationMode getCombinationMode() {
        return combinationMode;
    }

    public QualityGuard combinationMode(CombinationMode combinationMode) {
        this.combinationMode = combinationMode;
        return this;
    }

    public void setCombinationMode(CombinationMode combinationMode) {
        this.combinationMode = combinationMode;
    }

    public Long getMeasureProjectId() {
        return measureProjectId;
    }

    public QualityGuard measureProjectId(Long measureProjectId) {
        this.measureProjectId = measureProjectId;
        return this;
    }

    public void setMeasureProjectId(Long measureProjectId) {
        this.measureProjectId = measureProjectId;
    }

    public Boolean isIsSchedule() {
        return isSchedule;
    }

    public QualityGuard isSchedule(Boolean isSchedule) {
        this.isSchedule = isSchedule;
        return this;
    }

    public void setIsSchedule(Boolean isSchedule) {
        this.isSchedule = isSchedule;
    }

    public Violation getViolation() {
        return violation;
    }

    public QualityGuard violation(Violation violation) {
        this.violation = violation;
        return this;
    }

    public void setViolation(Violation violation) {
        this.violation = violation;
    }

    public Set<Violation> getViolations() {
        return violations;
    }

    public QualityGuard violations(Set<Violation> violations) {
        this.violations = violations;
        return this;
    }

    public QualityGuard addViolation(Violation violation) {
        this.violations.add(violation);
        violation.setQualityGuard(this);
        return this;
    }

    public QualityGuard removeViolation(Violation violation) {
        this.violations.remove(violation);
        violation.setQualityGuard(null);
        return this;
    }

    public void setViolations(Set<Violation> violations) {
        this.violations = violations;
    }

    public Set<GuardCondition> getGuardConditions() {
        return guardConditions;
    }

    public QualityGuard guardConditions(Set<GuardCondition> guardConditions) {
        this.guardConditions = guardConditions;
        return this;
    }

    public QualityGuard addGuardCondition(GuardCondition guardCondition) {
        this.guardConditions.add(guardCondition);
        guardCondition.setQualityGuard(this);
        return this;
    }

    public QualityGuard removeGuardCondition(GuardCondition guardCondition) {
        this.guardConditions.remove(guardCondition);
        guardCondition.setQualityGuard(null);
        return this;
    }

    public void setGuardConditions(Set<GuardCondition> guardConditions) {
        this.guardConditions = guardConditions;
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
        QualityGuard qualityGuard = (QualityGuard) o;
        if (qualityGuard.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), qualityGuard.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "QualityGuard{" +
            "id=" + getId() +
            ", qualityGuardName='" + getQualityGuardName() + "'" +
            ", description='" + getDescription() + "'" +
            ", combinationMode='" + getCombinationMode() + "'" +
            ", measureProjectId=" + getMeasureProjectId() +
            ", isSchedule='" + isIsSchedule() + "'" +
            "}";
    }
}
