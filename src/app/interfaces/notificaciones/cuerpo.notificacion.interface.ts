export interface ICuerpoNotificacion {
    
    id?: number;
    title?: string;
    body?: string;
    iconColor?: string;
    extra?: {
        data: any;
    };

}