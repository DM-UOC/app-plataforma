import { IAuditoria } from '../comuns/auditoria.interface';

export interface IParcial {

    readonly _id?: string;
    fecha_inicio?: Date;
    fecha_final?: Date;
    descripcion?: string;
    puntaje_objetivo?: number;
    auditoria?: IAuditoria;
    
}
