import { times } from "lodash/fp"

export const TILE_STATUSES = {
  HIDDEN: "hidden",
  MINE: "mine",
  NUMBER: "number",
  MARKED: "marked",
}

export const createBoard = (boardSize, minePositions) => {
  return times((x) => {
    return times((y) => {
      return {
        x,
        y,
        mine: minePositions.some(positionMatch.bind(null, { x, y })),
        status: TILE_STATUSES.HIDDEN,
      }
    }, boardSize)
  }, boardSize)
}

export const positionMatch = (posA, posB) => {
  return posA.x === posB.x && posA.y === posB.y
}
