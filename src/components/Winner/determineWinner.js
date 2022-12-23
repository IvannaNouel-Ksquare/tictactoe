function determineWinner(board) {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  
    for (let e = 0; e < winningPositions.length; e++) {
      const [a, b, c] = winningPositions[e];
  
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
  
    return null;
  }
  
  export default determineWinner;