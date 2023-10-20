# Proyecto de Servicios en la nube 2023

Este proyecto busca evaluar las capacidades de los estudiantes del curso de _Servicios en la nube_
de a Universidad Nacional de Colombia sede Medellín, al implementar la infraestructura necesaria
en la nube de Amazon Web Service (AWS), para correr de forma exitosa cada una de las secciones
de este proyecto.

## Dependencias

Este proyecto requiere **Node.js versión 20 (la LTS actual)**. Para realizar pruebas de estrés, es necesario que el servidor en el que se ejecute disponga del comando `stress`. Dependiendo del sistema operativo, puede instalarse con alguno de los siguientes comandos:

```bash
sudo apt install stress -y
sudo dnf install stress -y
sudo yum install stress -y
sudo pacman install stress -y
```

El proyecto está desarrollado utilizando [Next.js](https://nextjs.org/).
Puede ejecutar el proyecto en entorno local utilizando cualquiera de estos comandos:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Acceda a [http://localhost:3000](http://localhost:3000) para visualizar los resultados en el entorno local.

El proyecto utiliza una base de datos PostgreSQL, un Bucket de S3, y un par de servicios Lambda. Puede encontrar ejemplos en la carpeta "lambda". No es obligatorio utilizar estos ejemplos, pero pueden servir como referencia.

Además, hay una pestaña adicional denominada "Bonus", que implica el uso de una URL que apunta a un balanceador de carga. Esta página se carga a través de un proxy interno y se muestra en un iFrame. La implementación y el despliegue de esta página de bonificación son responsabilidad de cada grupo y se evaluarán en función de la creatividad y los conceptos aplicados en la implementación.

## Despliegue

Puede implementar este proyecto directamente en EC2 o utilizar Elastic Beanstalk. Se proporciona un archivo de ejemplo con las variables de entorno necesarias, pero se espera que, al realizar la implementación, se coloquen estas variables en las ubicaciones adecuadas, siguiendo las mejores prácticas para este tipo de aplicaciones.

Consulte la [documentación de implementación de Next.js](https://nextjs.org/docs/deployment) para obtener más detalles.

## Errores en este proyecto
Si detecta algún error en este proyecto, le instamos a informarlo a través de los canales oficiales del curso. También estamos abiertos a recibir Pull Requests, aunque no se garantiza su aceptación.


