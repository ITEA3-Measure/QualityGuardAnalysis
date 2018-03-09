package org.quality.guard.analysis.integration.impl.data.registration;

import java.util.ArrayList;
import java.util.List;

public class AnalysisConfiguration {
	private Long projectAnalysisId;
	private String viewUrl;
	private String configurationUrl;
	private List<CardConfiguration> cards = new ArrayList<>();

	public AnalysisConfiguration() {

	}

	public Long getProjectAnalysisId() {
		return this.projectAnalysisId;
	}

	public void setProjectAnalysisId(Long projectAnalysisId) {
		this.projectAnalysisId = projectAnalysisId;
	}

	public String getViewUrl() {
		return this.viewUrl;
	}

	public void setViewUrl(String viewUrl) {
		this.viewUrl = viewUrl;
	}

	public String getConfigurationUrl() {
		return this.configurationUrl;
	}

	public void setConfigurationUrl(String configurationUrl) {
		this.configurationUrl = configurationUrl;
	}

	public List<CardConfiguration> getCards() {
		return this.cards;
	}

	public void setCards(List<CardConfiguration> cards) {
		this.cards = cards;
	}
}
