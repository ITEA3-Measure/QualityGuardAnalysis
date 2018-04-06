package org.quality.guard.analysis.repository;

import java.sql.ResultSet;
import java.util.Date;
import java.util.List;

import org.quality.guard.analysis.domain.ConditionViolation;
import org.quality.guard.analysis.domain.Violation;
import org.quality.guard.analysis.service.qualityissues.impl.QualityIssues;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the Violation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ViolationRepository extends JpaRepository<Violation, Long> {
	@Query(value="select i from Violation i where qualityGuard.id = :qualityGuardId")
	public List<Violation> getViolationsByQualityGuardId(@Param("qualityGuardId") Long qualityGuardId);
	@Query(value="select * from violation v where v.quality_guard_id = ?1 and ( v.incident_start_date between ?2 and ?3 )", nativeQuery = true)
	public List<Violation> getViolationsByQualityGuardIdBetweenIntervals(@Param("qualityGuardId") Long qualityGuardId, @Param("from") Date from, @Param("to") Date to);
	@Query(value = "select * from violation v where v.quality_guard_id = ?1 order by v.incident_start_date desc limit 20", nativeQuery = true)
	public List<Violation> getLastViolationsByQualityGuardId(@Param("qualityGuardId") Long qualityGuardId);
	
}
