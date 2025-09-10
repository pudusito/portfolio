// === Celdas internas del canvas ===
let tileSize= 32; // tamaño total de celdas, esto es al cuadrado
let filas= 16; //filas
let columnas= 16; //columnas

// === Tamaño del canvas ===  alto y ancho.
let canvas; // declaro una variable sin asignarle valor(canvas es la variable que va a guardar el <canvas> del HTML.)
let canvasWidth = tileSize * columnas; // 32 * 16 = 512
let canvasHeight= tileSize * filas; // 32 * 16 = 512 // El canvas final será de 512x512 píxeles.
let context; 


//auto.

//dimension de rect canvas nave
let autoWidth = tileSize*1.5; //32 pixeles
let autoHeigth= tileSize*3;   // 32*2 pixeles


//posicionamiento en el canvas
let autoX = tileSize * columnas/2 - tileSize; // Centra la nave horizontalmente
let autoY = tileSize * filas - tileSize*3; // La posiciona 2 filas desde abajo (fila 14)

//Este objeto encapsula(define) las propiedades del canvas necesarias para ubicar y dibujar la nave.
let auto = { 
    x : autoX,
    y : autoY,
    width : autoWidth, 
    height : autoHeigth 
};


//imagen de la nave
let autoImg; 

// movimiento("velocidad")
let autoVelocityX = tileSize; 

// === Dimensiones del sprite del auto ===
const spriteCols = 5;
const spriteRows = 5;
const spriteWidth = Math.floor(830 / spriteCols);   
const spriteHeight = Math.floor(830 / spriteRows); 

// === Coordenadas del sprite a mostrar (cuadro dentro del atlas) ===
let frameX = 0;
let frameY = 0; // fila inferior (auto visto desde arriba)


//enemy
let alienArray = [];
let alienWidth = tileSize*3; // determinamos los pixeles  de ancho
let alienHeight = tileSize*1.5; // determinamos los pixeles  de alto
let alienX = tileSize;
let alienY = tileSize;
let alienImg;

let alienFilas = 2;
let alienColumnas = 3;
let alienVelocityX = 2; //alien moving speed
let alienVelocityY = 0.5;

let maxAliens = 10;
let alienCount= 0;


//funcionalidad
let score = 0;
let Start = false;
let gameOver = false;
let nivel = 0;


//fondo
let fondoImg;

// Obtener el contenedor del juego
let botonContainer = document.getElementById("botonContainer");

//* === Crear botón de inicio ===
let botonInicio = document.createElement("button");
botonInicio.textContent = "Iniciar Juego";
botonInicio.classList.add("iniciar");
document.body.appendChild(botonInicio);

// === Botón de reinicio ===
let botonReiniciar = document.createElement("button");
botonReiniciar.textContent = "Reiniciar Juego";
botonReiniciar.classList.add("reiniciar");
document.body.appendChild(botonReiniciar);

// Agregar botones al contenedor del canvas
botonContainer.appendChild(botonInicio);
botonContainer.appendChild(botonReiniciar);


