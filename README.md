
# Proyecto de Servicios en la nube 2024

Este proyecto busca evaluar las capacidades de los estudiantes del curso de _Servicios en la nube_
de a Universidad Nacional de Colombia sede Medellín, al implementar la infraestructura necesaria
en la nube de Amazon Web Service (AWS), para correr de forma exitosa cada una de las secciones
de este proyecto.

## Dependencias

Este proyecto requiere **[Node.js versión 18 (la LTS actual)](https://nodejs.org/en/download)**. Además es necesario correr los comandos en un ambiente Linux, por ejemplo pueden usar [Windows Subsystem for Linux (WSL)](https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10) en caso tal use Windows como sistema operativo.

Dentro de la carpeta del proyecto (local) correr el siguiente comando:

```bash
npm install
```

Para realizar pruebas de estrés, es necesario que en el **servidor** en el que se ejecute disponga del comando `stress`. Dependiendo del sistema operativo, puede instalarse con alguno de los siguientes comandos:

```bash
sudo apt install stress -y
# Fedora
sudo dnf install stress -y
# Red Hat
sudo yum install stress -y
# Arch derivates
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

Además, se debe recordar del requerimiento denominado "Balanceador de carga ", que implica el uso de una URL que apunta a un balanceador de carga. Esta página se carga a través de un proxy interno y se muestra en un iFrame. 

## Despliegue

Puede implementar este proyecto directamente en EC2 o utilizar Elastic Beanstalk. Se proporciona un archivo de ejemplo (.env.example) con las variables de entorno necesarias, pero se espera que, al realizar la implementación, se coloquen estas variables en las ubicaciones adecuadas, siguiendo las mejores prácticas para este tipo de aplicaciones.

Si desea desplegar estas variables de entornos de forma local, necesita crear un archivo `.env ` y agregar el contenido del archivo de ejemplo reemplazando los datos de las configuraciones reales.

Para preparar el proyecto para el despliegue deben seguir los siguientes pasos:

```bash
npm run build
```

Este comando nos creará el zip dentro de la carpeta, listo para subir a la nube.

**Recomendación:** Cada vez que corra el anterior comando, asegurse de eliminar la carpeta .next, para que los cambios puedan surtir efectos.

Consulte la [documentación de implementación de Next.js](https://nextjs.org/docs/deployment) para obtener más detalles.

## Bases de datos

En la carpeta database, se encuentra un [archivo sql](https://github.com/ErunamoJAZZ/servicios-nube-proyecto-2024/blob/main/database/ddl-estudiante.sql), el cual tiene el script para crear la tabla y registrar los datos dummy en la bases de datos.

## Imágenes del Bucket S3

En el siguiente [link](https://drive.google.com/drive/folders/1lZPTUXAaDkVg0PWpys5wQ3OcJbO-4V9f?usp=share_link), encuentran las imágenes que deben subir al bucket.

## Errores en este proyecto

Si detecta algún error en este proyecto, le instamos a informarlo a través de los canales oficiales del curso. También estamos abiertos a recibir Pull Requests, aunque no se garantiza su aceptación.
