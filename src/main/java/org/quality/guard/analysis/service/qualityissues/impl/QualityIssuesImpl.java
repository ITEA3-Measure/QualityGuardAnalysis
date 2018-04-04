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
		Query q = em.createNativeQuery("select v.incident_start_date, v.violation_status,qg.quality_guard_name, cv.measure_instance, cv.condition_value from qualityguardanalysis.violation as v left outer join qualityguardanalysis.quality_guard as qg on v.quality_guard_id = qg.id left outer join qualityguardanalysis.condition_violation as cv on v.id = cv.violation_id order by v.incident_start_date desc limit 20");
		List<Object[]> results = q.getResultList();
		List<QualityIssues> issues = new ArrayList<>();
		for(Object[] result : results) {
			issues.add(new QualityIssues((String)result[0],(String)result[1],(String)result[2],(String)result[3],(String)result[4]));
		}
		return issues;
	}
	
}