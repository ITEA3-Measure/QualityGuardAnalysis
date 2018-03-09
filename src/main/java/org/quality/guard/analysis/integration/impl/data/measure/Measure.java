package org.quality.guard.analysis.integration.impl.data.measure;

public class Measure {
	
	private String name;
	
	
	private MeasureUnit unit;

	public Measure(){
		
	}

	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}

	public MeasureUnit getUnit() {
		return unit;
	}

	public void setUnit(MeasureUnit unit) {
		this.unit = unit;
	}
}
