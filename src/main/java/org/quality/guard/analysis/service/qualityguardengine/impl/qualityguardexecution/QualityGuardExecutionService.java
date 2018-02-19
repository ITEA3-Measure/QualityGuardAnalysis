package org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import javax.inject.Inject;

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
import org.quality.guard.analysis.core.api.entities.IQualityGuardService;
import org.quality.guard.analysis.domain.GuardCondition;
import org.quality.guard.analysis.domain.QualityGuard;
import org.quality.guard.analysis.service.qualityguardengine.api.IQualityGuardExecutionService;
import org.springframework.stereotype.Service;

@Service
public class QualityGuardExecutionService implements IQualityGuardExecutionService{

	@Inject
	IQualityGuardService qualityGuardService;
	
	@Override
	public void executeQualityGuard(QualityGuard qualityGuard) {
		System.out.println(qualityGuard.getQualityGuardName());
	}
	
	public TransportClient getConnection() throws UnknownHostException {
		Settings settings = Settings.builder() .put("cluster.name", "elasticsearch").build();
		TransportClient client = new PreBuiltTransportClient(settings).addTransportAddress(new InetSocketTransportAddress(InetAddress.getByName("127.0.0.1"), 9300));
		return client;
	}
	
	public List<Map> getMeasureValue(String index, String type, String analysisAgregation) throws UnknownHostException {
		List<Map> measureValues = new ArrayList<>();
		TransportClient client = this.getConnection();
		SearchResponse response = client.prepareSearch(index)
		        .setTypes(type)
		        .setSearchType(SearchType.QUERY_AND_FETCH)
		        .addSort(FieldSortBuilder.DOC_FIELD_NAME, SortOrder.ASC)
		        .setScroll(new TimeValue(60000))
		        .setQuery(QueryBuilders.rangeQuery("postDate")
		        .from(new Date().getTime() - this.getTimeAgo(analysisAgregation)).to(new Date().getTime()))
		        .setSize(100)
		        .get();
		do {
		    for (SearchHit hit : response.getHits().getHits()) {
		    	Map map = hit.getSource();
				measureValues.add(map);
		    }
		    response = client.prepareSearchScroll(response.getScrollId()).setScroll(new TimeValue(60000)).execute().actionGet();
		} while(response.getHits().getHits().length != 0);
		
		return measureValues;
	}
	
	public Long getTimeAgo(String analysisAgregation) {
		Long timeAgo;
		switch (analysisAgregation) {
		case "STRICT":
			timeAgo = TimeUnit.MINUTES.toMillis(1);
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
	
	public List<GuardCondition> getRelatedGuardConditions(Long qualityGuardId) {
		List<GuardCondition> rule = new ArrayList<>();
		return rule;
	}

}
