package org.quality.guard.analysis.repository;

import java.util.List;

import org.quality.guard.analysis.domain.ConditionViolation;
import org.quality.guard.analysis.domain.GuardCondition;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the ConditionViolation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ConditionViolationRepository extends JpaRepository<ConditionViolation, Long> {
	@Query(value="select i from ConditionViolation i where i.violation.id in ( select j.id from Violation j where j.qualityGuard.id in ( select k.id from QualityGuard k where k.measureProjectId =:projectId ) and j.qualityGuard.id =:qualityGuardId )")
	public List<ConditionViolation> getConditionViolationByProjectIdAndQualityGuardId(@Param("projectId") Long projectId,@Param("qualityGuardId") Long qualityGuardId);
}
