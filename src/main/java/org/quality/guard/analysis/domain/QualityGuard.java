package org.quality.guard.analysis.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import org.quality.guard.analysis.domain.enumeration.CombinationMode;

import org.quality.guard.analysis.domain.enumeration.GuardStatus;

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
    private Integer measureProjectId;

    @Enumerated(EnumType.STRING)
    @Column(name = "guard_status")
    private GuardStatus guardStatus;

    @OneToOne
    @JoinColumn(unique = true)
    private Violation violation;

    @OneToMany(mappedBy = "qualityGuard")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Violation> violations = new HashSet<>();

    @OneToMany(mappedBy = "qualityGuard")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
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

    public Integer getMeasureProjectId() {
        return measureProjectId;
    }

    public QualityGuard measureProjectId(Integer measureProjectId) {
        this.measureProjectId = measureProjectId;
        return this;
    }

    public void setMeasureProjectId(Integer measureProjectId) {
        this.measureProjectId = measureProjectId;
    }

    public GuardStatus getGuardStatus() {
        return guardStatus;
    }

    public QualityGuard guardStatus(GuardStatus guardStatus) {
        this.guardStatus = guardStatus;
        return this;
    }

    public void setGuardStatus(GuardStatus guardStatus) {
        this.guardStatus = guardStatus;
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
            ", guardStatus='" + getGuardStatus() + "'" +
            "}";
    }
}
