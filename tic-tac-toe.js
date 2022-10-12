window.onload = function() {  
    let game_board = document.getElementById("board");
    // console.log(game_board);

    var squares = game_board.children;
    // console.log(squares);

    // creates board layout
    for(i = 0; i <= squares.length - 1; i++) {
        squares[i].setAttribute("class", "square"); 
    }
    // console.log(squares);

    var track = [];      
    // console.log(track);
    
    let option1 = "X";
    let option2 = "O";
    let turn = 0;
    let lastplayed;

    squares = document.querySelectorAll(".square")
    // squares = document.getElementsByClassName("square");
    // console.log(squares);

    // add hover class to squares
    squares.forEach(square => {
        square.onmouseover = function() {
            square.classList.add("hover");
        };

        square.onmouseout = function() {
            square.classList.remove("hover");
        };
    });

    // adds an X or O to a square when clicked
    squares.forEach(square => {
        square.onclick = function() {
            // console.log("Clicked");
            
            if(turn === 0) { // make it random
                square.innerHTML = option1;
                lastplayed = option1;
                square.classList.add("X");
            }

            else {
                if(lastplayed === option1) {
                    square.innerHTML = option2;
                    lastplayed = option2;
                    square.classList.add("O");
                }

                else {
                    square.innerHTML = option1;
                    lastplayed = option1;
                    square.classList.add("X");
                }
            }

            turn += 1;
            // console.log(turn);
        }
    });
}
