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
