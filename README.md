<h1 align="center"> Modularización </h1>

Tengan presente que el 90% de lo que vamos a ver en este capítulo, es **Vanilla JavaScript**. Es decir, estamos realmente _repasando el lenguaje base_, con el plus de que le añadimos algunas de las características de **TypeScript** :fire:.

---

<img src="https://www.freecodecamp.org/news/content/images/size/w2000/2021/04/BG.png" />

<h2 align="center"> Patrón MVC </h2>

Teniendo como principal estrategia el _divide et impera_ atribuído a **Julio César**, _senior_ en programación hace varios siglos, vamos a vencer la mayoría de los obstáculos que tengamos delante. **¿Por qué?** ¿Qué secreto esconde esta célebre frase? Simplemente la prueba del tiempo ha demostrado estadísticamente que funciona con mucha precisión. <br>
Cuando tengamos un problema por delante, antes que sucumbir a la tentación de empezar a codear sin saber muy bien qué es lo que estamos haciendo, mejor es **analizar** bien el conjunto, **descomponerlo** en partes, resolverlas, para luego armar nuevamente el conjunto. Esto es la **modularización**.

**Modularización es la acción de partir algo en módulos o partes**. Dentro del contexto del desarrollo de software, hablamos de partir un programa en varios programas más chicos que resuelven problemas específicos. Vimos los primeros ejemplos de ésto cuando aprendimos funciones y comprobamos cómo nos pueden ayudar a separar un programa en partes que trabajan en conjunto para realizar trabajos complejos. Volvimos a toparnos con ésto cuando aprendimos a modularizar los primeros programas de **JavaScript**. Los beneficios de ésta práctica son muchos:

    - Facilita la lectura y comprensión del código.
    - Ayuda mucho a identificar de dónde provienen los bugs.
    - Hace que nuestro software sea facil de escalar, de agregarle funcionalidades nuevas o actualizar otras.
    - Hace que nuestro código sea facil de mantener.
    - Elimina la redundancia, ya que cada parte tiene la característica de ser reutilizable, sea una función o un módulo completo.

Ahora bien, uno de los patrones de arquitectura de aplicaciones más conocido y usado, es el **patrón MVC**, qué básicamente propone construir software dividiéndolo en tres capas principales que podemos implementar a través de los módulos:

- **Model**: Encargado de efectuar las acciones directas a las base de datos. Recibe las solicitudes del usuario desde el controlador.
- **View**: Encargado de dar formato a la representación la información.
- **Controller**: Encargado de manejar y validar las solicitudes del usuario.

<h2 align="center"> ¿Cómo definir un módulo en JavaScript | TypeScript? </h2>

En el momento que usamos las _keywords_ `import` ó `export`, convertimos al archivo.ts/js en el que estamos trabajando en un módulo. Siempre que estemos trabajando por módulos, una buena estructura de carpetas es bien recibida. La práctica de muchas personas con el tiempo fue determinando ciertas formas de armar estas estructuras, que, más o menos, tiene la siguiente forma:

- **Carpeta principal del proyecto**: Almacena todos los archivos de configuración básicos, el README.md, node_modules y dist.
- **node_modules**: Contiene todas las dependencias instaladas a través de NPM.
- **dist**: Contiene todos los archivos transpilados por el compilador de **TypeScript**: `tsc`.
- **src**: Carpeta `source` que contiene todos los archivos **JavaScript** | **TypeScript** de desarrollo del proyecto.
  - **model**: Dentro de **src** almacenamos en esta carpeta todos los módulos que forman parte de la capa `model`.
  - **view**: Dentro de **src** almacenamos en esta carpeta todos los módulos que forman parte de la capa `view`.
  - **controller**: Dentro de **src** almacenamos en esta carpeta todos los módulos que forman parte de la capa `controller`.

<h3 align="center">Formas de importar y exportar</h3>

De forma simple y resumida, veamos las distintas formas de importar y exportar módulos:

`export default getDataFromDB;` ➤ Cuando queremos exportar la función principal de un módulo.

`import getData from './module-path'` ➤ Para importar esa función principal. Cuando importamos un elemento exportado con **export default** podemos asignarle un alias sin necesidad de usar la keyword _as_.

`export { functionA, functionB, dataArray }` ➤ Cuando queremos exportar elementos en puntuales de un módulo.

`import { functionA, functionB, dataArray } from './ruta-del-modulo` ➤ Así importamos esos elementos puntuales. También podríamos importar todo junto con un alias: `import * as modulo from './ruta-del-modulo'`

<h1 align="center"> LINKS </h1>

- [¿Qué es console.table()?](https://developer.mozilla.org/en-US/docs/Web/API/console/table)

- [Divide et Impera](https://anveger.wordpress.com/2015/07/11/divide-et-impera/)

- [ECMAScript Modules en TS](https://www.typescriptlang.org/docs/handbook/modules.html)
