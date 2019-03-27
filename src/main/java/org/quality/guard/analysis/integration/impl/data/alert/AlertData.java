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

public class AlertData {

	private String alertType;

	private Long projectId;

	private List<AlertProperty> properties = new ArrayList<>();

	public AlertData() {
		// TODO Auto-generated constructor stub
	}

	public String getAlertType() {
		return alertType;
	}

	public void setAlertType(String alertTyype) {
		this.alertType = alertTyype;
	}

	public List<AlertProperty> getProperties() {
		return properties;
	}

	public void setProperties(List<AlertProperty> properties) {
		this.properties = properties;
	}

	public Long getProjectId() {
		return projectId;
	}

	public void setProjectId(Long projectId) {
		this.projectId = projectId;
	}

	public String getPropertieValue(String propertyName) {
		for (AlertProperty prop : properties) {
			if (prop.getProperty().equals(propertyName)) {
				return prop.getValue();
			}
		}
		return null;
	}
}
