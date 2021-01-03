import { ICuerpoNotificacion } from "./cuerpo.notificacion.interface";

export interface INotificacion {

    readonly _id?: string;
    catalogo?: {
        _id?: string;
        descripcion?: string;
    };
    profesor: {
        _id: string;
        nombres: string;
    };
    representante: {
        _id: string;
        nombres: string;
    };
    descripcion?: string;
    cuerpo_notificacion?: ICuerpoNotificacion;

}