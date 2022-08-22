const { DiagConsoleLogger, DiagLogLevel, diag } = require("@opentelemetry/api");


// import otel dependencies
const opentelemetry = require("@opentelemetry/api");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const {
  ConsoleSpanExporter,
  BatchSpanProcessor
} = require("@opentelemetry/sdk-trace-base");
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-grpc');
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const grpc = require("@grpc/grpc-js");
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

module.exports = () => {
  // set log level to DEBUG for a lot of output
  opentelemetry.diag.setLogger(new opentelemetry.DiagConsoleLogger(), opentelemetry.DiagLogLevel.INFO);
  
  // const apikey = process.env.HONEYCOMB_API_KEY;
  const serviceName = process.env.SERVICE_NAME || 'js-collector-service';
  const OTLP_ENDPOINT = process.env.HONEYCOMB_API_ENDPOINT || 'grpc://otel-collector:4317/';
  
  console.log(`Exporting to endpoint ${OTLP_ENDPOINT} with service name ${serviceName}`)
  
  const provider = new NodeTracerProvider({
    resource: new Resource({
      [SemanticResourceAttributes.SERVICE_NAME]: serviceName
    }),
  });
  // const metadata = new grpc.Metadata();
  // metadata.set("x-honeycomb-team", apikey);

  provider.addSpanProcessor(
    new BatchSpanProcessor(
      new OTLPTraceExporter({
        url: OTLP_ENDPOINT,
        credentials: grpc.credentials.createInsecure(),
        // metadata,
      }), 
    )
  );

  // uncomment this to see traces in stdout
  provider.addSpanProcessor(new BatchSpanProcessor(new ConsoleSpanExporter()));

  provider.register();

  // turn on autoinstrumentation for traces you're likely to want
  registerInstrumentations({
    tracerProvider: provider,
    instrumentations: [getNodeAutoInstrumentations()],
  });

  process.on("SIGINT", async () => {
    console.log("Flushing Telemetry");
    await provider.activeSpanProcessor.forceFlush();
    console.log("Flushed");
    process.exit();
  });

  const tracer = opentelemetry.trace.getTracer(
    process.env.OTEL_SERVICE_NAME || serviceName
  );
  return tracer;
};