# Servidor basico de Node integrando Docker

Este es un intento fallido de dockerizar una aplicacion completa utilizando contenedores de Node y Mongo.

## Modo desarrollo

Funciona correctamente y levanta un contenedor para mongo.

Necesita estas variables de entorno para funcionar

Nota: El archivo .env debe crearse dentro de la carpeta "src".

```
NODE_PORT_DEV=

MONGO_CONTAINER_NAME_DEV=
MONGO_URI_DEV=

MONGO_ROOT_USER_DEV=
MONGO_ROOT_PASS_DEV=
MONGO_PORT_DEV=
```
## Modo producion

Al ejecutar el comando `npm start` es necesario ejecutar el servicio de mongodb detallado en el archivo "docker-compose.yml" para que funcione sin errores.

El script `npm start` quedaria asi `docker-compose up -d mongodb && node src`

El script anterior no sirve para el dockerizado por lo que queda pendiente de solucionar.

```
NODE_PORT=

NODE_CONTAINER_NAME=

MONGO_CONTAINER_NAME=
MONGO_ROOT_USER=
MONGO_ROOT_PASS=
MONGO_PORT=
MONGO_URI=
```

## Por hacer

* [ ] solucionar el dockerizado de la aplicacion completa.
