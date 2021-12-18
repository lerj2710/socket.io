

const express = require('express');
const cors    = require('cors');
const { socketsController } = require('../sockets/sockets.controllers');

class Server{
    constructor(){
       this.app = express();      
       this.port = process.env.PORT;
       this.server = require('http').createServer(this.app);
       this.io = require('socket.io')(this.server);
       //AUTENTICACION
       this.paths = { }
  
       //middleware || vista de mi app
       this.middleware();
  
       //rutas de mi app
       this.routers();

       // sockets
       this.sockets();
    }

    middleware(){
     
        //CORS
        this.app.use(cors());

        //Diretorio publico 
        this.app.use( express.static('public'));
 
    }
    routers(){

        // this.app.use(this.paths.auth, require('../routes/auth'));
        
    }   

    sockets(){
       this.io.on("connection", socketsController );
    }
         
    listen(){
       this.server.listen( this.port, ()=>{
            console.log(`corriendo en puerto ${ this.port}`)
       })
    }

}

module.exports= Server;