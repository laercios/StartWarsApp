# StarWars App Front-end
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## Description:

This project is a Vue.js SPA to see information about Sta Wars. The project can be possible because there is a [API](https://swapi.co) with information (API is open).

This application consist of showing information about characters who act at Star Wars movies. Information about Starship is a business need. And then it is need to be show.

## What was used to build the project?

- Docker and docker-compose
- node 13.10 (latest)
- @vue/cli 4.2.3 (latest)
- JStandard
- Pug
- Stylus

## How you can run this project

You need docker and docker-compose installed.
If you have MacOS, just only [download docker](https://hub.docker.com/editions/community/docker-ce-desktop-mac) and follow the easy GUI.


If you have a Linux, you can follow [this tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04) to install docker on Ubuntu (or other distributions which is debian based).


When you finished installation, this commands should work:

```bash
$ docker --version
Docker version 19.03.5, build 633a0ea
```
```bash
$ docker-compose --version
docker-compose version 1.25.2, build 698e2846
```

### Run project
To run this command, do you need to stay on the same path which docker-compose.yml file.

```bash
docker-compose up
```

Application will be running on port 8080. You will access: http://localhost:8080/ 