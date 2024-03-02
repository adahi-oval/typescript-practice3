# Práctica 6 - CLases e Interfaces genéricas y principios SOLID

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-adahi-oval/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-adahi-oval?branch=main)

## Introducción

En esta práctica se presentan 5 ejercicios diseñados para familiarizarnos con las clases e interfaces genéricas, así como con los principios SOLID. Para ello se han desarrollado estos 5 ejercicios en la carpeta `src` y sus correspondientes pruebas en la carpeta `test`. 

Para la instalación de las dependencias necesarias para hacer funcionar el código solo es necesario el comando:

```bash
npm install
```

## Objetivos

Los objetivos de esta práctica son la familiarización con las clases e interfaces genéricas, así como los principios SOLID de programación orientada a objetos y también la implementación de coveralls en nuestro código. 

## Ejercicio 1 - La mudanza

Para este ejercicio se ha creado una clase `Thing` y de ella se han extendido varias clases como `Book`, `Clothing` y `Furniture`, que actúan como ejemplos de las diferentes cosas que podría contener la caja, en este caso la clase `Box`. Esto se ha hecho así para respetar el principio de **Dependency Inversion** pudiendo así crear un array tipo `Thing[]` en la clase `Box` y de esta manera poder meter todo tipo de objetos en él. Para respetar el principio **Single Responsibility** también se ha creado una clase `BoxPrinter` encargada de imprimir cada uno de los objetos de la caja. Se ha implementado también una interfaz genérica en la clase Box llamada `Searchable<T>`, que detalla un método `search` que devuelve un objeto del propio tipo `T`.

Viendo las dificultades que se tuvieron en el desarrollo de las pruebas para este ejercicio, por intentar capturar la salida de los `console.log()`, desde este ejercicio en adelante se ha optado por hacer retornar las funciones que sacan por consola un `string` con el mismo contenido, simplificando sobremanera el desarrollo de las pruebas así como su contenido.

## Ejercicio 2 - Facturas en diferentes formatos

Para este ejercicio se ha implementado el patrón de diseño **`Strategy`**, debido a que los diferentes formatos de generación de la factura se podrían ver como diferentes estrategias que una clase `Solver` tiene que resolver, de esta manera se podrían agregar más formatos libremente sin tener que cambiar nada más del código. En este caso, la clase `Generator` actúa como Solver, y las diferentes estrategias han sido creadas en clases como `PDF` o `HTML` que implementan la interfaz `Strategy`:

```typescript
export interface Strategy {
  execute(bill: Billv2): string;
}
```

Para representar la factura se ha creado una clase `Bill`, que tiene como atributos el nombre de la empresa y el precio total de la factura. Para ello se ha creado también una clase `Billv2` que se ha actualizado con los setters. Se ha hecho de esta manera para respetar el principio **Open-Closed**. De la misma forma, se ha creado también una clase `Generatorv2`. Para respetar el principio **Single Responsibility** se ha creado una clase `BillPrinter` encargada de imprimir la información de la factura, y luego se toma un objeto de esta clase para generar la factura en su correspondiente formato (estrategia) en el método `generate()` que hace las veces de método `logic()` en el ejemplo clásico del patrón `Strategy`.

## Ejercicio 3 - Gestor de ficheros

En este ejercicio se proporciona un código fuente, el cual se tiene que analizar y modificar para que cumpla con los principios **SOLID**. En este caso, el principio que se está incumpliendo es el de **Single Responsibility** ya que la clase `FileManager` tiene un método para leer y otro para escribir en el archivo dado. La modificación propuesta en el ejercicio ha sido separar la clase `FileManager` en `FileReader` para leer el archivo dado y `FileWriter` para escribir en el archivo dado. Estas clases se usan por separado en las pruebas para realizar todos los usos dados en el código fuente base, con un archivo de prueba llamado `testFile.txt` cuyo contenido es el siguiente:

```plaintext
This is a test file.
```

Se ha modificado ligeramente el código para que los métodos que hacían `console.log()` también devolvieran un string con el mismo contenido, esto es para simplificar mucho las pruebas, comparando la salida con un `string` esperado.

## Ejercicio 4 - Impresoras y escáneres

En este ejercicio, el código fuente incumple el principio **Interface Segregation**, ya que tiene una interfaz `PrintableScannable` que se implementa en todas las clases. Esto da lugar a problemas, ya que ahora la clase `Printer` por ejemplo, debe tener un método vacío `scan` para cumplir con la forma descrita por la interfaz.

Para solucionar estos problemas se ha separado la interfaz *`PrintableScannable`* en *`Printable`* y *`Scannable`*, implementando cada una en las clases necesarias. Por ejemplo, `Printer` ahora solo implementa la interfaz *`Printable`*, `Scanner` solo implementa la interfaz *`Scannable`* y `PrinterScanner` implementa ambas. De esta manera, se soluciona el problema de tener que declarar métodos innecesarios para cumplir la forma de una interfaz general, cumpliendo así el principio **Interface Segregation**.

## Ejercicio 5 - Servicio de mensajería

En este ejercicio, el código fuente incumple el principio **Dependency Inversion**. Esto se puede ver en la clase `Notifier` del código fuente proporcionado, ya que limita el tipo del atributo *notificationService* de manera muy directa. Esto traería problemas si por ejemplo quisiéramos añadir más servicios de notificación más adelante. Para que el código respete el principio **Dependency Inversion** se ha creado una interfaz *`Service`* que describe la forma de un servicio de notificación, esto es, que tiene un método `notify(message: string)` y se ha hecho que `EmailService` y `ShortMessageService` implementen esta interfaz. A su vez, se ha cambiado la clase `Notifier` para que su atributo *notificationService* sea de tipo `Service`, limitando así el tipo del atributo y permitiéndonos añadir más tipos de servicios cómodamente más adelante. 

## Conclusiones

En esta práctica se ha aprendido tanto a desarrollar código bajo los principios **SOLID** como a modificar código existente para ajustarse a los mismos. A su vez, también se ha hecho familiar el trabajo con clases e interfaces genéricas y se han demostrado sus ventajas tanto a largo como a corto plazo, para extender los proyectos o para mantener su retrocompatibilidad. También se ha aprendido a realizar pruebas para un completo cubrimiento del código y su seguimiento y publicación mediante [Instanbul](https://istanbul.js.org/) y [Coveralls](https://coveralls.io/).

## Bibliografía

- [Vídeo de cubrimiento de código mediante Instanbul y Coveralls](https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view)
- [Apuntes de la asignatura](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/)
  - [Principios SOLID](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-solid.html)
  - [Clases e interfaces genéricas](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-generics.html)
  - [Patrones de diseño en typescript](https://ull-esit-inf-dsi-2324.github.io/typescript-theory/typescript-patterns.html#strategy)