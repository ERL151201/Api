const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {

    Notification
            .requestPermission()
            .then(resultado =>{
                console.log('El resultado es', resultado);
            })

});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () =>  {
        if(Notification.permission === 'granted'){
         const notification = new Notification('Esta es la notificacion', {
                icon: 'img/pollo.jpg',
                body: 'Software Pollo'
            })
            notification.onclick = function(){
                window.open('https://www.facebook.com/Software-Pollo-104400311386728/?view_public_for=104400311386728')
            }
        }
});