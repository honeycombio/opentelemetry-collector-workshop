![](https://www.honeycomb.io/wp-content/themes/honeycomb/assets/img/logo_white.svg)

# Honeycomb's OpenTelemetry Collector Workshop

Welcome to the home of the OpenTelemetry Collector Workshop.

These exercises are an **instructor-led** approach to understanding OTel collector **concepts**, **configuration**, and **troubleshooting**.

Slides will be provided as guidance at the beginning of the training.

## Requirements

- [Honeycomb Account](https://ui.honeycomb.io/signup)
- Installation of [Tilt](https://tilt.dev/) and [Docker](https://www.docker.com) Environment

## Tilt

[Tilt](https://docs.tilt.dev/install.html) is recommended for this workshop as it provides a working environment without the hassle of setting up the demo environment.

## Docker

[Docker](https://docs.docker.com/get-docker/) needs to be installed which will run containers necessary for trying out the workshop demos.

## Usage

To utilize the environment, you will need to set up an environment variable for your _API Key_ and have **Docker** and **Tilt** installed and ready.

### Environment Variables

You will need to export the environment variable `HONEYCOMB_API_KEY` with the value as your valid Honeycomb API KEY. Instruction of creating and getting the API KEY can be found [here](https://docs.honeycomb.io/get-started/configure/environments/manage-api-keys/).

To set the environment variables locally: 

```sh
export HONEYCOMB_API_KEY=XXXXX
export HONEYCOMB_DATASET_NAME=YOUR_DATA_SET_NAME # Required if using Honeycomb Classic
```

_**NOTE:** If using Honeycomb Classic, you must set a second environment variables for `HONEYCOMB_DATASET_NAME`._

You then clone the repository on your local environment using the `git clone` command:

```
git clone git@github.com:honeycombio/opentelemetry-collector-workshop.git
```

There are [examples](./examples) which contains folders having README for how to start each example demos.

## Things To Remember

- Ask Questions :question:
- Have Fun :smile:

## License

[APACHE](LICENSE) - Honeycomb - 2024
