  // main.js
const tracer = require("./tracing")(); // turn on tracing
const opentelemetry = require('@opentelemetry/api');

  // Express application listening on PORT 8080
const PORT = process.env.PORT || "8080";
const express = require("express");
const app = express();

  // Uses the default root trace
  // Creates a span named "world-greeter" 
app.get("/", (req, res) => {
  const span = opentelemetry.trace.getTracer('default').startSpan('world-greeter');
  console.log('Accessed the World Greeter Endpoint')
  var message = 'Hello There!';
  res.send(message);

  span.setAttribute("message", message)
  console.log(`Added the message variable: ${message}`);
  span.end();
});

app.listen(parseInt(PORT, 10), () => {
  console.log(`Listening for requests on http://localhost:${PORT}`);
});