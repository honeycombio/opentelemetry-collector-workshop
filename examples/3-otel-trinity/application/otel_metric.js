const { MeterProvider, PeriodicExportingMetricReader } = require('@opentelemetry/sdk-metrics');
const { OTLPMetricExporter } = require('@opentelemetry/exporter-metrics-otlp-http');

module.exports = () => {
    const collectorOptions = {
        url: 'http://otel-collector:4318/v1/metrics', // url is optional and can be omitted - default is http://localhost:4318/v1/metrics
        headers: {}, // an optional object containing custom headers to be sent with each request
    };
    const metricExporter = new OTLPMetricExporter(collectorOptions);
    const meterProvider = new MeterProvider({});
    meterProvider.addMetricReader(new PeriodicExportingMetricReader({
        exporter: metricExporter,
        exportIntervalMillis: 30000,
    }));

    return meterProvider;
};
