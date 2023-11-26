// /*Establecemos funciones con Id y Clases*/

// let coin = document.querySelector(".coin");
// let startBtn = document.querySelector("#start-button");
// let resetBtn = document.querySelector("#reset-button");

// /*Inicializamos Heads y Tails a 0*/

// let heads = 0;
// let tails = 0;

// startBtn.addEventListener("click", () => {
    
//     /*Almaceno los valores en i*/
//     /*Math.Random genera un numero aleatorio*/
//     let i = Math.floor(Math.random() * 2);

//     coin.style.animation = "none";    

//     if (i) {
//         setTimeout(function () {
//             coin.style.animation = "spin-heads  3s forwords";
//         }, 100);
//         heads++;
//     } else {

//          setTimeout(function () {
//             coin.style.animation = "spin-tails  3s forwords";
//         }, 100);
//         tails++;

//     }
//     setTimeout(updateStatds, 3000);// 1 seconds
//     disableButton
// })