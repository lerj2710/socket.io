//variables 
const lblOnline   = document.querySelector('#lblOnline');
const lblOffline  = document.querySelector('#lblOffline');
const textMensaje = document.querySelector('#textMensaje');
const btnEnviar   = document.querySelector('#btnEnviar');  

const socket = io(); 


socket.on('connect', ()=>{
    // console.log('conectado');

    lblOnline.style.display = ''
    lblOffline.style.display = 'none'
})

socket.on('disconnect', ()=>{
    // console.log('desconectado del servidor')

    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
  
})
//escuchar desde el servidor
socket.on('enviar-mensaje', payload=> {
    console.log(payload)
})
//enviar mensaje al servidor
btnEnviar.addEventListener('click', ()=>{
    const mensaje = textMensaje.value;
    const payload = {
        mensaje,
        id:'1234a',
        fecha: new Date().getTime()
    }
     socket.emit('enviar-mensaje', payload, (id)=>{
         console.log('desde el servidor',id)
     }  );
})