//**(Carga del canvas y dibujo de la nave)Funcion que nos permite dibujar en el canvas *esto es similar a crear ventana en python//
window.onload = function() { 
    canvas= document.getElementById("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    context = canvas.getContext("2d") //used for drawing on the canvas

    //dibujamos un rectangulo(prueba visual)
    //context.fillStyle="black";
    //context.fillRect(auto.x, auto.y, auto.width, auto.height);

    //CARGAMOS LAS IMAGENES!

    fondoImg= new Image();
    fondoImg.src= "/PuduInvaders/ASSETS/fondo.png";

    autoImg = new Image();
    autoImg.src = "/PuduInvaders/ASSETS/auto.png";

    autoImg.onload = function() {
        loopInicio(); // Esperar inicio
        botonInicio.onclick = function () {
            Start = true;
            botonInicio.style.display = "none";
            botonReiniciar.style.display = "none";
        };
        // solo inicializamos el bucle, el dibujo se hace en `update`
        requestAnimationFrame(update);
    }
    botonInicio.style.display = "block";
    botonReiniciar.style.display = "none";

    alienImg = new Image();
    alienImg.src = "/PuduInvaders/ASSETS/puduasset1.png"
    //createAliens();
    // Generación progresiva de aliens
    function spawnAlien() { //primer alien
    let alien = {
        img: alienImg,
        x: Math.random() * (canvasWidth - alienWidth),
        y: 0,
        width: alienWidth,
        height: alienHeight,
        alive: true,
        velocityX: (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2)
    }
    alienArray.push(alien);
}


    setInterval(() => {
        if (!gameOver && alienArray.length < maxAliens) {
            spawnAlien();
        }
    }, 3000); // cada 3 segundos


    requestAnimationFrame(update);
    document.addEventListener("keydown", moveauto)//keydown solo al presionar.
    //document.addEventListener("keyup", moveauto)//keyup la tecla necesita soltarse

}

//*Funcion Start */
function loopInicio() {
    if (!Start) {
        requestAnimationFrame(loopInicio);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(fondoImg, 0, 0, canvasWidth, canvasHeight);
    }
}

//*(*********GAMELOOP*******) Funcion para recargar el frame de la imagen. *//
function update() {
    requestAnimationFrame(update);
    if (!Start) return;
    if (gameOver) {
        context.fillStyle = "red";
        context.font = "30px impact";
        context.fillText("GAME OVER", canvasWidth / 2 - 65, canvasHeight / 2);
        botonReiniciar.style.display = "block";
        return;
    }
    context.clearRect(0, 0, canvas.width, canvas.height);

    //fondo
    context.drawImage(fondoImg, 0, 0, canvasWidth, canvasHeight);

    //score
    context.fillStyle="white";
    context.font="16px courier";
    context.fillText(score, 5, 20);


    //car
    //context.drawImage(image, sx, Sy, sw, sh, dx, dy, dw, dh);  
    context.drawImage(autoImg, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, auto.x, auto.y, auto.width, auto.height);

    let autoHitbox = {
        x: auto.x + 15,
        y: auto.y + 19,
        width: auto.width - 30,
        height: auto.height - 36
    };
/*
    context.strokeStyle = "red"; // color del borde
    context.lineWidth = 2;       // grosor del borde
    context.strokeRect(auto.x, auto.y, auto.width, auto.height);
    context.strokeStyle = "blue";
    context.strokeRect(autoHitbox.x, autoHitbox.y, autoHitbox.width, autoHitbox.height);
   */ 

    //enemy pudu
    for (let i = 0; i < alienArray.length; i++) {
        let alien = alienArray[i];
        if (alien.alive){

            //movimiento horizontal
            alien.x += alien.velocityX;
            //Movimiento constante vertical
            alien.y += alienVelocityY;

            // Si toca bordes izquierdo/derecho, invierte dirección horizontal
            if (alien.x <= 0 || alien.x + alien.width >= canvas.width) {
                alien.velocityX *= -1;
                alien.x += alien.velocityX * 2; // evitar que quede pegado
            }

            //cambiar direccion aleatoria horizontal
            if (Math.random() < 0.01) {
            alien.velocityX *= -1;
            }

            let alienHitbox = {
                x: alien.x + 27,
                y: alien.y +8,
                width: alien.width -50,
                height: alien.height -20
            };

           //dibuja el alien
           //context.drawImage(image, sx, Sy, sw, sh, dx, dy, dw, dh);  
            context.drawImage(alienImg, alien.x, alien.y, alien.width, alien.height);
/*
            context.strokeStyle = "yellow";
            context.strokeRect(alien.x, alien.y, alien.width, alien.height);
            context.strokeStyle = "red";
            context.strokeRect(alienHitbox.x, alienHitbox.y, alienHitbox.width, alienHitbox.height);
        */
            // Si colisiona con el auto → game over
            if (detectarColisiones(alienHitbox, autoHitbox)) {
                gameOver = true;
            }
            // Condición eliminar nave si sale del canvas
            if (alien.y > canvas.height) {
                alien.alive = false;
                score += 1 ;
            }
            // Eliminar aliens muertos o fuera del canvas
            alienArray = alienArray.filter(alien => alien.alive);

        }
    }
}
    


    //siguiente nivel
    if (alienCount == 0 && Start && !gameOver) {
        if (nivel > 0){
        score += alienColumnas * alienFilas;  //incrementa el numero de enemigos en columnas y filas en 1
        alienColumnas = Math.min(alienColumnas + 1, columnas/2 -2); //limita a 16/2 -2 = 6
        alienFilas = Math.min(alienFilas + 1, filas-4);//limita a 16-4 = 12
        }  

        if (alienVelocityX > 0) {
            alienVelocityX += 0.2; //increase the alien movement speed towards the right
        }
        else {
            alienVelocityX -= 0.2; //increase the alien movement speed towards the left
        }
        
        for (let i = 0; i < alienFilas * alienColumnas; i++) {
            createAliens();
        }
        nivel++;
    }


//***Funcion mover auto */
function moveauto(e) {
    if (gameOver){
        return;
    }
     // Movimiento horizontal
    if (e.code == "ArrowLeft" || e.code == "KeyA" && auto.x - autoVelocityX >= 0){
        auto.x -= autoVelocityX; //mueve a la izquierda en celdas  
    }
    else if (e.code == "ArrowRight" || e.code == "KeyD" && auto.x + autoVelocityX + autoWidth <= canvas.width){
        auto.x += autoVelocityX; // mueve a la derecha en celdas
    }
    // Movimiento vertical
    else if (e.code == "ArrowUp" || e.code == "KeyW" && auto.y - autoVelocityX >= canvas.height / 2) {
        auto.y -= autoVelocityX; //mueve arriba
    }
    else if (e.code == "ArrowDown" || e.code == "KeyS" && auto.y + autoVelocityX + auto.height <= canvas.height) {
        auto.y += autoVelocityX; //mueve abajo
    }

}
//*crear Pudus */
function createAliens() {
    if (alienArray.length >= 20) return; // Máximo de aliens en pantalla

    let alien = {
        img : alienImg,
        x : Math.random() * (canvasWidth - alienWidth),
        y : -alienHeight, // Comienza fuera del canvas (arriba)
        width : alienWidth,
        height : alienHeight,
        alive : true,
        velocityX : (Math.random() < 0.5 ? -1 : 1) * (1 + Math.random() * 2)
    };
    alienArray.push(alien);
    alienCount++;
}

//* Coliciones */
function detectarColisiones(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}

// === Reiniciar juego ===
botonReiniciar.onclick = function () {
    Start = true;
    gameOver = false;
    nivel = 0;
    score = 0;
    alienArray = [];
    alienColumnas = 3;
    alienFilas = 2;
    alienVelocityX = 2;

    auto.x = autoX;
    auto.y = autoY;

    botonReiniciar.style.display = "none";
    botonInicio.style.display = "none";
    loopInicio();
};