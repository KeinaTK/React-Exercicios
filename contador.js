window.addEventListener("load", () => {
    
    const botao = document.getElementById("botao");
    
    botao.addEventListener("click", () => {
        
        let sec = 180;
        const countDiv = document.getElementById("timer");

        const secPass = () => {

            let min = Math.floor(sec/60);
            let secRestante = sec % 60;

            if (secRestante < 10) {
                secRestante = "0" + secRestante;
            }

            if (min < 10) {
                min = "0" + min;
            }

            countDiv.innerHTML = min + ":" + secRestante;

            if (sec > 0) {
                sec --;
            }
            else {
                countDiv.innerHTML = "Acabou!";
            }
        };
        
        const countDown = setInterval(() => secPass(), 1000);
    });
})