const startButton=document.querySelector('.startButton'); //Captura el botón para iniciar el juego
const article=document.querySelector('article'); //Captura el article para hacer aparecer el juego
const inicioJuego=document.getElementById('inicio-juego'); //Captura el inicioJuego para hacerlo desaparecer

const mensaje = document.getElementById("mensaje"); // Captura el <p> para mostrar los mensajes
const cells = document.querySelectorAll(".cell"); // Captura todos los div con clase "cell"
const resetButton = document.getElementById("reset"); // Captura el botón de reiniciar
const tatetiGrid=document.querySelector('.tateti'); //Capturo el ta te ti para el display none
const creditosMusica=document.querySelector('.creditosMusica'); //Capturo el div con la info. sobre la canción

let tateti = ["", "", "", "", "", "", "", "", ""]; // Array que representa el tablero de 9 celdas
let currentPlayer = "Tele de tubo"; // El jugador actual (empieza con "Tele de tubo")
let gameActive = true; // Controla si el juego está activo o no

//Capturo los audios para cada momento
let audioFondo=document.getElementById('audio-fondo');
let audioWinner=document.getElementById('audio-winner');
let audioEmpate=document.getElementById('audio-empate');


mensaje.textContent = "Turno de Tele de tubo"; // Muestra el mensaje de inicio

// Función que maneja el click en las celdas
let handleClick = (event) => {
    // Si el juego terminó, no hacer nada
    if (!gameActive) return;

    // Obtiene la celda en la que se hizo click
    let cell = event.target;

    // Encuentra el índice de la celda clickeada
    let indice = Array.from(cells).indexOf(cell);

    // Si la celda ya está ocupada, no hacer nada
    if (tateti[indice] !== "") return;

    // Marca la celda con el símbolo del jugador actual
    tateti[indice] = currentPlayer;

    // Crea un nuevo elemento img para colocar la imagen
    let img = document.createElement("img");

    // Asigna la imagen correspondiente al jugador actual
    if (currentPlayer === "Tele de tubo") {
        img.src = "img/tele.png"; 
        img.alt = "Tele de tubo";
    } else {
        img.src = "img/hdmi.png"; 
        img.alt = "HDMI";
    }

    cell.append(img); // Agrega la imagen a la celda- uso append para que lo inserte dentro del div
    cell.classList.add("taken"); // Marca la celda como ocupada para no permitir más clicks

    

    // Verifica si hay un ganador
    if (chequearGanador()) {
        let winnerImg = document.createElement("img"); // Crea una nueva imagen
    
        if (currentPlayer == 'Tele de tubo') { //Imágenes de los ganadores
            winnerImg.src = "img/winner-tele.png"; 
            winnerImg.alt = "Winner tele de tubo!";
        
        } else {
            winnerImg.src = "img/winner-hdmi.png"; 
            winnerImg.alt = "Winner HDMI!";
        }
    
        mensaje.textContent = ''; // Limpia mensaje antes de agregar la imagen
        mensaje.append(winnerImg); // Agrega la imagen del ganador
        tatetiGrid.style.display='none'; //Display none para que aparezca el mensaje
        creditosMusica.style.display='none'
        audioFondo.pause(); //Parar audio de fondo
        audioWinner.play(); //Reproduzco el audio de ganador
        gameActive = false; // Termina el juego
        return;
    }
    
    // Verifica si todas las celdas están llenas (empate)
    if (tateti.every(cell => cell !== "")) {
        let empateImg = document.createElement("img"); // Crea una nueva imagen
        empateImg.src = "img/empate.gif"; 
        empateImg.alt = "Empate!";
        

        mensaje.textContent = ''; // Limpia mensaje antes de agregar la imagen
        mensaje.append(empateImg); // Agrega la imagen del ganador
        tatetiGrid.style.display='none';
        creditosMusica.style.display='none'
        audioFondo.pause();
        audioEmpate.play(); //Reproduzco el audio
        gameActive = false; // Termina el juego
        return;
    }

    // Cambia al siguiente jugador
    currentPlayer = currentPlayer === "Tele de tubo" ? "HDMI" : "Tele de tubo";

    // Muestra el mensaje con el turno del siguiente jugador
    mensaje.textContent = `Turno de ${currentPlayer}`;
};

// Función que verifica si hay un ganador
let chequearGanador = () => {
    const posibilidadesGanar = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas
        [0, 4, 8], [2, 4, 6]             // Diagonales
    ];

    // Recorre todas las combinaciones posibles
    for (let i = 0; i < posibilidadesGanar.length; i++) {
        const [a, b, c] = posibilidadesGanar[i];

        // Si las tres celdas de la combinación son iguales y no están vacías, es un ganador
        if (tateti[a] !== "" && tateti[a] === tateti[b] && tateti[a] === tateti[c]) {
            return true; // Hay un ganador
        }
    }

    return false; // No hay ganador
};

// Función que reinicia el juego
let resetGame = () => {
    tateti = ["", "", "", "", "", "", "", "", ""]; // Reinicia el tablero
    gameActive = true; // El juego está activo nuevamente
    currentPlayer = "Tele de tubo"; // Empieza con el jugador "X"
    mensaje.textContent = "Turno de Tele de tubo"; // Muestra el mensaje de inicio
    tatetiGrid.style.display='flex';
    creditosMusica.style.display='block'

    if(audioEmpate.play()){ //Detengo todos los audios
        audioEmpate.pause();
    }if(audioWinner.play()){
        audioWinner.pause()
    }
    audioFondo.play();

    // Limpia el contenido de las celdas, elimina la clase "taken" y las imágenes
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = ""; // Limpiar el contenido de la celda
        cells[i].classList.remove("taken"); // Eliminar la clase "taken"

        // Eliminar cualquier imagen dentro de la celda
        let img = cells[i].querySelector("img");
        if (img) {
            img.remove();
        }
    }
};

// Añadir event listeners a las celdas utilizando un bucle for tradicional
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", handleClick);
}

// Añadir el event listener al botón de reiniciar
resetButton.addEventListener("click", resetGame);

//Funcionalidad del botón de inicio de juego
startButton.addEventListener('click', e => { 
    article.style.display='flex';
    inicioJuego.style.display='none';
    if (audioFondo.paused) {
        audioFondo.loop = true;  // Para que suene en bucle
        audioFondo.play();
    }
});