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
	
	
	@Value("${measure-platform.login}")
	private String login;

	@Value("${measure-platform.password}")
	private String password;
	
	
	@Value("${analysis-tool.url}")
	private String toolURL;
	
	@Inject
	private MessageSource message;
	
	public void registerAnalysisTool() {
		PlatformServiceProxy proxy = new PlatformServiceProxy(serverURL,login,password);

		AnalysisService service = new AnalysisService();
		service.setName(message.getMessage("analysis-tool.name",null, Locale.US));
		service.setDescription(message.getMessage("analysis-tool.description",null, Locale.US));
		service.setConfigurationURL(toolURL);

		proxy.registerApplication(service);
	}

}
