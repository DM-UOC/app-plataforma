export interface IAuditoria {
    
    readonly _id?: string;
    fecha_inicio?: Date;
    fecha_final?: Date;
    descripcion?: string;
    puntaje_objetivo?: number;
    auditoria?: IAuditoria;

}