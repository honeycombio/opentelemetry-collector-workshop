// import * as logsAPI from '@opentelemetry/api-logs';
const { opentelemetry } = require("@opentelemetry/api");
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const {
  LoggerProvider,
  SimpleLogRecordProcessor
} = require('@opentelemetry/sdk-logs');
const { OTLPLogExporter } = require('@opentelemetry/exporter-logs-otlp-http');

module.exports = () => {
    // set log level to DEBUG for a lot of output
    // opentelemetry.diag.setLogger(new opentelemetry.DiagConsoleLogger(), opentelemetry.DiagLogLevel.INFO);

    const resource = new Resource({
        [ SemanticResourceAttributes.SERVICE_NAME ]: 'o11y-workshop',
        [ SemanticResourceAttributes.SERVICE_NAMESPACE ]: 'logs_ns',
    });
    
    const loggerProvider = new LoggerProvider({
        resource
    });
    
    loggerProvider.addLogRecordProcessor(new SimpleLogRecordProcessor(new OTLPLogExporter({
        url: 'http://otel-collector:4318/v1/logs',
        keepAlive: true,
    })));

    const loggerOtel = loggerProvider.getLogger('default');
    return loggerOtel;
};
