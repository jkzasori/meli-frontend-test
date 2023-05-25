# Test FrontEnd - MercadoLibre
Test práctico Frontend
### Resumen
Aplicación web que permita buscar, listar y ver detalles de productos seleccionados de MercadoLibre, mediante su respectiva API.
## Tecnologías
Client:
- ReactJS (v17)
- Sass
- HTML
- Typescript

Server:
- NodeJS (18.15.0)
- ExpressJS

### Instalación y despliegue
Server:
```
cd server
npm install o yarn
npm start o yarn start

## Estructura
El proyecto está dividido en dos carpetas: "client" (aplicación ReactJS) y "server" (servidor NodeJS).
- **server**
  - routes
  - externalAPI/meli
  - utils
  - app.js
  - www (archivo)
###### Server
En la raíz del proyecto está el archivo "www" para ejecutar el servidor, así como el archivo "app.js", que es llamado en "www".
En "ExternalAPI" es dónde se colocan las api externas, en este caso se encuentran las de Mercado libre, mecesarias para el ejercicio.
En "utils" se encuentra un arhivo que es encargado de generar el formato JSONs requerido para ser devueltos por los "endpoints" que se usan en ExternalAPI.
En "routes" es donde están definidos los dos "endpoints": `/api/items?q=:query` y `/api/items/:id`.

