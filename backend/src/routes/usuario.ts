import {Router} from "express";
import { actualizarUsuario, deleteUsuario, getUsuario, getUsuarios, guardarUsuario } from "../controllers/usuarios";
const routerUsuario = Router();

//Usuarios
routerUsuario.get('/', getUsuarios)
routerUsuario.get('/:codigo', getUsuario)
routerUsuario.post('/', guardarUsuario)
routerUsuario.put('/:codigo', actualizarUsuario)
routerUsuario.delete('/:codigo', deleteUsuario)



export default routerUsuario;