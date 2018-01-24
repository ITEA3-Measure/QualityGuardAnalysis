package org.quality.guard.analysis.repository;

import org.quality.guard.analysis.domain.GuardCondition;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the GuardCondition entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GuardConditionRepository extends JpaRepository<GuardCondition, Long> {

}
