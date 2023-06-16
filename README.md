# App de búsqueda de películas

Esta aplicación, creada con React+Vite, te permite buscar películas utilizando la API de [Open Movie Database (OMDb)](https://www.omdbapi.com/) y mostrar los resultados en una lista paginada. También puedes ordenar los resultados por año.

## Instalación

Para instalar la aplicación y sus dependencias, ejecuta:

npm install


## Uso

Para iniciar la aplicación en modo de desarrollo, ejecuta:


npm run dev


Esto iniciará el servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado.

Para construir la aplicación para producción, ejecuta:


npm run build


Esto construirá la aplicación en la carpeta `dist`.

### Búsqueda

Para buscar una película, escribe el título en la barra de búsqueda y haz clic en el botón "Buscar". La aplicación mostrará los resultados en una lista paginada.


### Ordenar

Para ordenar los resultados por año, haz clic en el botón "Ordenar por Año". Esto alternará el orden de clasificación.


### Paginación

La aplicación muestra 10 películas por página. Puedes navegar entre las páginas haciendo clic en los botones "Anterior" y "Siguiente" en la parte inferior de la pantalla.

### NOTA

Gran parte del codigo es adquirido desde el canal de youtube de midulive https://www.youtube.com/watch?v=GOEiMwDJ3lc&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=5&ab_channel=midulive

## Construido con

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Open Movie Database (OMDb) API](https://www.omdbapi.com/)