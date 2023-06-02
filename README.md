# POC de librería

En este proyecto tenemos una librería junto con un proyecto de angular que puede consumir dicha librería.

Los pasos a seguir para levantar todo son los siguientes:

## 1 Levantar la librería
`npm run build-lib`

Este comando compila la librería y lo manda a la carpeta /dist/. También tiene un watch que hace que por cada cambio haya una recompilación automática

## 2 Levantar la app

`npm run start`

Este comando levanta la app en el puerto correspondiente

### Uso de los módulos de la librería

La librería está pensada para poder realizar imports de los módulos. De esta manera, si queremos importar el módulo de cards podemos hacer lo siguiente:

`import { CardModule } from "my-lib/card";`

Para ello, cada paquete tiene su propio `ng-package.json` y un `public_api.ts`

El fichero `projects/my-lib/src/components/tsconfig.lib.json` también se ha modificado respecto al generado de angular 

Para hacer todo esto me he basado en ngprime