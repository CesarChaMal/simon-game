# Simón

Un juego de memoria inspirado en Simón, creado con React y Vite. Observa la secuencia de colores y repítela en el mismo orden. Cada ronda agrega un color; si te equivocas, puedes reiniciar la partida.

## Requisitos

- Node.js y npm

## Instalación

Clona el repositorio y entra en la carpeta del proyecto. Después, instala las dependencias:

```bash
npm install
```

## Ejecutar en desarrollo

```bash
npm run dev
```

Abre en el navegador la dirección que muestra Vite en la terminal, normalmente `http://localhost:5173/`.

## Instalar en Android

La aplicación está disponible en [simon-game-ruby-three.vercel.app](https://simon-game-ruby-three.vercel.app/) y se puede instalar desde Chrome:

1. Abre el enlace en Chrome en tu teléfono Android.
2. Pulsa el menú de tres puntos y selecciona **Instalar aplicación** o **Añadir a pantalla de inicio**.
3. Confirma la instalación. Simón aparecerá como una aplicación en tu pantalla de inicio.

Después de cargarla una vez con conexión, la aplicación también puede abrirse sin conexión.

## Publicación

El proyecto está alojado en Vercel. Si Vercel está conectado al repositorio, al subir los cambios a la rama configurada se publicará automáticamente una nueva versión.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Previsualiza localmente la versión de producción |
| `npm run lint` | Analiza el código con Oxlint |

## Cómo jugar

1. Pulsa **Comenzar**.
2. Observa los colores que se iluminan.
3. Repite la secuencia pulsando los botones en el mismo orden.
4. Cada ronda añade un color nuevo. Si te equivocas, pulsa **Reiniciar partida** para volver a empezar.

## Tecnologías

- React
- Vite
- Oxlint
