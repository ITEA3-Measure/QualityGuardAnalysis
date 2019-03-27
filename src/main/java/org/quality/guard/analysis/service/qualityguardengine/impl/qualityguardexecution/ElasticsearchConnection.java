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
package org.quality.guard.analysis.service.qualityguardengine.impl.qualityguardexecution;

import java.net.InetAddress;
import java.net.UnknownHostException;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

import org.elasticsearch.client.transport.TransportClient;
import org.elasticsearch.common.settings.Settings;
import org.elasticsearch.common.transport.TransportAddress;
import org.elasticsearch.transport.client.PreBuiltTransportClient;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ElasticsearchConnection {

	private TransportClient client;
	
	@Value("${analysis-tool.elasticsearch.url}")
	private String elasticsearchUrl;
	
	@Value("${analysis-tool.elasticsearch.port}")
	private Integer elasticsearchPort;
	
	@Value("${analysis-tool.elasticsearch.cluster-key}")
	private String elasticsearchClusterKey;
	
	@Value("${analysis-tool.elasticsearch.cluster-name}")
	private String elasticsearchClusterName;
	
	@PostConstruct
	public void initIt() throws UnknownHostException {
		Settings settings = Settings.builder() .put(elasticsearchClusterKey, elasticsearchClusterName).build();
		this.client = new PreBuiltTransportClient(settings).addTransportAddress(new TransportAddress(InetAddress.getByName(elasticsearchUrl), elasticsearchPort));
	}
	
	@PreDestroy
	public void cleanUp() {
		this.client.close();
	}
	
	public synchronized TransportClient getClient() {
		return client;
	}
}
