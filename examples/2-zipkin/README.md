# OpenTelemetry Zipkin Example 

In this example, we will be sending Zipkin PHP to Honeycomb. 

Applications instrumented with OpenTelemetry SDKs or with Jaeger, Zipkin, or OpenCensus can use the OpenTelemetry Collector to send trace data to Honeycomb as events. 

To send trace or metrics data to Honeycomb, you must configure an OTLP exporter, passing in your Honeycomb API Key and dataset as headers:

```yaml
exporters:
  otlp/traces: # Identifies where to send the type of data
    endpoint: "api.honeycomb.io:443" 
    headers:
      "x-honeycomb-team": "YOUR_API_KEY"
      "x-honeycomb-dataset": "YOUR_DATASET"
  otlp/metrics:
    endpoint: "api.honeycomb.io:443"
    headers:
      "x-honeycomb-team": "YOUR_API_KEY"
      "x-honeycomb-dataset": "YOUR_METRICS_DATASET"
```

```yaml
service:
  extensions: [pprof, zpages, health_check]
  pipelines:
    traces:
      receivers: [zipkin, otlp]
      processors: [batch]
      exporters: [otlp/traces, zipkin/traces, logging]
```

## Running This Exercise

### Using GitPod

1. Open the Workspace

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/honeycombio/opentelemetry-collector-workshop/tree/wip.alayshia)

**NOTE:** Do not forget to set [GitPod's user variables](https://gitpod.io/variables).

2. Change into the Proper Directory

```bash
cd examples/2-zipkin/
```

3. Run Tilt to create all services

```bash
tilt up
```

**NOTE:** _Once tilt is initialized, **"The browser interrupted the opening of a new tab or window. Press 'Open' to open it anyway."** prompt will appear on the screen. Select `Open` to view the logs of your application and OTEL collector_

### Creating Data

1. Curl endpoint to create a trace

```bash
curl http://localhost:8081
```

### Discovering

#### Health Check

Log Example

```json
2022-08-24T00:35:05.154Z info healthcheckextension@v0.56.0/healthcheckextension.go:44 Starting health_check extension {"kind": "extension", "name": "health_check", "config": {"Port":0,"TCPAddr":{"Endpoint":"0.0.0.0:13133"},"Path":"/","CheckCollectorPipeline":{"Enabled":true,"Interval":"5m","ExporterFailureThreshold":5}}}
```

#### Zpages

Enables an extension that serves zPages, an HTTP endpoint that provides live data for debugging different components that were properly instrumented for such. 

All core exporters and receivers provide some zPage instrumentation.

[zPages](https://github.com/open-telemetry/opentelemetry-collector/blob/main/extension/zpagesextension/README.md) are useful for in-process diagnostics without having to depend on any backend to examine traces or metrics.

The following are available:

- **ServiceZ** 
  - [Example URL](http://localhost:55679/debug/servicez)
- **PipelineZ** 
  - [Example URL](http://localhost:55679/debug/pipelinez)
- **ExtensionZ** 
  - [Example URL](http://localhost:55679/debug/extensionz)
- **FeatureZ** 
  - [Example URL](http://localhost:55679/debug/featurez)
- **TraceZ** 
  - [Example URL](http://localhost:55679/debug/tracez)
- **RpcZ** 
  - [Example URL](http://localhost:55679/debug/rpcz)
