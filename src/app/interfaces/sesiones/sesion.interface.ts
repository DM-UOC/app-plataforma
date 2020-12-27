export interface ISesion {

    readonly _id?: string;
    profesor_id?: string;
    sesion_identificador?: string;
    descripcion?: string;
    observacion?: string;
    fecha_hora_inicio?: Date;
    fecha_hora_final?: Date;
    representantes: {
        participante_id: string,
        nombre_completo: string;
        hijos: {
            nombre_completo: string;
            edad: number;
        }[];
    } [];
}