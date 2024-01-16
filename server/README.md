# Descripción de la Aplicación
La aplicación es un servidor simple construido con Express.js que realiza solicitudes HTTP para obtener datos de usuarios desde la API JSONPlaceholder. Aquí hay una guía rápida sobre cómo funciona:



## Cómo Funciona
- Inicio del Servidor: Cuando ejecutas el servidor (server.js), este se inicia y se pone a la escucha en un puerto determinado.

- Rutas y Controladores: Cuando se realiza una solicitud HTTP a la ruta /user, Express dirige la solicitud al handler getUsers definido en handlers/users/getUsers.js, el cual ejecuta el controller getUsersController definido en controllers/users/getUsersController.js.

- Obtención de Datos de Usuarios: El controlador utiliza Axios para realizar una solicitud GET a la API JSONPlaceholder (https://jsonplaceholder.typicode.com/users/) y obtener datos de usuarios simulados.

- Manejo de Errores: Se ha implementado un manejo básico de errores. Si la solicitud a la API falla, se lanza un error que se captura en el controlador y se propaga hacia el middleware de manejo de errores global.

- Respuestas: Las respuestas del servidor, ya sea en forma de datos de usuario o mensajes de error, se envían de vuelta al cliente.



## Estructura del Proyecto

- server.js
 Este es el archivo principal del servidor. Configura Express, aplica middleware como CORS, body-parser y morgan, establece las rutas y maneja errores.


- router/index.js
Este archivo exporta un enrutador de Express que gestiona las rutas de la aplicación. En este caso, solo tiene una ruta para manejar las operaciones relacionadas con los usuarios.


- userRoutes/index.js
Este archivo define las rutas específicas para las operaciones relacionadas con los usuarios. En este caso, solo hay una ruta que apunta al controlador que obtiene datos de usuarios.


- handlers/users/getUsers.js
En este archivo, se define el controlador getUsersController. Este controlador utiliza Axios para realizar una solicitud a la API JSONPlaceholder y obtener datos de usuarios.

## Requisitos
Node.js instalado en tu máquina.

## Installation

En la terminal posicionate en la carpeta raiz
```bash
cd server
```

Instala las dependencias:
```bash
  npm i
```

Inicia el servidor:
```bash
node server.js
```
La aplicación ahora estará disponible en http://localhost:PUERTO (el puerto predeterminado es 3001).
## API Reference

#### Get all users

```http
  GET /user
```
Obtiene todos los usuarios




## API Users

[api](https://jsonplaceholder.typicode.com/)

[guide](https://jsonplaceholder.typicode.com/guide/)

