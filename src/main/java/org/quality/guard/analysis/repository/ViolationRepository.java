/*******************************************************************************
 * Copyright (C) 2019 Softeam
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
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
	
	@Query(value="select * from violation v where v.quality_guard_id = ?1 and "
			+ "( ( v.incident_start_date < ?2 and  v.incident_end_date > ?3 ) OR  "
			+ "( ?3 BETWEEN v.incident_start_date and v.incident_end_date ) OR  "
			+ "( ?2 BETWEEN v.incident_start_date and v.incident_end_date )  OR "
			+ "(v.incident_start_date < ?2 and v.incident_end_date IS NULL ))", nativeQuery = true)
	public List<Violation> getViolationsByQualityGuardIdBetweenIntervals(@Param("qualityGuardId") Long qualityGuardId, @Param("from") Date from, @Param("to") Date to);
	
	@Query(value = "select * from violation v where v.quality_guard_id = ?1 order by v.incident_start_date desc limit 20", nativeQuery = true)
	public List<Violation> getLastViolationsByQualityGuardId(@Param("qualityGuardId") Long qualityGuardId);
	
}
