import { IUsuario } from "../login.interface";

interface IMaterias {

    readonly _id?: string;
    materia_id?: string;

}

interface IEstudios {

    readonly _id?: string;
    tipo_estudio?: {
        id: string;
        descripcion: string;
    };
    descripcion?: string;
    institucion?: string;
    fecha_graduacion?: Date;

}

export interface IProfesor {

    usuario_id?: string;
    materias?: IMaterias[];
    estudios?: IEstudios[];
    profesores: IUsuario[];
    
}