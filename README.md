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
###### Server
- **server**
  - routes
  - externalAPI/meli
  - utils
  - app.js
  - www (archivo)

En la raíz del proyecto está el archivo "www" para ejecutar el servidor, así como el archivo "app.js", que es llamado en "www".
En "ExternalAPI" es dónde se colocan las api externas, en este caso se encuentran las de Mercado libre, mecesarias para el ejercicio.
En "utils" se encuentra un arhivo que es encargado de generar el formato JSONs requerido para ser devueltos por los "endpoints" que se usan en ExternalAPI.
En "routes" es donde están definidos los dos "endpoints": `/api/items?q=:query` y `/api/items/:id`.

###### Client
- **client**
  - src
    - assets
    - components
    - pages
      - home
      - itemDetail
        - adapter
        - components
        - domain
        - services
        - test
      - listItems
        - adapter
        - components
        - domain
        - services
        - test
    - routes
    - services

En el proyecto se utilizó clean Architecture en la sección de itemsList y itemsDetail en pages, unit test y helmet para manejar el SEO; adicional a ello se agregaron etiquetas meta adionales en el index.html de la carpeta public
Es un proyecto pequeño; pero bastante completo. También se modifican las etiquetas meta de keywords según las categorías del producto y se tuvieron otras consideraciones para las mismas.
Se consideró la utilización de atomic-design para la creación del input search, que incialmente es un input y luego se utiliza ese input para la creaciṕn del input search, adicionándole nuevas características al nuevo componenete para no modificar al inicial.
Este un proyecto pequeño, pero bastante completo; en relación a SEO, unit test, performance, escalabilidad y usabilidad.