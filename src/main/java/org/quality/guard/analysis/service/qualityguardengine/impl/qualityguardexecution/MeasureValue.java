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
