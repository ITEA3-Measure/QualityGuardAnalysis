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
