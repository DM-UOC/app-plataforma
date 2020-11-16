// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

export const STORAGE = {
  TOKEN: {
    KEY: 'PlaT4forM4_L1c3nC1A*kEY*'
  }
}

export const CREDENCIALES_SERVIDOR = {
  SERVER: 'http://localhost',
  PUERTO: 3010
};

export const SEGURIDAD_CONTROLLER = {
  CONTROLLERS: {
    COMUN: '/seguridades',
    CRUD: {
      INICIO_SISTEMA: '/verifica',
      LOGIN: '/login',
      MENU: '/menu'
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

export const PERFILES_CONTROLLER = {
  COMUN: {
    ADMINISTRDORES: '/administradores',
    PROFESORES: '/profesores',
    CLIENTES: '/clientes'
  },
  CRUD: {
    CREAR: '/crear',
    ACTUALIZAR: '/actualizar/:id',
    ELIMINAR: '/eliminar/:id'
  }
};

export const STRING_CONSTANTES = {
  PERFILES: {
    ADMINISTRADOR: 'TPS_ADMIN',
    PROFESOR: 'TPS_PROFESOR',
    CLIENTE: 'TPS_CLIENTE'
  }
}

export const OBJECTO_MENSAJES_ALERTA = {
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
