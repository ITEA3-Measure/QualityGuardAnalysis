package org.quality.guard.analysis.integration.impl;

import java.util.ArrayList;
import java.util.List;

import org.quality.guard.analysis.integration.api.IMeasuresAccessService;
import org.quality.guard.analysis.integration.impl.data.MeasureInstance;
import org.quality.guard.analysis.integration.impl.data.MeasureInstanceType;
import org.quality.guard.analysis.integration.impl.data.measure.Measure;
import org.quality.guard.analysis.integration.impl.data.measure.MeasureUnit;
import org.quality.guard.analysis.integration.impl.data.measure.MeasureUnitField;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class MeasuresAccessService implements IMeasuresAccessService{
	
	@Value("${measure-platform.url}")
	private String serverURL;
	
	@Override
	public List<MeasureInstanceType> getPlatformeMeasures(Long projectId) {
		List<MeasureInstanceType>  result = new ArrayList<>();
		RestTemplate restTemplate = new RestTemplate();
		MeasureInstance[] instances = restTemplate.getForObject(serverURL +"api/project-measure-instances/"+projectId,MeasureInstance[].class);

		for(MeasureInstance instance : instances) {
			MeasureInstanceType iType = new MeasureInstanceType();
			iType.setId(instance.getId());
			iType.setMeasureInstance(instance.getInstanceName());
			iType.setMeasureName(instance.getMeasureName());
			
			Measure measure =  restTemplate.getForObject(serverURL +"api/measure/"+instance.getMeasureName(),Measure.class);
			if(measure != null) {
				MeasureUnit unit = measure.getUnit();
				if(unit != null) {
					for(MeasureUnitField field : unit.getFields()) {
						if(field.getFieldType().equals("u_integer") ||field.getFieldType().equals("u_double")) {
							iType.getFields().add(field.getFieldName());
						}	
					}
				}	
			}
			
			if(!iType.getFields().isEmpty()) {
				result.add(iType);
			}
		}
		
		return result;
	}

}
