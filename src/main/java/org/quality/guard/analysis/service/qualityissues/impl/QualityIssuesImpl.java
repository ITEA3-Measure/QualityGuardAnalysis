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
package org.quality.guard.analysis.service.qualityissues.impl;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.quality.guard.analysis.service.qualityissues.api.IQualityIssues;
import org.springframework.stereotype.Service;

@Service
public class QualityIssuesImpl implements IQualityIssues{
	
	@PersistenceContext
	EntityManager em;
	
	@Override
	public List<QualityIssues> getQualityIssues() {
		Query q = em.createNativeQuery("select v.incident_start_date, v.violation_status,qg.quality_guard_name, cv.measure_instance, cv.condition_value from violation as v left outer join quality_guard as qg on v.quality_guard_id = qg.id left outer join condition_violation as cv on v.id = cv.violation_id order by v.incident_start_date desc limit 20");
		List<Object[]> results = q.getResultList();
		List<QualityIssues> issues = new ArrayList<>();
		for(Object[] result : results) {
			issues.add(new QualityIssues((String)result[0],(String)result[1],(String)result[2],(String)result[3],(String)result[4]));
		}
		return issues;
	}
	
}
