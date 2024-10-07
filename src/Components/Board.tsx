import { useEffect, useState } from "react"
import { createBoard, positionMatch } from "../minesweeper"

export const Board = ({ boardSize, numberOfMines }) => {
  const [board, setBoard] = useState<Array>([])

  const sizeStyle = {
    "--size": boardSize,
  }

  useEffect(() => {
    if (boardSize === 0 && numberOfMines === 0) {
      alert("Please set a board size and a number of mines for the game.")
      return
    }

    setBoard(createBoard(boardSize, getMinePositions(boardSize, numberOfMines)))
  }, [])

  const getTiles = (board) => {
    return board.flatMap((row) => {
      return row.map((tile) => {
        return <Tile {...tile} key={`(${tile.x},${tile.y})`} />
      })
    })
  }

  return (
    <>
      <div className="subtext">
        Mines left: <span data-mine-count></span>
      </div>
      <div className="board" style={sizeStyle}>
        {getTiles(board)}
      </div>
    </>
  )
}

const Tile = ({ adjacentMinesCount, status, x, y }) => {
  return (
    <div
      data-x={x}
      data-y={y}
      data-status={status}
      onClick={handlerLeftClick}
      onContextMenu={handlerRightClick}
    >
      {adjacentMinesCount || ""}
    </div>
  )
}

const getMinePositions = (boardSize, numberOfMines) => {
  const positions = []

  while (positions.length < numberOfMines) {
    const position = {
      x: randomNumber(boardSize),
      y: randomNumber(boardSize),
    }

    if (!positions.some(positionMatch.bind(null, position))) {
      positions.push(position)
    }
  }

  return positions
}

const randomNumber = (size) => {
  return Math.floor(Math.random() * size)
}

const handlerLeftClick = () => {}

const handlerRightClick = () => {}
