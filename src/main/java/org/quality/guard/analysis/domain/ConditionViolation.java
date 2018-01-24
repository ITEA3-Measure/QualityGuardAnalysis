package org.quality.guard.analysis.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

import org.quality.guard.analysis.domain.enumeration.GuardStatus;

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

    @ManyToOne
    private Violation violation;

    @OneToOne
    @JoinColumn(unique = true)
    private GuardCondition guardCondition;

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

    public GuardCondition getGuardCondition() {
        return guardCondition;
    }

    public ConditionViolation guardCondition(GuardCondition guardCondition) {
        this.guardCondition = guardCondition;
        return this;
    }

    public void setGuardCondition(GuardCondition guardCondition) {
        this.guardCondition = guardCondition;
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
