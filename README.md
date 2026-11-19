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

## Publicar en Vercel paso a paso

1. Sube el proyecto a [GitHub](https://github.com/cesarchamal/simon-game).
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. En el panel de Vercel, pulsa **Add New → Project**.
4. Busca el repositorio `cesarchamal/simon-game` y pulsa **Import**. Si no aparece, concede a Vercel acceso al repositorio desde la configuración de GitHub.
5. Comprueba que Vercel detecte **Vite**. Si debes configurar los valores manualmente, utiliza:
   - **Install Command:** `npm install`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Pulsa **Deploy** y espera a que termine la compilación.
7. Abre el dominio que Vercel muestra al finalizar. También puedes usar el dominio existente: [simon-game-ruby-three.vercel.app](https://simon-game-ruby-three.vercel.app/).

Si el proyecto ya está conectado a Vercel, cada `git push` a la rama configurada publicará automáticamente una nueva versión.

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

## Autor

Hecho por [cesarchamal](https://github.com/cesarchamal).
