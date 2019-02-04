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