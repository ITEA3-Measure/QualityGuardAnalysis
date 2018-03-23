package org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution;

public class MeasureValue implements Comparable<MeasureValue> {
	
	private String postDate;
	private String value;
	private String measureInstance;
	
	public MeasureValue(String postDate, String value, String measureInstance) {
		super();
		this.postDate = postDate;
		this.value = value;
		this.measureInstance = measureInstance;
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

	@Override
	public int compareTo(MeasureValue measureValue) {
		return Integer.valueOf(this.postDate) - Integer.valueOf(measureValue.postDate);
	}
	
}
