
import propTypes from 'prop-types'

import styles from './Tile.module.css'

const blacks = [
  'a1', 'c1', 'e1', 'g1',
  'b2', 'd2', 'f2', 'h2',
  'a3', 'c3', 'e3', 'g3',
  'b4', 'd4', 'f4', 'h4',
  'a5', 'c5', 'e5', 'g5',
  'b6', 'd6', 'f6', 'h6',
  'a7', 'c7', 'e7', 'g7',
  'b8', 'd8', 'f8', 'h8',
]

// const whites = [
//   'b1', 'd1', 'f1', 'h1',
//   'a2', 'c2', 'e2', 'g2',
//   'b3', 'd3', 'f3', 'h3',
//   'a4', 'c4', 'e4', 'g4',
//   'b5', 'd5', 'f5', 'h5',
//   'a6', 'c6', 'e6', 'g6',
//   'b7', 'd7', 'f7', 'h7',
//   'a8', 'c8', 'e8', 'g8'
// ]

function Tile ({ row, column, piece, onTileOver }) {
  let tileClass = styles.white

  if (blacks.includes(`${column}${row}`)) {
    tileClass = styles.black
  }

  return (
    <div className={tileClass} onMouseOver={(e) => {onTileOver(row, column)}} >
      { piece }
    </div>
  )
}

Tile.propTypes = {
  row: propTypes.string.isRequired,
  column: propTypes.string.isRequired,
  piece: propTypes.node,
  onTileOver: propTypes.func
}

export { Tile }