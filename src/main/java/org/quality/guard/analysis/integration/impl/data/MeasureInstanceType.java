package org.quality.guard.analysis.integration.impl.data;

import java.util.ArrayList;
import java.util.List;

public class MeasureInstanceType {

	private Long id;
	private String measureInstanceName;
	private List<String> measurefield = new ArrayList<>();

	public MeasureInstanceType() {
	}

	public MeasureInstanceType(Long id, String instanceName, List<String> fields) {
		super();
		this.id = id;
		this.measureInstanceName = instanceName;
		this.measurefield = fields;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getInstanceName() {
		return measureInstanceName;
	}

	public void setInstanceName(String instanceName) {
		this.measureInstanceName = instanceName;
	}

	public List<String> getFields() {
		return measurefield;
	}

	public void setFields(List<String> fields) {
		this.measurefield = fields;
	}

}
