function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>GAME OVER</h2>
      {winner && <p>{winner} WON!</p>}
      {!winner && <p>It's a draw</p>}
      <button onClick={onRestart}>REMATCH</button>
    </div>
  );
}

export default GameOver;
