# Docker

## Version von Client und Server ausgeben

```shell
$ docker version
```

## Images herunterladen

```shell
$ docker pull <image>
```

## Container ausführen

### Interaktiv

```shell
$ docker run -it <image> [<app>]
```

### Im Detached-Mode

```shell
$ docker run -d <image> [<app>]
```

### Allgemeine Parameter

- `--init` startet einen init-Prozess im Container
- `--name` benennt den Container
- `--restart` legt fest, wann der Container neu gestartet werden soll (`always`, `no` oder `on-failure[:<max-retries>]`)
- `-p <host>:<container>[/<protocol>]` verbindet einen Port des Hosts mit einem Port des Containers (standardmäßig wird TCP verwendet)
- `-e <key>=<value>` setzt eine Umgebungsvariable
- `-v <host>:<container>[:ro]` verbindet einen Ordner des Hosts mit einem Ordner des Containers (optional als Read-Only)

## Images auflisten

```shell
$ docker images
```

## Container auflisten

```shell
$ docker ps
```

Auch Container anzeigen, die nicht laufen:

```shell
$ docker ps -a
```

Nur die IDs anzeigen:

```shell
$ docker ps -aq
```

## Container stoppen

```shell
$ docker stop <id | name>
```

Oder, ohne auf einen Graceful-Shutdown zu warten:

```shell
$ docker kill <id | name>
```

## Container löschen

```shell
$ docker rm <id | name>
```

Alle Container löschen:

```shell
$ docker rm $(docker ps -aq)
```

## Images löschen

```shell
$ docker rmi <id | name>
```

Alle Images löschen:

```shell
$ docker rmi $(docker images -q)
```

## Alles aufräumen

```shell
$ docker system prune
```

## Log-Ausgabe anzeigen

```shell
$ docker logs <id | name>
```

Optional kann man den Logs folgen:

```shell
$ docker logs -f <id | name>
```

## Docker-Image bauen

```shell
$ docker build -t <image> .
```

Allgemeine Parameter:

- `-t` taggt das Image
- `--no-cache` baut das Image ohne Cache

## Docker-Images taggen

```shell
$ docker tag <image> <repository>:<tag>
```

# Docker-Compose

## Anwendung starten

```shell
$ docker-compose [-f <datei>] up -d
```

## Anwendung stoppen

```shell
$ docker-compose [-f <datei>] stop
```

Ohne Wartezeit:

```shell
$ docker-compose [-f <datei>] kill
```

## Anwendung herunterfahren (inklusive Aufräumen)

```shell
$ docker-compose [-f <datei>] down
```

## Anwendungen auflisten

```shell
$ docker ps
$ docker-compose ps
```

## Netzwerke auflisten

```shell
$ docker network ls
```
