package org.quality.guard.analysis.integration.impl;

import java.util.Locale;

import javax.inject.Inject;

import org.quality.guard.analysis.integration.impl.data.registration.AnalysisService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Component
public class QualityGuardRegistration {
	
	@Value("${measure-platform.url}")
	private String serverURL;
	
	
	@Value("${analysis-tool.url}")
	private String toolURL;
	
	@Inject
	private MessageSource message;
	
	public void registerAnalysisTool() {

		AnalysisService service = new AnalysisService();
		service.setName(message.getMessage("analysis-tool.name",null, Locale.US));
		service.setDescription(message.getMessage("analysis-tool.description",null, Locale.US));
		service.setConfigurationURL(toolURL);	
		
		RestTemplate restTemplate = new RestTemplate();	
		try {
			restTemplate.put(serverURL +"/api/analysis/register",service);
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}	
	}

}
