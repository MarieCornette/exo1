const grid = document.querySelector(".grid");
const restartButton = document.getElementById("restart");

let player1 = "X";
let player2 = "O";

let currentPlayer = player1;

let cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
  const cell = e.target;
  console.log(cell);

  if (cell.textContent == "") {
    let p = document.createdElement("p");
    p.textContent = currentPlayer;
    cell.appendChild(p);

    cell.classlist.add(currentPlayer);
    switchPlayer();
  }

  cell.classList.add(currentPlayer);
  let p = document.createElement("p");
  p.textContent = currentPlayer;
  cell.appendChild(p);
  switchPlayer();
  checkWinner();
}

function switchPlayer() {
  if (currentPlayer == player1) {
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

// si on prefere le faire en ternaire
//  currentPlayer = currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1

const winningCombination = [
  // copilot va générer les combinaisons gagnantes
];

function checkWinner() {
  winningCombination.forEach((combinaison) => {
    const cell1 = cells[combinaison[0]];
    const cell2 = cells[combinaison[1]];
    const cell3 = cells[combinaison[2]];

    if (
      cell1.textContent == currentPlayer &&
      cell2.textContent == currentPlayer &&
      cell3.textContent == currentPlayer
    ) {
      console.log("Winner");
      alert("Winner");
    }
  });
}
