import {Request, Response} from "express";
import Cliente from "../models/cliente";

export const getClientes = async (req: Request, res: Response) => {
    const listaClientes = await Cliente.findAll();
    res.json(listaClientes);
}

export const getCliente = async (req: Request, res: Response) => {
    const {codigo} = req.params;
    const cliente = await Cliente.findByPk(codigo);

    if (cliente) {
        res.json(cliente);
    } else {
        res.status(404).json({
            message: `No existe el cliente ${codigo}`
        })
    }
}

export const guardarCliente = async (req: Request, res: Response) => {
    const {body} = req;

    try {
        await Cliente.create(body)
    
        res.json({
            message: "El cliente ha sido creado"
        })        
    } catch (error) {
        console.log(error)
        console.log("Ocurrio un error!")
    }

}

export const actualizarCliente = async (req: Request, res: Response) => {
    const {body} = req;
    const {codigo} = req.params;

    try {
        const cliente = await Cliente.findByPk(codigo);
    
        if (cliente) {
            await cliente.update(body);
            res.json({
                message: "Usuario actualizado con exito"
            });
    
        } else {
            res.status(404).json({
                message: `No existe el cliente ${codigo}`
            })
        }        
    } catch (error) {
        console.log(error)
        console.log("Ocurrio un error!")
    }
}

export const deleteCliente = async (req: Request, res: Response) => {
    const {codigo} = req.params;
    const cliente = await Cliente.findByPk(codigo);
    
    if (!cliente) {
        res.status(404).json({
            message: `No existe el cliente ${codigo}`
        })
    } else {
        await cliente.destroy();
        res.json({
            message: "El cliente fue eliminado con exito"
        })
    }
    
}