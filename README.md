# PRUEBA TEST CON ANGULAR, NODE JS, EXPRESS JS, MYSQL

## BACKEND
Se crea el proyecto backend con node.js y express.js
Al descargar o clonar el proyecto, entrar al directorio backend y hacer lo siguiente:
- `npm install`
- verificar que se encuentren las librerias instaladas en package.json, tanto las de prodccion como las de desarrollo.
- `tsc --init`
- verificar el archivo tsconfig.json y que esté habilitado "outDir": "./dist"
- `npm run build o tsc`
- `npm run dev`
- verificar la conexcion con la BBDD (Se adjunta sql), cambiar las credenciales de acceso en /deb/conexion.ts

## FRONTEND
Se crea el proyecto frontend con Angular
Al descargar o clonar el proyecto, hacer lo siguiente:
- verificar la version de angular instalado. En este proyecto se utiliza la version 16.2.3
- `npm install`
- verificar que las librerias se encuentran instaladas en package.json
- `ng serve --o`
- Al ejecutar el comando anterior debe de abrir el navegador y verificar la funcionalidad del proyecto.


Muy importante verificar las conexiones con la BBDD en el backend y las url utilizadas en el server.ts


### CAPTURAS
- Images de usuarios

![Lista de usuarios](/images/usuario01.png)
![Agregar usuario](/images/usuario02.png)
![Registro usuario](/images/usuario03.png)
![Editar usuario](/images/usuario04.png)
![Usuario modificado](/images/usuario05.png)
![Borrar usuario](/images/usuario06.png)
![Borrar usuario](/images/usuario07.png)

- Clientes 
![Lista clientes](/images/clientes01.png)
-- Las demás funcionalidades son parecidas al de los usuarios

- Pedidos
![Lista pedidos](/images/pedidos01.png)
-- Las demás funcionalidades son parecidas al de los usuarios
