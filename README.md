# Carrera de Botargas 🏃‍♂️🎮

Un juego web interactivo que simula una carrera entre diferentes botargas (mascotas) con efectos visuales, sonido y animaciones.

![Carrera de Botargas](https://via.placeholder.com/800x400?text=Carrera+de+Botargas)

## 📋 Descripción

"Carrera de Botargas" es un juego web divertido donde diferentes mascotas compiten en una carrera. Cada botarga tiene una velocidad aleatoria y variaciones en su movimiento que hacen que cada carrera sea única. El juego incluye un sistema de cronometraje, tabla de posiciones en tiempo real, efectos visuales y música dinámica.

## ✨ Características

- Carreras con 3 a 8 botargas diferentes
- Animaciones fluidas de movimiento
- Sistema de cronometraje preciso
- Tabla de posiciones en tiempo real
- Efectos visuales para el ganador
- Sistema de audio con música dinámica durante la carrera
- Controles de volumen y opción de silencio
- Diseño responsivo adaptable a diferentes dispositivos

## 🚀 Cómo ejecutar el proyecto

El proyecto es una aplicación web que funciona directamente en el navegador. No requiere instalación ni dependencias adicionales.

### Requisitos previos

- Un navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para cargar la biblioteca Tone.js)

### Pasos para ejecutar

1. Descarga o clona este repositorio
2. Abre el archivo `carrera-botargas.html` en tu navegador web
3. ¡Disfruta del juego!

También puedes alojar los archivos en cualquier servidor web para acceder al juego desde cualquier dispositivo.

## 🎮 Cómo jugar

1. Selecciona el número de botargas que deseas en la carrera (3-8)
2. Haz clic en "Iniciar Carrera" para comenzar
3. Observa cómo las botargas compiten por llegar primero a la meta
4. La tabla de posiciones se actualiza en tiempo real
5. Al finalizar la carrera, se mostrará un anuncio con el ganador
6. Puedes reiniciar la carrera en cualquier momento con el botón "Reiniciar"

## 🧩 Estructura del proyecto

El proyecto consiste en un único archivo HTML que contiene:

- **HTML**: Estructura básica de la página
- **CSS**: Estilos y animaciones (incluido en la sección `<style>`)
- **JavaScript**: Lógica del juego (incluido en la sección `<script>`)

### Módulos principales

1. **Sistema de juego**: Controla la lógica de la carrera, movimiento de las botargas y cronometraje
2. **Sistema de audio**: Gestiona la música y efectos de sonido utilizando la biblioteca Tone.js
3. **Interfaz de usuario**: Maneja la visualización y actualización de elementos en pantalla

## 🔧 Dependencias externas

- [Tone.js](https://tonejs.github.io/) - Biblioteca para la generación de audio en el navegador
  - Cargada desde CDN: `https://cdnjs.cloudflare.com/ajax/libs/tone/14.8.49/Tone.min.js`

## ⚠️ Consideraciones

- **Audio**: El audio se inicializa solo después de la primera interacción del usuario con la página, debido a las políticas de autoplay de los navegadores modernos
- **Rendimiento**: El juego está optimizado para funcionar en la mayoría de los dispositivos, pero en dispositivos con recursos limitados podría experimentar pequeños retrasos
- **Compatibilidad**: Se recomienda usar navegadores actualizados para una mejor experiencia
- **Conexión a internet**: Se requiere conexión a internet para cargar la biblioteca Tone.js desde el CDN

## 🛠️ Personalización

Si deseas personalizar el juego, puedes modificar:

- Los emojis y nombres de las botargas (líneas 467-468)
- Los estilos visuales (sección CSS)
- La música y efectos de sonido (sección de audio en JavaScript)
- La velocidad y comportamiento de las botargas (línea 513)

## 📝 Licencia

Este proyecto está disponible como código abierto.

## 👨‍💻 Autor

[Tu nombre o el nombre del autor original]

---

¡Diviértete con la Carrera de Botargas! 🎉