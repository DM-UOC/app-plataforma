import { IAuditoria } from './auditoria.interface';
import { IMenu } from './menu.interface';

export interface ICatalogo {

    _id: string;
    codigo: string;
    descripcion: string;
    valor1: number;
    valor2: number;
    valor3: number;
    cadena1: string;
    cadena2: number;
    cadena3: number;
    arreglo1: IMenu;
    auditoria: IAuditoria;

}