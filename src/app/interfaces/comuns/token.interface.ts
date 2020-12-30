export interface IToken {

    readonly codigo_perfil?: number;
    readonly exp?: number;
    readonly iat?: number;
    readonly nombres?: string;
    readonly perfil_descripcion?: string;
    readonly perfil_menu?: string;
    readonly usuario?: string;

}