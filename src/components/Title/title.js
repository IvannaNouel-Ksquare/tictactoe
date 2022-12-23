function Title({ winner, turn }) {
  return (
    <h5 className="Title">
      {winner ? "Winner: " : "Tic Tac Toe"} {winner && turn}
    </h5>
  );
}

export default Title;
