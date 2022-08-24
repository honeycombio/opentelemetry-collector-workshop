# Sending Data To Honeycomb

## Using the Collector

The [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) offers a vendor-agnostic way to gather observability data from a variety of instrumentation solutions and send that data to Honeycomb.

Honeycomb supports receiving telemetry data via OpenTelemetry’s native protocol, OTLP, over gRPC and HTTP/protobuf.

To send trace or metrics data to Honeycomb, you must configure an OTLP exporter, passing in your Honeycomb API Key and dataset as headers:

```toml
exporters:
  otlp:
    endpoint: "api.honeycomb.io:443"
    headers:
      "x-honeycomb-team": "YOUR_API_KEY"
      "x-honeycomb-dataset": "YOUR_DATASET"
```

## Running This Exercise

### Using GitPod

1. Open the Workspace

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/honeycombio/opentelemetry-collector-workshop/tree/wip.alayshia)

**NOTE:** Do not forget to set [GitPod's user variables](https://gitpod.io/variables).

2. Change into the Proper Directory

```bash
cd examples/1-otlp/
```

3. Run Tilt to create all services

```bash
tilt up
```

**NOTE:** _Once tilt is initialized, **"The browser interrupted the opening of a new tab or window. Press 'Open' to open it anyway."** prompt will appear on the screen. Select `Open` to view the logs of your application and OTEL collector_


### Creating Data

Curl endpoint to create a trace

```bash
curl localhost:8080
```