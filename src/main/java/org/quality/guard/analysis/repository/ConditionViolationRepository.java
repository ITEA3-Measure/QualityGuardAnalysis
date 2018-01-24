package org.quality.guard.analysis.repository;

import org.quality.guard.analysis.domain.ConditionViolation;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the ConditionViolation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ConditionViolationRepository extends JpaRepository<ConditionViolation, Long> {

}
