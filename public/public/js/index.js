
    


        /*Establecemos funciones con Id y Clases*/


        let coin = document.querySelector(".coin");
        let flipBtn = document.querySelector("#flip-button");
        let resetBtn = document.querySelector("#reset-button");


// /*Inicializamos Heads y Tails a 0*/
        let heads = 0;
        let tails = 0;

        flipBtn.addEventListener("click", () => {
            let i = Math.floor(Math.random() * 2);

            coin.style.animation = "none";
            console.log(flipBtn);
            if (i) {

                setTimeout(function(){
                coin.style.animation = 'spin-heads 3s forwords ';   
                }, 100);
                heads++;
            }else {
                setTimeout(function(){
                coin.style.animation = 'spin-tails 3s forwards';   
                }, 100);
                tails++;

            }

            setTimeout(updateStats, 3000);
            disableButton();

        })
        function updateStats(){
            document.querySelector("#heads-count").textContent = `Heads : ${heads}`;
            document.querySelector("#tails-count").textContent = `Tails : ${tails}`;
}
        
        function disableButton(){

            flipBtn.disable = true;
            setTimeout(function(){

            flipBtn.disable = false;
            },500);
        }

        /*Reset Button*/

        resetBtn.addEventListener("click", () =>{

            coin.style.animation="none";
            heads=0;
            tails=0;
            updateStats();
        })
        
        

