## Uso del aplicativo

[Ionic](https://ionicframework.com/docs/components) Ionic framework TypeScript.

Para el uso del aplicativo debe seguir las siguientes pasos:

## Uso del Aplicativo

Las siguientes indicaciones están propuestas sólo para un ambiente de prueba o testing

Se coloca en la carpeta raíz del aplicativo, a continuación ejecutar los siguientes comandos

```bash
# instalación de librerías node_modules
$ npm i
```

```bash
# Compilación de código. Generará carpeta www
$ ionic build
```
# Android Studio

Se deberá descargar el IDE desde la página oficial [Android_Studio](https://developer.android.com/studio/)

## Ejecución de código mediante Ionic Capacitor

En el archivo capacitor.config.json se debera establecer la ruta en la cual se instaló Android Studio.

```
"linuxAndroidStudioPath": "/path/to/android-studio/bin/studio.sh"
```

En este caso se ha instalado bajo un ambiente Linux. Para Windows se deberá colocar la ruta en la que se instaló el IDE

Luego de instalar Android se procede a trabajar con Capacitor:

```bash
# Comando que agrega todas las librerías para trabajar con Android Studio
$npx cap add android
```
Ejecución de código dentro del IDE Android Studio

```bash
# Comando para ejecutar el código dentro del IDE Android Studio
$npx cap run android
```

Este proceso hará que se abra el IDE de Android, se coloque el código dentro del IDE, el cual posteriormente se ejecutará dentro del IDE Android Studio

![alt text](./src/assets/android_studio_compilacion.jpg)

Cuando haya terminado de colocar el código en el IDE, se procede a ejecutar el emulador de Android Studio ejecutando el botón "play".

Antes de ejecutar "play", hay que verificar si se tiene instalado las respectivas "Virtual Devices" para poder ejecutar el código.

![alt text](./src/assets/android_studio_virtual_machine.jpg)

Una vez que se ha verificado los VD se procede a dar play para que abra el emulador respectivo

![alt text](./src/assets/android_studio_emulador.jpg)

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
