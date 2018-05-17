package org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import javax.inject.Inject;

import org.decimal4j.util.DoubleRounder;
import org.elasticsearch.action.search.SearchResponse;
import org.elasticsearch.action.search.SearchType;
import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.InetSocketTransportAddress;
import org.elasticsearch.common.unit.TimeValue;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.search.SearchHit;
import org.elasticsearch.search.sort.FieldSortBuilder;
import org.elasticsearch.search.sort.SortOrder;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.quality.guard.analysis.core.api.entities.IConditionViolationService;
import org.quality.guard.analysis.core.api.entities.IQualityGuardService;
import org.quality.guard.analysis.core.api.entities.IViolationService;
import org.quality.guard.analysis.domain.ConditionViolation;
import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.domain.Violation;
import org.quality.guard.analysis.domain.enumeration.AnalysisAgregation;
import org.quality.guard.analysis.domain.enumeration.CombinationMode;
import org.quality.guard.analysis.domain.enumeration.GuardStatus;
import org.quality.guard.analysis.service.qualityguardengine.api.IQualityGuardExecutionService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class QualityGuardExecutionService implements IQualityGuardExecutionService{

	private final static Long strictTime= new Long(60000);
	
	@Value("${analysis-tool.elasticsearch.url}")
	private String elasticsearchUrl;
	
	@Value("${analysis-tool.elasticsearch.port}")
	private Integer elasticsearchPort;
	
	@Value("${analysis-tool.elasticsearch.cluster-key}")
	private String elasticsearchClusterKey;
	
	@Value("${analysis-tool.elasticsearch.cluster-name}")
	private String elasticsearchClusterName;
	
	@Inject
	private IQualityGuardService qualityGuardService;
	
	@Inject
	private IViolationService violationService;
	
	@Inject
	private IConditionViolationService conditionViolationService;
	
	@Override
	public void executeQualityGuard(QualityGuard qualityGuard) throws UnknownHostException {
		
		if (qualityGuardService.findOne(qualityGuard.getId()) != null) {
			System.out.println("Execution : " + qualityGuard.getQualityGuardName());
			
			if (isGuardConditionsWithStrictTime(qualityGuard.getGuardConditions())) {
				evaluateQualityGuardWithStrictTime(qualityGuard);
			} else {
				List<EvaluatedGuardCondition>  conditions = evaluateQualityGuardWithOutStrictTime(qualityGuard.getGuardConditions());
				GuardStatus newStatus = evaluateQualityGuard(qualityGuard, conditions);
				manageViolations(qualityGuard, newStatus, conditions);
			
			}
		}

	}
	
	public boolean isGuardConditionsWithStrictTime(Set<GuardCondition> guardConditions) {
		for (GuardCondition guardCondition : guardConditions) {
			if (guardCondition.getIntervalAgregation().equals(AnalysisAgregation.STRICT)) {
				return true;
			}
		}
		return false;
	}
	
	public List<EvaluatedGuardCondition> evaluateQualityGuardWithOutStrictTime(Set<GuardCondition> guardConditions) throws UnknownHostException {
		List<EvaluatedGuardCondition> conditions = new ArrayList<>();
		for(GuardCondition guardCondition : guardConditions) {
			List<MeasureValue> values = getMeasureValues(guardCondition.getMeasureName(), guardCondition.getMeasureInstance(), guardCondition.getMeasureField(), guardCondition.getIntervalAgregation().name());
			double average = calculateAverage(values);
			conditions.add(new EvaluatedGuardCondition(guardCondition, average));
		}
		return conditions;
	}
	
	public void evaluateQualityGuardWithStrictTime(QualityGuard qualityGuard)throws UnknownHostException {
		List<MeasureValue> values = new ArrayList<>();
		for(GuardCondition guardCondition : qualityGuard.getGuardConditions()) {
			values.addAll(getMeasureValues(guardCondition.getMeasureName(), guardCondition.getMeasureInstance(), guardCondition.getMeasureField(), guardCondition.getIntervalAgregation().name()));
		}
		Collections.sort(values);
		
		Map<String,String> conditionValues = new HashMap<>();
		for(MeasureValue mValue : values) {
			conditionValues.put(mValue.getMeasureInstance() +":" + mValue.getMeasurefield(), mValue.getValue());
			
			List<EvaluatedGuardCondition> evaluatedCondition = new ArrayList<>();
			
			for(GuardCondition guardCondition : qualityGuard.getGuardConditions()) {
				String conditionValue = conditionValues.get(guardCondition.getMeasureInstance() +":" +guardCondition.getMeasureField());		
				if(conditionValue != null) {
					evaluatedCondition.add(new EvaluatedGuardCondition(guardCondition, Double.valueOf(conditionValue)));	
				}
			}
			
			if(evaluatedCondition.size() == qualityGuard.getGuardConditions().size()) {
				GuardStatus newStatus = evaluateQualityGuard(qualityGuard, evaluatedCondition);
				manageViolations(qualityGuard, newStatus, evaluatedCondition);
			}
		}
		
	}
	
	@Override
	public GuardStatus evaluateQualityGuard(QualityGuard qualityGuard, List<EvaluatedGuardCondition> conditions) {
		if(conditions.size() == 1) {
			return conditions.get(0).getGuardStatus();
		}
		if(qualityGuard.getCombinationMode().equals(CombinationMode.AND)) {
			GuardStatus result = GuardStatus.SUCCESS;
			for(EvaluatedGuardCondition condition : conditions ) {
				if(condition.getGuardStatus().equals(GuardStatus.WARNING)) {
					result = condition.getGuardStatus();
				}else if(condition.getGuardStatus().equals(GuardStatus.ERROR)) {
					return GuardStatus.ERROR;
				}
			}
			return result;
		}else {
			GuardStatus result = GuardStatus.ERROR;
			for(EvaluatedGuardCondition condition : conditions ) {
				if(condition.getGuardStatus().equals(GuardStatus.WARNING)) {
					result = GuardStatus.WARNING;
				}else if(condition.getGuardStatus().equals(GuardStatus.SUCCESS)) {
					return GuardStatus.SUCCESS;
				}
			}
			return result;
		}		
	}

	public double calculateAverage(List<MeasureValue> values) {
		double som = 0;
		double average = 0;
		for (MeasureValue value : values) {
			som += Double.valueOf(value.getValue());
		}
		if (values.size() != 0) {
			average = DoubleRounder.round(som / values.size(),2);
			return  average;
		}
		return 0;
	}
	
	@Override
	public void manageViolations(QualityGuard qualityGuard, GuardStatus newStatus, List<EvaluatedGuardCondition> conditions) {
		GuardStatus currentState  = null;
		Violation currentViolation = qualityGuard.getViolation();
		if(currentViolation == null) {
			currentState = GuardStatus.SUCCESS;
		}else {
			currentState = currentViolation.getViolationStatus();
		}
		
		System.out.println("Old Status : " +currentState + "  New Status :" + newStatus);
		
		if(!newStatus.equals(currentState)) {
			if (currentState.equals(GuardStatus.SUCCESS)) {
				openViolationIssue(qualityGuard, newStatus, conditions);
			} else if (newStatus.equals(GuardStatus.SUCCESS)) {
				closeViolationIssue(qualityGuard);
			}
			else {	
				closeViolationIssue(qualityGuard);
				openViolationIssue(qualityGuard, newStatus, conditions);
			} 
		}
		
	}
	
	@Override
	public Violation openViolationIssue(QualityGuard qualityGuard, GuardStatus newStatus, List<EvaluatedGuardCondition> conditions) {
		Violation violation = violationService.save(getViolationObject(new Date(), null, newStatus, qualityGuard));
		if(violation != null) {
			qualityGuard.setViolation(violation);
			qualityGuardService.update(qualityGuard);
			for (EvaluatedGuardCondition evaluatedGuardCondition : conditions) {
				conditionViolationService.save(this.getConditionViolation(String.valueOf(evaluatedGuardCondition.getValue()), newStatus, violation, evaluatedGuardCondition.getGuardCondition().getMeasureInstance(), evaluatedGuardCondition.getGuardCondition().getMeasureField()));
			}
		}
		
		System.out.println("Open Violation : " + qualityGuard.getQualityGuardName());

		return violation;
	}
	
	@Override
	public void closeViolationIssue(QualityGuard qualityGuard) {
		Violation currentViolation = qualityGuard.getViolation();
		if (currentViolation != null) {
			currentViolation.setIncidentEndDate(new Date());
			violationService.update(currentViolation);
		}
		qualityGuard.setViolation(null);
		qualityGuardService.update(qualityGuard);
		System.out.println("Close Violation : " + qualityGuard.getQualityGuardName());
	}
	
	public Violation getViolationObject(Date incidentStartDate, Date incidentEndDate, GuardStatus violationStatus, QualityGuard qualityGuard) {
		Violation violation = new Violation();
		violation.setIncidentStartDate(incidentStartDate);
		violation.setIncidentEndDate(incidentEndDate);
		violation.setViolationStatus(violationStatus);
		violation.setQualityGuard(qualityGuard);
		return violation;
	}
	
	public ConditionViolation getConditionViolation(String conditionValue, GuardStatus guardStatus, Violation violation, String measureInstance, String measureField) {
		ConditionViolation conditionViolation = new ConditionViolation();
		conditionViolation.setConditionValue(conditionValue);
		conditionViolation.setConditionStatus(guardStatus);
		conditionViolation.setViolation(violation);
		conditionViolation.setMeasureInstance(measureInstance);
		conditionViolation.setMeasureField(measureField);
		return conditionViolation;		
	}
	
	/*
	 * ElasticSearch connection
	 */
	public TransportClient getConnection() throws UnknownHostException {
		Settings settings = Settings.builder() .put(elasticsearchClusterKey, elasticsearchClusterName).build();
		TransportClient client = new PreBuiltTransportClient(settings).addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName(elasticsearchUrl), elasticsearchPort));
		return client;
	}
	
	public List<MeasureValue> getMeasureValues(String index, String type, String field, String intervalAgregation) throws UnknownHostException {
		List<MeasureValue> measureValues = new ArrayList<>();
		TransportClient client = getConnection();
		index += "-alias";
		SearchResponse response = client.prepareSearch(index)
		        .setTypes(type)
		        .setSearchType(SearchType.QUERY_AND_FETCH)
		        .addSort(FieldSortBuilder.DOC_FIELD_NAME, SortOrder.ASC)
		        .setScroll(new TimeValue(60000))
		        .setFetchSource(new String[]{field,"postDate"}, null)
		        .setQuery(QueryBuilders.rangeQuery("postDate")
		        .from(new Date().getTime() - getTimeAgo(intervalAgregation)).to(new Date().getTime()))
		        .setSize(100)
		        .get();
		
		do {
		    for (SearchHit hit : response.getHits().getHits()) {
		    	Map map = hit.getSource();
		    	measureValues.add(new MeasureValue(String.valueOf(map.get("postDate")), String.valueOf(map.get(field)), type,field));
		    }
		    response = client.prepareSearchScroll(response.getScrollId()).setScroll(new TimeValue(60000)).execute().actionGet();
		} while(response.getHits().getHits().length != 0);
		
		return measureValues;
	}
	
	public Long getTimeAgo(String intervalAgregation) {
		Long timeAgo;
		switch (intervalAgregation) {
		case "STRICT":
			timeAgo = strictTime;
			break;
		case "MOY_MIN":
			timeAgo = TimeUnit.MINUTES.toMillis(1);
			break;
		case "MOY_HH":
			timeAgo = TimeUnit.HOURS.toMillis(1);
			break;
		case "MOY_DD":
			timeAgo = TimeUnit.DAYS.toMillis(1);
			break;
		case "MOY_WW":
			timeAgo = TimeUnit.DAYS.toMillis(7);
			break;
		case "MOY_MM":
			timeAgo = TimeUnit.DAYS.toMillis(30);
			break;
		default:
			timeAgo = 0L;
			break;
		}
		return timeAgo;
	}
	
}
