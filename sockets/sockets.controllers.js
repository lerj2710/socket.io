
const socketsController =  ( socket ) => {

    console.log('cliente conectado', socket.id );

    socket.on('disconnect', () =>{
        // console.log('cliente desconectado')
    });

    socket.on('enviar-mensaje', ( payload, callback ) => {

        socket.broadcast.emit('enviar-mensaje', payload );
        const id = 1234
        callback( id )
    });
}

module.exports = {
    socketsController
}