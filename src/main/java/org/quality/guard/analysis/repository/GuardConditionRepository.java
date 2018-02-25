package org.quality.guard.analysis.repository;

import java.util.List;

import org.quality.guard.analysis.domain.GuardCondition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


/**
 * Spring Data JPA repository for the GuardCondition entity.
 */
@SuppressWarnings("unused")
@Repository
public interface GuardConditionRepository extends JpaRepository<GuardCondition, Long> {
	@Query(value="select i from GuardCondition i where i.qualityGuard.measureProjectId in (select j.measureProjectId from QualityGuard j where j.measureProjectId = :projectId)")
	public List<GuardCondition> getGuardConditionByProjectId(@Param("projectId") Long projectId);
	@Query(value="select i from GuardCondition i where i.qualityGuard.measureProjectId in (select j.measureProjectId from QualityGuard j where j.measureProjectId = :projectId) and i.qualityGuard.id = :qualityGuardId")
	public List<GuardCondition> getGuardConditionByProjectIdAndQualityGuardId(@Param("projectId") Long projectId, @Param("qualityGuardId") Long qualityGuardId);

}
