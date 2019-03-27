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
package org.quality.guard.analysis.integration.impl.data;

import java.util.ArrayList;
import java.util.List;

public class MeasureInstanceType {

	private Long id;
	private String measureInstance;
	private String measureName;
	private List<String> measurefield = new ArrayList<>();

	public MeasureInstanceType() {
	}

	public MeasureInstanceType(Long id, String measureInstance, List<String> fields) {
		super();
		this.id = id;
		this.measureInstance = measureInstance;
		this.measurefield = fields;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMeasureInstance() {
		return measureInstance;
	}

	public void setMeasureInstance(String measureInstance) {
		this.measureInstance = measureInstance;
	}
	
	public String getMeasureName() {
		return measureName;
	}

	public void setMeasureName(String measureName) {
		this.measureName = measureName;
	}

	public List<String> getFields() {
		return measurefield;
	}

	public void setFields(List<String> fields) {
		this.measurefield = fields;
	}

}
