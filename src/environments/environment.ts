// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const CREDENCIALES_SERVIDOR = {
  SERVER: 'http://localhost',
  PUERTO: 3010
};

export const SEGURIDAD_CONTROLLER = {
  CONTROLLERS: {
    COMUN: '/seguridad',
    CRUD: {
      INICIO_SISTEMA: '/verifica',
      LOGIN: '/login'
    }
  },
  MENSAJES: {
    LOGIN: {
      HEADER: 'Login usuario',
      INCORRECTO: {
        CSSCLASS: 'alert-danger',
        SUBHEADER: 'Datos incorrectos',
        MESSAGE: '¡Las credenciales son incorrectas. Verifique nuevamente!'
      },
      BUTTONS: ['OK']
    }
  }
}

export let OBJECTO_MENSAJES_ALERTA = {
    cssClass: '',
    header: '',
    subHeader: '',
    message: '',
    buttons: null
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
