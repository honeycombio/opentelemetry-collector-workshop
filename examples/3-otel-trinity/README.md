# Sending Data To Honeycomb

## Using the Collector

The [OpenTelemetry Collector](https://opentelemetry.io/docs/collector/) (OTLP Collector) offers a vendor-agnostic way to gather observability data from a variety of instrumentation solutions and to send that data to Honeycomb.

Honeycomb supports receiving telemetry data via OpenTelemetry’s native protocol, OTLP, over gRPC and HTTP/protobuf.

To send trace, metrics, or log data to Honeycomb, you must configure an OTLP exporter by passing in your Honeycomb API Key and dataset (if using Honeycomb Classic) as headers:

```yaml
exporters:
  otlp:
    endpoint: "api.honeycomb.io:443"
    headers:
      "x-honeycomb-team": "YOUR_API_KEY"
```

In order to get an API Key, please refer to [Manage API Keys](https://docs.honeycomb.io/get-started/configure/environments/manage-api-keys/).
Please read [Best Practices for API Keys](https://docs.honeycomb.io/get-started/best-practices/api-keys/#use-different-api-keys-for-different-purposes) for best practices regarding API keys.

## Running This Exercise

### Using Tilt

This exercise requires [TILT](https://docs.tilt.dev/install.html) to be installed in your environment.

1. Export the following env variable of your HONEYCOMB API KEY

```bash
export HONEYCOMB_API_KEY=<YOUR_API_KEY>
```

2. Change into the Correct Working Directory

```bash
cd examples/3-otel-trinity/
```

3. Run Tilt to create and start all services

```bash
tilt up
```

**NOTE:** _Once tilt is initialized, a prompt -- **"The browser interrupted the opening of a new tab or window. Press 'Open' to open it anyway."** -- will appear on the screen. Select `Open` to view the logs of your application and OTEL collector._


### Creating Data

Curl endpoint to invoke the following:

#### metric

```bash
curl localhost:8080/metrics
```

#### log

```bash
curl localhost:8080/logs
```

#### trace

```bash
curl localhost:8080/traces
```

### Checking

Emitted metrics, logs, traces, will be queriable in Honeycomb under the `o11y-workshop` dataset.
