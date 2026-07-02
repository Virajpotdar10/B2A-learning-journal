import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';
import { LoggerProvider, BatchLogRecordProcessor } from '@opentelemetry/sdk-logs';
import { NodeTracerProvider } from '@opentelemetry/sdk-trace-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { Resource } from '@opentelemetry/resources';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { ATTR_SERVICE_NAME } from '@opentelemetry/semantic-conventions';

// Get OTLP endpoint and token from environment variables
const OTLP_ENDPOINT = process.env.OTLP_ENDPOINT || '';
const OTLP_TOKEN = process.env.OTLP_TOKEN || '';

// Create resource with service name
const resource = new Resource({
  [ATTR_SERVICE_NAME]: 'b2a-learning-journal-backend',
  'service.environment': process.env.NODE_ENV || 'development',
  'deployment.environment': process.env.DEPLOYMENT_ENV || 'local',
});

// Setup Logging
export function setupLogging() {
  if (!OTLP_ENDPOINT || !OTLP_TOKEN) {
    console.log('OTLP endpoint or token not configured, skipping logging setup');
    return;
  }

  const loggerProvider = new LoggerProvider({ resource });
  loggerProvider.addLogRecordProcessor(
    new BatchLogRecordProcessor(new OTLPLogExporter({
      url: `${OTLP_ENDPOINT}/v1/logs`,
      headers: {
        Authorization: `Basic ${OTLP_TOKEN}`,
      },
    }))
  );

  return loggerProvider;
}

// Setup Tracing
export function setupTracing() {
  if (!OTLP_ENDPOINT || !OTLP_TOKEN) {
    console.log('OTLP endpoint or token not configured, skipping tracing setup');
    return;
  }

  const tracerProvider = new NodeTracerProvider({ resource });
  tracerProvider.addSpanProcessor(
    new SimpleSpanProcessor(new OTLPTraceExporter({
      url: `${OTLP_ENDPOINT}/v1/traces`,
      headers: {
        Authorization: `Basic ${OTLP_TOKEN}`,
      },
    }))
  );

  tracerProvider.register();
  return tracerProvider;
}

// Initialize telemetry
export function initializeTelemetry() {
  try {
    setupLogging();
    setupTracing();
    console.log('OpenTelemetry initialized successfully');
  } catch (error) {
    console.error('Failed to initialize OpenTelemetry:', error);
  }
}
