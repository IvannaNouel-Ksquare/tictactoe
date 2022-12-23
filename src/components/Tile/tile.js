function Tile({ value, handleOnClick, idx }) {
  console.log(value);

  return (
    <button
      className="Tile"
      onClick={() => {
        handleOnClick(idx);
      }}
    >
      {value}
    </button>
  );
}

export default Tile;
