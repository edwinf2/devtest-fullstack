import {Router} from "express";
import { actualizarPedido, deletePedido, getPedido, getPedidos, guardarPedido } from "../controllers/pedido";

const routerPedido = Router();

//Usuarios
routerPedido.get('/', getPedidos)
routerPedido.get('/:codigo', getPedido)
routerPedido.post('/', guardarPedido)
routerPedido.put('/:codigo', actualizarPedido)
routerPedido.delete('/:codigo', deletePedido)

export default routerPedido;