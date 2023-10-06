import {Request, Response} from "express";
import Pedido from "../models/pedido";

export const getPedidos = async (req: Request, res: Response) => {
    const listaPedidos = await Pedido.findAll();
    res.json(listaPedidos);
}

export const getPedido = async (req: Request, res: Response) => {
    const {codigo} = req.params;
    const pedido = await Pedido.findByPk(codigo);

    if (pedido) {
        res.json(pedido);
    } else {
        res.status(404).json({
            message: `No existe el pedido ${codigo}`
        })
    }
}

export const guardarPedido = async (req: Request, res: Response) => {
    const {body} = req;

    try {
        await Pedido.create(body)
    
        res.json({
            message: "El pedido ha sido creado"
        })        
    } catch (error) {
        console.log(error)
        console.log("Ocurrio un error!")
    }

}

export const actualizarPedido = async (req: Request, res: Response) => {
    const {body} = req;
    const {codigo} = req.params;

    try {
        const pedido = await Pedido.findByPk(codigo);
    
        if (pedido) {
            await pedido.update(body);
            res.json({
                message: "pedido actualizado con exito"
            });
    
        } else {
            res.status(404).json({
                message: `No existe el pedido ${codigo}`
            })
        }        
    } catch (error) {
        console.log(error)
        console.log("Ocurrio un error!")
    }
}

export const deletePedido = async (req: Request, res: Response) => {
    const {codigo} = req.params;
    const pedido = await Pedido.findByPk(codigo);
    
    if (!pedido) {
        res.status(404).json({
            message: `No existe el pedido ${codigo}`
        })
    } else {
        await pedido.destroy();
        res.json({
            message: "El pedido fue eliminado con exito"
        })
    }
    
}