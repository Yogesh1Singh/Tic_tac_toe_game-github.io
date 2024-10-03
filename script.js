const board = document.getElementById("board");
const message = document.getElementById("message");
const cells = [];
let currentPlayer = "X";
let winner = null;

// Create the Tic Tac Toe board
for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.setAttribute("data-index", i);
  cell.addEventListener("click", () => handleCellClick(i));
  board.appendChild(cell);
  cells.push(cell);
}

// Function to handle cell click
function handleCellClick(index) {
  if (cells[index].textContent || winner) return;
  cells[index].textContent = currentPlayer;
  if (checkWinner()) {
    winner = currentPlayer;
    message.textContent = `Player ${winner} wins!`;
  } else if ([...cells].every((cell) => cell.textContent !== "")) {
    message.textContent = "It's a draw!";
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.textContent = `Player ${currentPlayer}'s turn`;
  }
}

// Function to check for a winner
function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const combo of winningCombos) {
    const [a, b, c] = combo;
    if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
      cells[a].style.backgroundColor = "lightgreen";
      cells[b].style.backgroundColor = "lightgreen";
      cells[c].style.backgroundColor = "lightgreen";
      return true;
    }
  }
  return false;
}
