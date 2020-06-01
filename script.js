
/* Animação Javascript (signup)*/ 
    function changeScolor(){ /*muda a cor do botão para azul*/
        var showColor = document.querySelectorAll(".signup");
        showColor[0].style.animation="changecolor 0.3s ease 1";
        showColor[0].style.backgroundColor="rgb(63, 173, 236)";
    }

    function unchangeScolor(){ /*muda a cor do botão para original*/
        var unshowColor = document.querySelectorAll(".signup");
        unshowColor[0].style.animation="unchangecolor 0.3s ease 1";
        unshowColor[0].style.backgroundColor="whitesmoke";
    } 


/* Animação Javascript (login) */
function changeLcolor(){ /*muda a cor do botão para azul*/
    var showColor = document.querySelectorAll(".login");
    showColor[0].style.animation="changecolor 0.3s ease 1";
    showColor[0].style.backgroundColor="rgb(63, 173, 236)";
}

    function unchangeLcolor(){ /*muda a cor do botão para original*/
        var unshowColor = document.querySelectorAll(".login");
        unshowColor[0].style.animation="unchangecolor 0.3s ease 1";
        unshowColor[0].style.backgroundColor="whitesmoke";
    }
