
# Project Title

A brief description of what this project does and who it's for


## Installation

# React + OpenAI + Tailwind CSS

Este proyecto es una aplicación de React que utiliza la API de OpenAI y está estilizada con Tailwind CSS.

## Requisitos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) o [Yarn](https://yarnpkg.com/)
- Una cuenta en [OpenAI](https://platform.openai.com/)

## Instalación

### 1. Crear un nuevo proyecto con Create React App

    npx create-react-app react-openai

### 2. Instar OpenAI

    npm install --save openai
    # or
    yarn add openai


Si prefieres, puedes modificar el archivo env.example en lugar de crear uno nuevo.

    REACT_APP_OPENAI_API_KEY=tu_clave_api_aqui

### 2. Instar Tailwind CSS

    npm install -D tailwindcss
    npx tailwindcss init

Agregue las rutas a todos los archivos de plantilla en su tailwind.config.jsarchivo.
tailwind.config.js
```
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
```

Añade las directivas Tailwind a tu CSS
Agregue las @tailwinddirectivas para cada una de las capas de Tailwind a su archivo CSS principal.
src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Iniciar el proceso de compilación de Tailwind CLI
Agregue su archivo CSS compilado <head> y comience a usar las clases de utilidad de Tailwind para darle estilo a su contenido.







## Instalar Tailwind CSS
Sigue los pasos en la documentación oficial de Tailwind CSS:
[Documentation](https://tailwindcss.com/)

## Iniciar el servidor de desarrollo
    npm start


## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Demo

[Ver Demo](https://reat-openai-tailwindcss.vercel.app/) 

## Used By

Este proyecto es utilizado por cualquier persona y empresas amantes de las tecnólogias . 
## Authors

- [@Sthalin Rivera](https://github.com/SthalinRivera)

