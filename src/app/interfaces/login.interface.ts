export interface ILogin {

    usuario: string;
    clave: string;

}

export interface ILogueado {

    esLogueado: boolean;
    
}

export interface IUsuarioDataSocket {
    
    usuario?: string;
    nombres?: string;
    codigo_perfil?: number;
    perfil_id?: number;
    perfil_descripcion?: string;
    perfil_menu?: string;

}

export interface IUsuarioToken {

    readonly id?: string;
    busy?: boolean;
    token?: IUsuarioDataSocket

}

export interface IUsuario {

    readonly _id?: string;
    nombre?: string;
    apellido?: string;
    nombre_completo?: string;
    usuario?: string;
    correo?: string;
    imagen_url?: string;
    
}