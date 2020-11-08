export interface ILogin {

    usuario: string;
    clave: string;

}

export interface ILogueado {

    esLogueado: boolean;
    
}

export interface IUsuarioToken {

    usuario: string;
    nombres: string;
    perfil_id: number;
    perfil_descripcion: string;
    perfil_menu: string;

}