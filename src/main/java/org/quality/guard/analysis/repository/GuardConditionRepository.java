package org.quality.guard.analysis.repository;

import org.quality.guard.analysis.domain.GuardCondition;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;


/**
 * Spring Data JPA repository for the GuardCondition entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GuardConditionRepository extends JpaRepository<GuardCondition, Long> {
	@Query(value="select i from GuardCondition i where i.qualityGuard.measureProjectId in ( select j.measureProjectId from QualityGuard j where j.measureProjectId = :projectId)")
	public List<GuardCondition> getGuardConditionByQualityGuard(@Param("projectId") Long projectId);
}
