# OTTL (OpenTelemetry Transformation Language) Workshop

![ottl.run](ottl.run.png)

## Overview
This workshop lets student test how to apply various transformation statements learn how to use OTTL for various use cases

## How to use

1. Open your browser and visit (https://ottl.run)[https://ottl.run] which is the OTTL playground web page
2. Copy the json payload (*.json files)
3. Copy the matching YAML configuration that matches the payload (*.yaml files)
4. Press `run` button to see the results

## Use Cases

The following use cases are available:

|OTLP Payload|Configuration|Description|
|---|---|---|
|[1-log.json](1-log.json)|[1-log.yaml](1-log.yaml)|Parse the incoming log body which is in JSON format, and generate attributes. The incoming log body is formatted in JSON, and we want to expose those as attributes of the log record.|
|[1-trace.json](1-log.json)|[2-trace.yaml](2-trace.yaml)|Convert the span events into attributes of the span. The example uses spans from document load and resource loads that has multiple span events on state of the load, which can be converted into attributes to reduce the amount of unnecessary events to be created.|
|[1-metric.json](1-log.json)|[3-metric.yaml](3-metric.yaml)|Utilize regex pattern to extract part of the metric and convert it into gorilla pattern. Example includes URL patterns that contains distinct URLs that can be converted into common patterns for easier filter and group bys.|
