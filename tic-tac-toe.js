window.onload = function() {  
    let game_board = document.getElementById("board");
    // console.log(game_board);

    let squares = game_board.children;
    // console.log(squares);

    // creates board layout
    for(i = 0; i <= squares.length - 1; i++) {
        squares[i].setAttribute("class", "square"); 
        let squareid = "sq" + i;
        squares[i].setAttribute("id", squareid); // adds ids to squares
    }
    // console.log(squares);
    
    var option1 = "X";
    var option2 = "O";
    var turn = 0;
    var lastplayed;

    squares = document.querySelectorAll(".square");
    // squares = document.getElementsByClassName("square");
    // console.log(squares);

    // adds and removes hover class to squares when hovering and not hovering
    squares.forEach(square => {
        square.onmouseover = function() {
            square.classList.add("hover");
        }

        square.onmouseout = function() {
            square.classList.remove("hover");
        }
    });

    var buttons = document.getElementsByClassName("btn");

    for(i = 0; i <= buttons.length - 1; i++) {
        buttons[i].addEventListener("click", function() {
            window.location.reload();
        });
    }
    
    var track = []; // X O X O X O X O X
    
    let msgbox = document.getElementById("status");
    let msgX = "Congratulations! X is the Winner!";
    let msgO = "Congratulations! O is the Winner!";
                
    // console.log(track);

    // adds an X or O to a square when clicked
    squares.forEach(square => {
        square.onclick = function() {
            // console.log("Clicked");
            
            if(turn === 0) { 
                square.innerHTML = option1;
                lastplayed = option1;
                square.classList.add("X");
                track.push(option1);
            }

            else {
                if(lastplayed === option1) {
                    square.innerHTML = option2;
                    lastplayed = option2;
                    square.classList.add("O");
                    track.push(option2);
                }

                else {
                    square.innerHTML = option1;
                    lastplayed = option1;
                    square.classList.add("X");
                    track.push(option1);
                }
            }

            turn += 1;
            // console.log(turn);
            // console.log(track);

            if(track.length > 2) {
                let square1 = document.getElementById("sq0").textContent;
                //console.log(square1);

                let square2 = document.getElementById("sq1").textContent;
                let square3 = document.getElementById("sq2").textContent;
                let square4 = document.getElementById("sq3").textContent;
                let square5 = document.getElementById("sq4").textContent;
                let square6 = document.getElementById("sq5").textContent;
                let square7 = document.getElementById("sq6").textContent;
                let square8 = document.getElementById("sq7").textContent;
                let square9 = document.getElementById("sq8").textContent;

                if(square1 === "X" && square2 === "X" && square3 === "X") {
                    // console.log(square1);
                    msgbox.textContent = msgX;
                    msgbox.classList.add("you-won");
                }

                if(square4 === "X" && square5 === "X" && square6 === "X") {
                    msgbox.textContent = msgX;
                    msgbox.classList.add("you-won");
                }

                if(square7 === "X" && square8 === "X" && square9 === "X") {
                    msgbox.textContent = msgX;
                    msgbox.classList.add("you-won");
                }

                if(square1 === "O" && square2 === "O" && square3 === "O") {
                    msgbox.textContent = msgO;
                    msgbox.classList.add("you-won");
                }

                if(square4 === "O" && square5 === "O" && square6 === "O") {
                    msgbox.textContent = msgO;
                    msgbox.classList.add("you-won");
                }

                if(square7 === "O" && square8 === "O" && square9 === "O") {
                    msgbox.textContent = msgO;
                    msgbox.classList.add("you-won");
                }
            }
        }        
    });    
}