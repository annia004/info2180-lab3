window.onload = function onload() {  // Created board layout
    let game_board = document.getElementById("board");
    // console.log(game_board);

    squares = game_board.children;
    // console.log(squares);

    for (i = 0; i <= squares.length - 1; i++) {
        squares[i].setAttribute("class", "square");
    }
    // console.log(squares);

    // game_board.getElementsByTagName("div").className = "square";
}

