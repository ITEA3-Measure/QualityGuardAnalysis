/*******************************************************************************
 * Copyright (C) 2019 Softeam
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
package org.quality.guard.analysis.integration.impl;

import java.util.ArrayList;
import java.util.List;

import org.quality.guard.analysis.integration.api.IMeasuresAccessService;
import org.quality.guard.analysis.integration.impl.data.MeasureInstance;
import org.quality.guard.analysis.integration.impl.data.MeasureInstanceType;
import org.quality.guard.analysis.integration.impl.data.alert.AlertReport;
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
	
	@Value("${measure-platform.login}")
	private String login;

	@Value("${measure-platform.password}")
	private String password;

	
	@Override
	public List<MeasureInstanceType> getPlatformeMeasures(Long projectId) {
		List<MeasureInstanceType>  result = new ArrayList<>();
//		RestTemplate restTemplate = new RestTemplate();
//		MeasureInstance[] instances = restTemplate.getForObject(serverURL +"api/project-measure-instances/"+projectId,MeasureInstance[].class);
		
		
		PlatformServiceProxy proxy = new PlatformServiceProxy(serverURL,login,password);
		MeasureInstance[] instances = proxy.getMeasureInstances(projectId);


		for(MeasureInstance instance : instances) {
			MeasureInstanceType iType = new MeasureInstanceType();
			iType.setId(instance.getId());
			iType.setMeasureInstance(instance.getInstanceName());
			iType.setMeasureName(instance.getMeasureName());
			
			
			Measure measure = proxy.getMeasure(instance.getMeasureName());
			
			//Measure measure =  restTemplate.getForObject(serverURL +"api/measure/"+instance.getMeasureName(),Measure.class);
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
