package org.quality.guard.analysis.integration.impl;

import java.util.Locale;

import javax.inject.Inject;

import org.quality.guard.analysis.integration.impl.data.alert.AlertData;
import org.quality.guard.analysis.integration.impl.data.alert.AlertProperty;
import org.quality.guard.analysis.integration.impl.data.alert.AlertReport;
import org.quality.guard.analysis.integration.impl.data.registration.AnalysisConfiguration;
import org.quality.guard.analysis.integration.impl.data.registration.CardConfiguration;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@Configuration
@EnableScheduling
public class AlertMonitor {

	@Value("${measure-platform.url}")
	private String serverURL;

	@Value("${analysis-tool.url}")
	private String toolURL;

	@Inject
	private MessageSource message;

	private static final String ALERT_TYPE = "ANALYSIS_ENABLE";
	private static final String CONFIGURATION_URL = "/project/%s/quality-guard-configuration";
	private static final String VIEW_URL = "/project/%s/history";
	private static final String OVERVIEW_CARD_URL = "/project/%s/quality-guard-dashboard";
	private static final String VIOLATION_CARD_URL = "/project/%s/incident-history-dashboard";

	@Scheduled(fixedRate = 5000)
	public void monitorAlerts() {
		String analysisToolId = getLabel("analysis-tool.name");
		RestTemplate restTemplate = new RestTemplate();
		try {
			AlertReport alerts = restTemplate.getForObject(serverURL + "api/analysis/alert/list/?id=" + analysisToolId,AlertReport.class);

			for (AlertData alert : alerts.getAlerts()) {
				if (ALERT_TYPE.equals(alert.getAlertType())) {
					
					AnalysisConfiguration configuration = new AnalysisConfiguration();
					configuration.setConfigurationUrl(toolURL + String.format(CONFIGURATION_URL, alert.getProjectId()));

					configuration.setViewUrl(toolURL + String.format(VIEW_URL, alert.getProjectId()));
					for(AlertProperty prop : alert.getProperties()){
						if(prop.getProperty().equals("ANALYSISID")){
							configuration.setProjectAnalysisId(Long.valueOf(prop.getValue()));
						}
					}
					
					CardConfiguration cardOverview = new CardConfiguration();
					cardOverview.setCardUrl(toolURL + String.format(OVERVIEW_CARD_URL, alert.getProjectId()));
					cardOverview.setLabel(getLabel("dashboard-card-overview.label"));
					cardOverview.setPreferedWidth(400);
					cardOverview.setPreferedHeight(300);
					configuration.getCards().add(cardOverview);
					
					CardConfiguration cardIssues = new CardConfiguration();
					cardIssues.setCardUrl(toolURL + String.format(VIOLATION_CARD_URL, alert.getProjectId()));
					cardIssues.setLabel(getLabel("dashboard-card-issues.label"));
					cardIssues.setPreferedWidth(400);
					cardIssues.setPreferedHeight(300);
					configuration.getCards().add(cardIssues);
					
					
					restTemplate.put(serverURL +"/api/analysis/configure", configuration);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	private String getLabel(String messageid) {
		return message.getMessage(messageid, null, Locale.US);
	}

}
