import { Board } from "./Components/Board"

const BOARD_SIZE = 10
const NUMBER_OF_MINES = 10

function App() {
  return (
    <>
      <h3 className="title">Minesweeper</h3>
      <p>
        To reload the game, click in the title - if you lose,
        <b>the game will restart automatically</b> after 10 seconds.
      </p>
      <Board boardSize={BOARD_SIZE} numberOfMines={NUMBER_OF_MINES} />
    </>
  )
}

export default App
