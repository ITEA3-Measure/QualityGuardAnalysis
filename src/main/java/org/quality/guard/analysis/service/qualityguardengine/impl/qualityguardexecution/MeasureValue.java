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
package org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution;

import java.text.ParseException;
import java.text.SimpleDateFormat;

public class MeasureValue implements Comparable<MeasureValue> {
	
	private String postDate;
	private String value;
	private String measureInstance;
	private String measureField;
	
	public MeasureValue(String postDate, String value, String measureInstance,String measurefield) {
		this.postDate = postDate;
		this.value = value;
		this.measureInstance = measureInstance;
		this.measureField = measurefield;
	}

	public String getPostDate() {
		return postDate;
	}

	public String getValue() {
		return value;
	}

	public String getMeasureInstance() {
		return measureInstance;
	}
	

	public String getMeasurefield() {
		return measureField;
	}

	@Override
	public int compareTo(MeasureValue measureValue) {
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");   
		try {
			return dateFormat.parse(this.getPostDate()).compareTo(dateFormat.parse(measureValue.getPostDate()));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return 0;
	}
	
}
