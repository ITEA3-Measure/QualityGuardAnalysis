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

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import org.quality.guard.analysis.domain.enumeration.GuardStatus;

/**
 * A Violation.
 */
@Entity
@Table(name = "violation")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Violation implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "incident_start_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date incidentStartDate;

    @Column(name = "incident_end_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date incidentEndDate;

    @Enumerated(EnumType.STRING)
    @Column(name = "violation_status")
    private GuardStatus violationStatus;

    @OneToOne(fetch = FetchType.LAZY, cascade =  CascadeType.ALL, mappedBy = "violation")
    @JsonIgnore
    private QualityGuard actualQualityGuard;

	@ManyToOne
	@JsonIgnore
    private QualityGuard qualityGuard;
    
    @OneToMany(fetch = FetchType.EAGER, cascade =  CascadeType.ALL, mappedBy = "violation")
    @Cache(usage = CacheConcurrencyStrategy.NONE)
    private Set<ConditionViolation> conditionViolations = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getIncidentStartDate() {
        return incidentStartDate;
    }

    public Violation incidentStartDate(Date incidentStartDate) {
        this.incidentStartDate = incidentStartDate;
        return this;
    }

    public void setIncidentStartDate(Date incidentStartDate) {
        this.incidentStartDate = incidentStartDate;
    }

    public Date getIncidentEndDate() {
        return incidentEndDate;
    }

    public Violation incidentEndDate(Date incidentEndDate) {
        this.incidentEndDate = incidentEndDate;
        return this;
    }

    public void setIncidentEndDate(Date incidentEndDate) {
        this.incidentEndDate = incidentEndDate;
    }

    public GuardStatus getViolationStatus() {
        return violationStatus;
    }

    public Violation violationStatus(GuardStatus violationStatus) {
        this.violationStatus = violationStatus;
        return this;
    }

    public void setViolationStatus(GuardStatus violationStatus) {
        this.violationStatus = violationStatus;
    }
    
    public QualityGuard getActualQualityGuard() {
		return actualQualityGuard;
	}

	public void setActualQualityGuard(QualityGuard actualQualityGuard) {
		this.actualQualityGuard = actualQualityGuard;
	}
    
    public QualityGuard getQualityGuard() {
        return qualityGuard;
    }

    public Violation qualityGuard(QualityGuard qualityGuard) {
        this.qualityGuard = qualityGuard;
        return this;
    }

    public void setQualityGuard(QualityGuard qualityGuard) {
        this.qualityGuard = qualityGuard;
    }

    public Set<ConditionViolation> getConditionViolations() {
        return conditionViolations;
    }

    public Violation conditionViolations(Set<ConditionViolation> conditionViolations) {
        this.conditionViolations = conditionViolations;
        return this;
    }

    public Violation addConditionViolation(ConditionViolation conditionViolation) {
        this.conditionViolations.add(conditionViolation);
        conditionViolation.setViolation(this);
        return this;
    }

    public Violation removeConditionViolation(ConditionViolation conditionViolation) {
        this.conditionViolations.remove(conditionViolation);
        conditionViolation.setViolation(null);
        return this;
    }

    public void setConditionViolations(Set<ConditionViolation> conditionViolations) {
        this.conditionViolations = conditionViolations;
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
        Violation violation = (Violation) o;
        if (violation.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), violation.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Violation{" +
            "id=" + getId() +
            ", incidentStartDate='" + getIncidentStartDate() + "'" +
            ", incidentEndDate='" + getIncidentEndDate() + "'" +
            ", violationStatus='" + getViolationStatus() + "'" +
            "}";
    }
}
