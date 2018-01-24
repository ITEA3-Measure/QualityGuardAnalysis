package org.quality.guard.analysis.repository;

import org.quality.guard.analysis.domain.Violation;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the Violation entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ViolationRepository extends JpaRepository<Violation, Long> {

}
