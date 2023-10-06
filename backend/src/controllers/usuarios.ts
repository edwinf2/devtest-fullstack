import {Request, Response} from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
    const listaUsuarios = await Usuario.findAll()
    res.json(listaUsuarios)
}

export const getUsuario = async (req: Request, res: Response) => {
    const {codigo} = req.params;
    const usuario = await Usuario.findByPk(codigo);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({
            message: `No existe el usuario ${codigo}`
        })
    }
}

export const guardarUsuario = async (req: Request, res: Response) => {
    const {body} = req;

    try {
        await Usuario.create(body)
    
        res.json({
            message: "El Usuario ha sido creado"
        })        
    } catch (error) {
        console.log(error)
        console.log("Ocurrio un error!")
    }

}

export const actualizarUsuario = async (req: Request, res: Response) => {
    const {body} = req;
    const {codigo} = req.params;

    try {
        const usuario = await Usuario.findByPk(codigo);
    
        if (usuario) {
            await usuario.update(body);
            res.json({
                message: "Usuario actualizado con exito"
            });
    
        } else {
            res.status(404).json({
                message: `No existe el usuario ${codigo}`
            })
        }        
    } catch (error) {
        console.log(error)
        console.log("Ocurrio un error!")
    }



}

export const deleteUsuario = async (req: Request, res: Response) => {
    const {codigo} = req.params;
    const usuario = await Usuario.findByPk(codigo);
    
    if (!usuario) {
        res.status(404).json({
            message: `No existe el usuario ${codigo}`
        })
    } else {
        await usuario.destroy();
        res.json({
            message: "El usuario fue eliminado con exito"
        })
    }
    
}