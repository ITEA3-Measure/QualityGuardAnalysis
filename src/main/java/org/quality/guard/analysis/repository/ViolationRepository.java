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
	/*
	 * To review
	 */
	@Query(value="select i from Violation i where i.qualityGuard.id in ( select j.id from QualityGuard j where j.measureProjectId =:projectId ) and i.qualityGuard.id =:qualityGuardId")
	public List<Violation> getViolationByProjectIdAndQualityGuardId(@Param("projectId") Long projectId,@Param("qualityGuardId") Long qualityGuardId);
	@Query(value = "select * from violation v where v.quality_guard_id = ?1 order by v.incident_start_date desc limit 20", nativeQuery=true)
	public List<Violation> getLastViolationByQualityGuardId(@Param("qualityGuardId") Long qualityGuardId);
	@Query(value="select * from violation order by incident_start_date desc limit 20", nativeQuery = true)
	public List<Violation> getLastViolation();
}
