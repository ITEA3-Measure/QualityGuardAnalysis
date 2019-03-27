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

import org.quality.guard.analysis.integration.impl.data.MeasureInstance;
import org.quality.guard.analysis.integration.impl.data.alert.AlertReport;
import org.quality.guard.analysis.integration.impl.data.measure.Measure;
import org.quality.guard.analysis.integration.impl.data.registration.AnalysisConfiguration;
import org.quality.guard.analysis.integration.impl.data.registration.AnalysisService;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

public class PlatformServiceProxy {

	private String login;
	private String password;
	private String platformURL;

	public PlatformServiceProxy(String platformURL,String login,String password) {
		this.login = login;
		this.password = password;
		this.platformURL = platformURL;
	}

	
	public AlertReport getAlertReport(String analysisToolId) {
		String cookie = authenticate();
		
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		httpHeaders.add("Cookie", cookie);
		HttpEntity<?> httpEntity = new HttpEntity<Object>(null, httpHeaders);
		try {
			return restTemplate.exchange(platformURL + "/api/analysis/alert/list/?id="+ analysisToolId, HttpMethod.GET, httpEntity,AlertReport.class).getBody();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	

	public void configureAnalysisTool(AnalysisConfiguration configuration) {
		String cookie = authenticate();
			
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		httpHeaders.add("Cookie", cookie);
		HttpEntity<?> httpEntity = new HttpEntity<Object>(configuration, httpHeaders);
		try {
			 restTemplate.exchange(platformURL + "/api/analysis/configure", HttpMethod.PUT, httpEntity,Object.class);
		} catch (Exception e) {
			e.printStackTrace();
		}	
	}

	public void registerApplication(AnalysisService service) {
		String cookie = authenticate();

		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		httpHeaders.add("Cookie", cookie);
		HttpEntity<?> httpEntity = new HttpEntity<Object>(service, httpHeaders);
		try {
			restTemplate.exchange(platformURL + "/api/analysis/register", HttpMethod.PUT, httpEntity,Object.class);
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}
	}

	private String authenticate() {
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		MultiValueMap<String, String> body = new LinkedMultiValueMap<String, String>();
		body.add("j_username", login);
		body.add("j_password", password);

		HttpEntity<?> httpEntity = new HttpEntity<Object>(body, httpHeaders);
		ResponseEntity<Object> response = restTemplate.exchange(platformURL + "/api/authentication", HttpMethod.POST,
				httpEntity, Object.class);
		return response.getHeaders().get("Set-Cookie").get(0);
	}


	public MeasureInstance[] getMeasureInstances(Long projectId) {
		
		String cookie = authenticate();
		
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		httpHeaders.add("Cookie", cookie);
		HttpEntity<?> httpEntity = new HttpEntity<Object>(null, httpHeaders);
		try {
			return restTemplate.exchange(platformURL + "/api/project-measure-instances/"+projectId, HttpMethod.GET, httpEntity,MeasureInstance[].class).getBody();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}


	public Measure getMeasure(String measureName) {

		String cookie = authenticate();
		
		RestTemplate restTemplate = new RestTemplate();
		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setContentType(MediaType.APPLICATION_JSON);
		httpHeaders.add("Cookie", cookie);
		HttpEntity<?> httpEntity = new HttpEntity<Object>(null, httpHeaders);
		try {
			return restTemplate.exchange(platformURL + "/api/measure/"+measureName, HttpMethod.GET, httpEntity,Measure.class).getBody();
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}



}
