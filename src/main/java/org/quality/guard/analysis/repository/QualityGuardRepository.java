package org.quality.guard.analysis.repository;

import org.quality.guard.analysis.domain.QualityGuard;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the QualityGuard entity.
 */
@SuppressWarnings("unused")
@Repository
public interface QualityGuardRepository extends JpaRepository<QualityGuard, Long> {

}
