package org.quality.guard.analysis.integration.impl.data.measure;

import java.util.ArrayList;
import java.util.List;


public class MeasureUnit {
	
	private String name;
	private List<MeasureUnitField> fields = new ArrayList<>();
	
	public MeasureUnit(){

	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<MeasureUnitField> getFields() {
		return fields;
	}
	public void setFields(List<MeasureUnitField> fields) {
		this.fields = fields;
	}
}
