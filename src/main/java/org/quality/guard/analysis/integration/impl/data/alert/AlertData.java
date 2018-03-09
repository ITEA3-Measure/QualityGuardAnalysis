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
