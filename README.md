# Primer paso: Compilar el proyecto
Utiliza el comando para crear el directorio donde se alojaran los archivos compilados de babel
npm run dist

## Segundo paso: Cambiar la version del package
cada cambio que se necesite reflejar en la libreria debe se cambiado con una nueva version en el package.json

"version": "0.0.XXX"

## Tercer paso: crear el publish o el tgz
ahora para pruebas usar el comando para crear el archivo tgz

npm pack

y solo faltaria mandarlo a instalar en otro proyecto si los dos prtoyectos estan en la misma raiz seria algo similar

yarn add ..\mystique-web-components\mystique-web-components-0.0.117.tgz

Si no truena, ya la armaste!

para publicar en npm publish