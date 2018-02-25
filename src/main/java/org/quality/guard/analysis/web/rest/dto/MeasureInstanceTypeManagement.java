package org.quality.guard.analysis.web.rest.dto;

import java.util.Arrays;
import java.util.List;

public class MeasureInstanceTypeManagement {

	public static List<MeasureInstanceType> getAllMeasureInstanceType() {
		return Arrays.asList(
				new MeasureInstanceType(1L, "M1", Arrays.asList("value")),
				new MeasureInstanceType(2L, "M2", Arrays.asList("value")),
				new MeasureInstanceType(3L, "M3", Arrays.asList("value"))
//				new MeasureInstanceType(1L, "Measure 1", Arrays.asList("Measure Field 1","Measure Field 2","Measure Field 3","Measure Field 4","Measure Field 5")),
//				new MeasureInstanceType(2L, "Measure 2", Arrays.asList("Measure Field 6","Measure Field 7","Measure Field 8","Measure Field 9","Measure Field 10")),
//				new MeasureInstanceType(3L, "Measure 3", Arrays.asList("Measure Field 2","Measure Field 4","Measure Field 6","Measure Field 8","Measure Field 10")),
//				new MeasureInstanceType(4L, "Measure 4", Arrays.asList("Measure Field 1","Measure Field 3","Measure Field 5","Measure Field 7","Measure Field 9"))
		);
	}	

}
