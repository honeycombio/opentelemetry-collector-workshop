
const logsAPI = require ('@opentelemetry/api-logs');
const tracer = require("./otel_tracing")(); // turn on tracing
const logger = require("./otel_log")(); // enable otel logger
const meterProvider = require("./otel_metric")(); // enable otel meter
const opentelemetry = require("@opentelemetry/api");

// Express application listening on PORT 8080
const PORT = process.env.PORT || "8080";
const express = require("express");
const app = express();

// set logger for debugging purpose
opentelemetry.diag.setLogger(new opentelemetry.DiagConsoleLogger(), opentelemetry.DiagLogLevel.DEBUG);

// traces
app.get("/traces", (req, res) => {
  const span = tracer.startSpan('otel-traces');
  console.log('Accessed the Hello Greeter Endpoint - 🐾 traces')
  var message = 'Greetings from OTEL collector workshop: 🐾 traces!';
  res.setHeader('content-type', 'text/html');
  res.send('<h1>' + message + '</h1>');
  span.setAttribute("message", message)
  console.log(`Added the message variable: ${message}`);
  span.end();
});

// metrics
app.get("/metrics", (req, res) => {
  console.log('Accessed the Hello Greeter Endpoint - 📈 metrics')
  const meter = meterProvider.getMeter('meter');
  const counter = meter.createCounter('hello-count');
  var message = 'Greetings from OTEL collector workshop: 📈 metrics!';
  res.setHeader('content-type', 'text/html');
  res.send('<h1>' + message + '</h1>');
  console.log(`Added the message variable: ${message}`);
  counter.add(1, {'type': 'metric'});
});

// logs
app.get("/logs", (req, res) => {
  console.log('Accessed the Hello Greeter Endpoint - 🪵 logs')
  var message = 'Greetings from OTEL collector workshop: 🪵 logs!';
  logger.emit({
    severityNumber: logsAPI.SeverityNumber.INFO,
    severityText: 'INFO',
    body: message,
    attributes: { 'log.type': 'LogRecord' },
  });
  res.setHeader('content-type', 'text/html');
  res.send('<h1>' + message + '</h1>');
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});
