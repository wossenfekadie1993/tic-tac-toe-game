let playingbox = document.querySelector("#playingbox");
let cells = document.querySelectorAll(".cell");
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let restart = document.querySelector("#restart");
let reset=document.querySelector("#reset");
let changeTurn = false;
cells.forEach(items => {
    items.addEventListener("click", () => {
        if (changeTurn == false) {
            items.innerHTML = `X`;
            items.id = "X";
            items.style.pointerEvents = "none";
            changeTurn = true;
            
        } else {
            items.innerHTML = `O`;
            items.id = "O";
            items.style.pointerEvents = "none";
            changeTurn = false;
        }
        winningFunc();
        drawFunc();
    })
})
let winningCombinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
let winningFunc = () => {
    for (let a = 0; a <= 7; a++) {
        let b = winningCombinations[a];
       
        if (cells[b[0]].id == "" || cells[b[1]].id == "" || cells[b[2]].id == "") {
            continue;
        } 
        else if (cells[b[0]].id == "X" && cells[b[1]].id == "X" && cells[b[2]].id == "X") {

            winnerName.innerText = `Player X Win The Game!`;
            playingbox.style.display = "none";
            winner.style.display = "block";
        } 
        else if (cells[b[0]].id == "O" && cells[b[1]].id == "O" && cells[b[2]].id == "O") { 
            winnerName.innerText = `Player O Win The Game!`;
            playingbox.style.display = "none";
            winner.style.display = "block";
        } else {
            continue;
        }
    }
}
let drawFunc = () => {
    if (cells[0].id != "" && cells[1].id != "" &&
        cells[2].id != "" && cells[3].id != "" &&
        cells[4].id != "" && cells[5].id != "" &&
        cells[6].id != "" && cells[7].id != "" && cells[8].id != "") {
        winnerName.innerText = `Draw Match!`;
        playingbox.style.display = "none";
        winner.style.display = "block";
    }
}

restart.addEventListener("click", () => {
    window.location.reload();
})
reset.addEventListener("click", () => {
    window.location.reload();
})
