package org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution;

 public class IndexFormat {

 	public static final String PREFIX_INDEX = "measure.";

 	public static String getMeasureInstanceIndex(String instanceName) {
		return IndexFormat.PREFIX_INDEX + instanceName.toLowerCase();
	}
}