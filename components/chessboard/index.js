import styles from './Chessboard.module.css'

import { Tile } from '../tile'

const rows = ['8', '7', '6', '5', '4', '3', '2', '1']
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const tiles = (reverse) => {
  const tiles = []

  let rowsToUse = rows
  
  if (reverse) {
    rowsToUse = [...rows].reverse()
  }

  rowsToUse.forEach(x => {
    columns.forEach(y => {
      tiles.push(<Tile key={`${x}${y}`} row={x} column={y}/>)
    })
  });

  return tiles
} 

function Chessboard ({ size, reverse=false }) {
  return (
    <div style={{width: size, height: size}} className={styles.board}>
      { tiles(reverse) }
    </div>
  )
}

export { Chessboard }