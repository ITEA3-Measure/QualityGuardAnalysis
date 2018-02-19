package org.quality.guard.analysis.repository;

import java.util.List;

import org.quality.guard.analysis.domain.QualityGuard;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;


/**
 * Spring Data JPA repository for the QualityGuard entity.
 */
@SuppressWarnings("unused")
@Repository
public interface QualityGuardRepository extends JpaRepository<QualityGuard, Long> {
	@Query(value="select i from QualityGuard i where i.measureProjectId = :projectId")
	public List<QualityGuard> getQualityGuardsByProjectId(@Param("projectId") Long projectId);
	@Query(value="select i.measureProjectId from QualityGuard i where i.id= :qualityGuardId")
	public Long getProjectIdByQualityGuard(@Param("qualityGuardId") Long qualityGuardId);
}
