![](https://www.honeycomb.io/wp-content/themes/honeycomb/assets/img/logo_white.svg)

# Honeycomb's OpenTelemetry Collector Workshop

Welcome to the home of the OpenTelemetry Collector Workshop.

These exercises are an **instructor-led** approach to understanding OTel collector **concepts**, **configuration**, and **troubleshooting**.

Slides will be provided as guidance at the beginning of the training.

## Requirements

- [Honeycomb Account](https://ui.honeycomb.io/signup)
- Access to [Gitpod](https://gitpod.io) or a [Docker](https://www.docker.com) Environment

## Gitpod

Gitpod is the recommended for this workshop as it provides a working environment without the hassle of setting up your own demo environment.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/honeycombio/opentelemetry-collector-workshop)

### Usage

To utilize the environment, you will need to set up an environment variable for your _API Key_ and have access to the Gitpod.

### Environment Variables

To create environment variables, you can access [Gitpod's user variables](https://gitpod.io/variables).

- **Select** `New Variable`
- **Name** `HONEYCOMB_API_KEY`
- **Value** `YOUR_API_KEY`
- **Scope** `*/*`

_**NOTE:** If using Honeycomb Classic, you will also need to set a second environment variables for `HONEYCOMB_DATASET_NAME`._

## Docker

You can also utilize `Docker` to run the machine as well on your local system.

### Usage

You will need to have the following:

- [Docker](https://www.docker.com)
- Git
- Code Editor of Choice

Once you have the proper requirements, then `clone the repository` and set the `environment variables`.

To set the environment variables locally: 

```sh
export HONEYCOMB_API_KEY=XXXXX
export HONEYCOMB_DATASET_NAME=YOUR_DATA_SET_NAME # Required if using Honeycomb Classic
```



## Things To Remember

- Ask Questions :question:
- Have Fun :smile:


## License

[APACHE](LICENSE) - Honeycomb - 2022
