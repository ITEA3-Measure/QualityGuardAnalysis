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
