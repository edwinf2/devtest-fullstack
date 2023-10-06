export interface Pedido {
    codigo?: string;
    nombre: string;
    descripcion: string;
    precio: number;
    cantidad: number;
    total: number;
    imagen?: string;
}