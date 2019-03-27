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
