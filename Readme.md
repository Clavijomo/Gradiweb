# Marco de Simulador de Shopify

## Descripción General

El **Marco de Simulador de Shopify** es un proyecto ligero de simulación diseñado para replicar funcionalidades clave de una plataforma de comercio electrónico, utilizando componentes similares a los de Shopify. El proyecto enfatiza el desarrollo modular con plantillas Liquid, estilos en SASS y funcionalidades interactivas con JavaScript, utilizando Webpack para la agrupación de archivos.

Este proyecto sirve como un desafío técnico para demostrar las mejores prácticas, código limpio y habilidades de documentación.

---

## Características

- **Componentes Dinámicos**: Plantillas reutilizables en Liquid para una interfaz de usuario modular.
- **Interacciones de Usuario Suaves**:
  - Animaciones de desplazamiento.
  - Renderización dinámica de productos (funcionalidad "Ver Todos").
- **Estilos Basados en SCSS**: Arquitectura CSS escalable y mantenible.
- **Manejo Asíncrono de Datos**: Obtención del resto de productos utilizando una "API" simulada.
- **Configuración con Webpack**:
  - Agrupa SCSS y JS.
  - Build optimizado para desarrollo.
- **Diseño Responsivo**: Garantiza una experiencia fluida en todos los dispositivos.

---

## Estructura del Proyecto
```
├── assets/              # Recursos estáticos (imágenes, íconos)
├── config/              # Archivos de configuración JSON
├── data/                # Archivos de datos (por ejemplo, products.json)
├── public/              # Salida de Webpack (main.js)
├── src/                 # Archivos fuente para JavaScript y SCSS
    ├── sections/            # Secciones relevantes del sitio
    ├── components/            # Componentes reutilizables en Liquid
    ├── js/              # Módulos y funcionalidades del JavaScript
    ├── styles/          # Archivos SCSS separados por secciones
├── templates/           # Plantilla HTML principal
├── webpack.config.js    # Configuración de Webpack
└── server.js            # Configuración del servidor local
```
---

## Instrucciones de Instalación

### Requisitos Previos

- Node.js (>= 14.x)
- NPM o Yarn

### Instalación

1. Clona el repositorio:
   ```bash
   git clone git@github.com:Clavijomo/Gradiweb.git
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

4. Genera la versión de producción:

   ```bash
   npm run build
   ```

   La salida se encontrará en el directorio `public/`.
---

## Funcionalidades Clave

### 1. Productos dinámicos "View Al" - products.js
- **Descripción**: Muestra inicialmente 4 productos destacados. Al hacer clic en el botón "View All", carga dinámicamente los productos restantes con una animación suave de aparición.
- **Funciones**: `fetchAdditionalProducts()` y `fetchAdditionalProducts()`.

### 2. Scroll Down/Up - smoothScroll.js
- **Descripción**: Desplaza suavemente a las secciones cuando se hace clic en enlaces de navegación o botones.
- **Funciones**: `smoothScrollTo()` y `attachSmoothScrollToLinks()`.

### 4. Toggle Menu - toogleMenu.js
- **Descripción**: Despliega/contrae el menú tipo hamburguesa (☰) para listar las opciones del mismo.
  - **Funciones**: `attachToggleMenu`.

### Plantillas Modulares en Liquid
- **Descripción**: Componentes de interfaz reutilizables (por ejemplo, `header.liquid`, `hero-banner.liquid`).
- **Ubicación**:
  - `src/sections/header.liquid`
  - `src/sections/featured-products.liquid`

### Arquitectura de SCSS

- **Descripción**: Estilizado utilizando la metodología BEM para consistencia y modularidad y separado por secciones.
- **Archivos**:
  - `src/styles/header.scss`
  - `src/styles/carrousel-products.scss`
  - `src/styles/footer.scss`
  - `src/styles/hero-banner.scss`
  - `src/styles/latest-collection.scss`

---

## Configuración de Webpack

### Configuración Actual

- **Punto de Entrada**: `src/js/app.js`
- **Directorio de Salida**: `public/`
- **Loaders**:
  - `style-loader`, `css-loader`, `sass-loader` para SCSS.

## Mejores Prácticas

1. **Código Modular**:
   - Separación de la lógica de JavaScript en módulos individuales basados en responsabilidades.
   - Uso de BEM en SCSS para facilidad de mantenimiento.

2. **Documentación**:
   - Documentación detallada de funciones y configuraciones.

3. **Responsividad**:
   - Diseños de interfaces adaptables (Responsive Design) para una experiencia fluida en cualquier dispositivo.

4. **Manejo de Errores**:
   - Manejo adecuado de valores nulos/indefinidos en funciones de JavaScript.
---

## Créditos
Proyecto realizado por Jonathan Ferney Clavijo Morales con fines de resolución de prueba técnica Frontend Developer - Gradiweb.