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

import org.quality.guard.analysis.domain.QualityGuard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


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
