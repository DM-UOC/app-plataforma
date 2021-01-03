import { IReferenciaDatos } from "../comuns/referencia.datos.interface";

export interface ITarea {

    readonly _id?: string;
    profesor?: IReferenciaDatos;
    descripcion?: string;
    observacion?: string;
    fecha_crea?: Date;
    fecha_entrega?: Date;
    
}