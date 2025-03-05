let main = document.querySelector('main');//Capturo el elemento main
let emergenciaWindow= document.querySelector('.click'); //Capturo el párrafo para activar la emergencia de ventanas
let audio= document.querySelector('.posicionar-mouse');//Capturo el párrafo para activar el audio
let pista= document.getElementById('audio-cyber'); //Capturo la pista para reproducir


//Hago la interacción con el fondo
main.addEventListener('mouseover', e => { //Interacción con el fondo
    main.style.backgroundImage = 'url(./img/fondo2.gif)';
    main.style.backgroundSize = 'contain';
});

main.addEventListener('mouseout', e => {
    main.style.backgroundImage = ''; // Elimina el fondo
});

//
audio.addEventListener('mouseover', e => { //Interacción con el fondo
    pista.play();
});

audio.addEventListener('mouseout', e => { //Interacción con el fondo
    pista.pause();
    
});

// Hago la interacción para la emergencia de las ventanas con videos

emergenciaWindow.addEventListener('click', e => {
    // URLs de los videos
    let video1 = './img/cybersecta-caratula.gif';
    let video2 = 'https://www.youtube.com/watch?v=_MxDbcURv-A';
    let video3 = 'https://www.youtube.com/watch?v=Qvlcf1WgpK4&list=LL&index=6';

    // Abrir tres ventanas en diferentes posiciones

    window.open(video1, 'ventana1', 'width=430,height=330,left=900,top=90');
    window.open(video2, 'ventana2', 'width=430,height=330,left=500,top=150');
    window.open(video3, 'ventana3', 'width=430,height=330,left=100,top=150');
});


//AGREGAR EL RESPONSIVE
console.log('Hola, sujeto extraño! Esperamos que te guste. Podés pasarnos dinero al alias "maligna.sospechosa". Te queremos mucho <3')