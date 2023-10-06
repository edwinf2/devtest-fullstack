import {Router} from "express";
import { actualizarCliente, deleteCliente, getCliente, getClientes, guardarCliente } from "../controllers/cliente";

const routerCliente = Router();

//Clientes
routerCliente.get('/', getClientes)
routerCliente.get('/:codigo', getCliente)
routerCliente.post('/', guardarCliente)
routerCliente.put('/:codigo', actualizarCliente)
routerCliente.delete('/:codigo', deleteCliente)



export default routerCliente;