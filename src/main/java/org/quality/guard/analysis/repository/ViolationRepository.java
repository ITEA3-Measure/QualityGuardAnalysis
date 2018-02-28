package org.quality.guard.analysis.repository;

import java.util.List;

import org.quality.guard.analysis.domain.ConditionViolation;
import org.quality.guard.analysis.domain.Violation;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Violation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ViolationRepository extends JpaRepository<Violation, Long> {
	@Query(value="select i from Violation i where i.qualityGuard.id in ( select j.id from QualityGuard j where j.measureProjectId =:projectId ) and i.qualityGuard.id =:qualityGuardId")
	public List<Violation> getViolationByProjectIdAndQualityGuardId(@Param("projectId") Long projectId,@Param("qualityGuardId") Long qualityGuardId);
}
