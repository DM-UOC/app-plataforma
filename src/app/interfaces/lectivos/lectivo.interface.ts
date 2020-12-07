import { IAuditoria } from '../comuns/auditoria.interface';
import { IParcial } from './parcial.interface';

export interface ILectivo {

    readonly _id?: string;
    fecha_inicio?: Date;
    fecha_final?: Date;
    descripcion?: string;
    puntaje_objetivo?: number;
    parciales?: IParcial[];
    auditoria?: IAuditoria;

}