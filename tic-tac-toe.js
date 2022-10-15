window.onload = function(){
    let boardgame  = document.getElementById("board");
    let boxed = boardgame.getElementsByTagName("div");
    let status = true;
    let winner = document.getElementById("status");
    let game = document.getElementById("game");
    let button = game.getElementsByClassName("btn");

    //console.log(boxed);

    for (let a = 0;a < 9;a++){

        let worked = boxed[a];
        worked.classList.add("square");
        //boxed[a].setAttribute("class","square");
        worked.addEventListener("click",function(){
            if (status == true){
                worked.textContent = "X";
                status = false;
                worked.classList.add("X");
                if (boxed[0].innerHTML == "X" && boxed[1].innerHTML == "X" && boxed[2].innerHTML == "X" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! X is the Winner!";
                } else if (boxed[3].innerHTML == "X" && boxed[4].innerHTML == "X" && boxed[5].innerHTML == "X" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! X is the Winner!";
                } else if (boxed[6].innerHTML == "X" && boxed[7].innerHTML == "X" && boxed[8].innerHTML == "X" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! X is the Winner!";
                } else if (boxed[0].innerHTML == "X" && boxed[3].innerHTML == "X" && boxed[6].innerHTML == "X" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! X is the Winner!";
                } else if (boxed[1].innerHTML == "X" && boxed[4].innerHTML == "X" && boxed[7].innerHTML == "X" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! X is the Winner!";
                } else if (boxed[2].innerHTML == "X" && boxed[5].innerHTML == "X" && boxed[8].innerHTML == "X" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! X is the Winner!";
                }  else if (boxed[0].innerHTML == "X" && boxed[4].innerHTML == "X" && boxed[8].innerHTML == "X" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! X is the Winner!";
                }  else if (boxed[2].innerHTML == "X" && boxed[4].innerHTML == "X" && boxed[6].innerHTML == "X" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! X is the Winner!";
                }

            } else{
                worked.textContent = "O";
                status = true;
                worked.classList.add("O");
                if (boxed[0].innerHTML == "O" && boxed[1].innerHTML == "O" && boxed[2].innerHTML == "O" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! O is the Winner!";
                } else if (boxed[3].innerHTML == "O" && boxed[4].innerHTML == "O" && boxed[5].innerHTML == "O" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! O is the Winner!";
                } else if (boxed[6].innerHTML == "O" && boxed[7].innerHTML == "O" && boxed[8].innerHTML == "O" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! O is the Winner!";
                } else if (boxed[0].innerHTML == "O" && boxed[3].innerHTML == "O" && boxed[6].innerHTML == "O" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! O is the Winner!";
                } else if (boxed[1].innerHTML == "O" && boxed[4].innerHTML == "O" && boxed[7].innerHTML == "O" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! O is the Winner!";
                } else if (boxed[2].innerHTML == "O" && boxed[5].innerHTML == "O" && boxed[8].innerHTML == "O" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! O is the Winner!";
                }  else if (boxed[0].innerHTML == "O" && boxed[4].innerHTML == "O" && boxed[8].innerHTML == "O" ){winner.className = "you-won";
                    winner.innerHTML = "Congratulations! O is the Winner!";
                }  else if (boxed[2].innerHTML == "O" && boxed[4].innerHTML == "O" && boxed[6].innerHTML == "O" ){
                    winner.className = "you-won";
                    winner.innerHTML = "Congratulations! O is the Winner!";
                }
            }

        })
            worked.addEventListener('mouseover',function(){
            worked.classList.add("hover");
        })
            worked.addEventListener('mouseout',function(){
            worked.classList.remove("hover");
        })

        

    }


    button[0].addEventListener("click", function(){
        window.location.reload(true);
    });
    //let button = getElementsByClassName.add
    // const newgameBtn = document.querySelectorAll("btn")
    // newgameBtn.addEventListener('click',function(){
    //     worked.classList.remove("X") && worked.classList.remove("O");
    // })

};