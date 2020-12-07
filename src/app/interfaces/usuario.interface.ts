export interface IUsuario {

    readonly _id?: string;
    nombre?: string;
    apellido?: string;
    nombre_completo?: string;
    usuario?: string;
    correo?: string;
    usuario_imagen?: {
        data: any;
        contentType: string;
    };
    imagen_url?: string;    
}