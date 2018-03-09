package org.quality.guard.analysis.integration.impl.data.alert;

import java.util.ArrayList;
import java.util.List;

public class AlertSubscription {
	

	private String eventType;
	
	private Long projectId;

	private String analysisTool;
	
	private List<AlertProperty> properties = new ArrayList<>();
	
	public AlertSubscription(){
		
	}
	
	public String getEventType() {
		return eventType;
	}

	public void setEventType(String eventType) {
		this.eventType = eventType;
	}

	public Long getProjectId() {
		return this.projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public String getAnalysisTool() {
		return this.analysisTool;
	}

	public void setAnalysisTool(String analysisTool) {
		this.analysisTool = analysisTool;
	}

	public List<AlertProperty> getProperties() {
		return this.properties;
	}

	public void setProperties(List<AlertProperty> properties) {
		this.properties = properties;
	}

	public String getPropertieValue(String propertyName) {
		for(AlertProperty prop : properties){
			if(prop.getProperty().equals(propertyName)){
				return prop.getValue();
			}
		}
		return null;
	}

}
