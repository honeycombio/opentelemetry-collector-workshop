![](https://www.honeycomb.io/wp-content/themes/honeycomb/assets/img/logo_white.svg)

# Honeycomb's OpenTelemetry Collector Workshop

Welcome to the home of the OpenTelemetry Collector Workshop. 

These exercises are an **instructor-led** approach to understanding OTel collector **concepts**, **configuration**, and **troubleshooting**.

Slides will be provided as guidance at the beginning of the training.

## Requirements

- [Honeycomb Account](https://ui.honeycomb.io/signup)
- Access to [GitPod](https://gitpod.io) or a [Docker](https://www.docker.com) Environment

## GitPod

GitPod is the recommended for this workshop as it provides a working environment without the hassle of setting up your own demo environment.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/honeycombio/opentelemetry-collector-workshop/tree/wip.alayshia)
### Usage

To utilize the environment, you will need to setup up an environment variable for your _API Key_.

### Environment Variables

To create environment variables, you can access [GitPod's user variables](https://gitpod.io/variables).

- **Select** `New Variable`
- **Name** `HONEYCOMB_API_KEY`
- **Value** `YOUR_API_KEY`
- **Scope** `*/*`

_**NOTE:** If using Honeycomb Classic, you will also need to set up your environment variables for `HONEYCOMB_DATASET` as well._

## Docker

## Things To Remember

- Each example is located within its respected folder