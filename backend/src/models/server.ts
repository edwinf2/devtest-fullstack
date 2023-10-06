import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import db from '../db/conexion';
import routerUsuario from '../routes/usuario';
import routerCliente from '../routes/cliente';
import routerPedido from '../routes/pedido';

export class Server {
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConexion();
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`App listening on port ${this.port} `);
        });
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                message: 'Listening on port'
            })
        })
        this.app.use("/api/usuarios", routerUsuario);
        this.app.use("/api/clientes", routerCliente);
        this.app.use("/api/pedidos", routerPedido);
    }

    middlewares() {
        //parsear el body
        this.app.use(express.json());
        this.app.disable("x-powered-by");

        //cors
        this.app.use(cors());
    }

    async dbConexion() {

        try {
            await db.authenticate();
            console.log('Base de datos conectada')            
        } catch (error) {
            console.log(error)
            console.log("Error al conectarse a la bd")
        }
    }

}