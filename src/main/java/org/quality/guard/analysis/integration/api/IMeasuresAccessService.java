package org.quality.guard.analysis.integration.api;

import java.util.List;

import org.quality.guard.analysis.integration.impl.data.MeasureInstanceType;

public interface IMeasuresAccessService {

	List<MeasureInstanceType> getPlatformeMeasures(Long projectId);
}
