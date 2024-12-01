let main = document.querySelector('main');//Capturo el elemento main
let emergenciaWindow= document.querySelector('.click'); //Capturo el párrafo para activar la emergencia de ventanas


//Hago la interacción con el fondo
main.addEventListener('mouseover', e => { //Interacción con el fondo
    main.style.backgroundImage = 'url(./img/fondo2.gif)';
    main.style.backgroundSize = 'contain';
});

main.addEventListener('mouseout', e => {
    main.style.backgroundImage = ''; // Elimina el fondo
});


// Hago la interacción para la emergencia de las ventanas con videos

emergenciaWindow.addEventListener('click', e => {
    // URLs de los videos
    let video1 = './img/cybersecta-caratula.gif';
    let video2 = 'https://www.youtube.com/watch?v=o2sHkMmTx6k&list=LL&index=3';
    let video3 = 'https://www.youtube.com/watch?v=Qvlcf1WgpK4&list=LL&index=6';

    // Abrir tres ventanas en diferentes posiciones

    window.open(video1, 'ventana1', 'width=400,height=300,left=100,top=100');
    window.open(video2, 'ventana2', 'width=400,height=300,left=500,top=150');
    window.open(video3, 'ventana3', 'width=400,height=300,left=900,top=200');
});

console.log('Hola, sujeto extraño! Esperamos que te guste. Podés pasarnos dinero al alias "maligna.sospechosa". Te queremos mucho <3')