import styles from './Chessboard.module.css'

import { Tile } from '../tile'
import { Piece } from '../piece'

const rows = ['8', '7', '6', '5', '4', '3', '2', '1']
const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const whitePieces = {
  'a1': <Piece imgUrl={'/pieces/white-rook.png'} />,
  'b1': <Piece imgUrl={'/pieces/white-knight.png'} />,
  'c1': <Piece imgUrl={'/pieces/white-bishop.png'} />, 
  'd1': <Piece imgUrl={'/pieces/white-queen.png'} />, 
  'e1': <Piece imgUrl={'/pieces/white-king.png'} />,
  'f1': <Piece imgUrl={'/pieces/white-bishop.png'} />,
  'g1': <Piece imgUrl={'/pieces/white-knight.png'} />,
  'h1': <Piece imgUrl={'/pieces/white-rook.png'} />,
  'a2': <Piece imgUrl={'/pieces/white-pawn.png'} />,
  'b2': <Piece imgUrl={'/pieces/white-pawn.png'} />,
  'c2': <Piece imgUrl={'/pieces/white-pawn.png'} />, 
  'd2': <Piece imgUrl={'/pieces/white-pawn.png'} />, 
  'e2': <Piece imgUrl={'/pieces/white-pawn.png'} />,
  'f2': <Piece imgUrl={'/pieces/white-pawn.png'} />,
  'g2': <Piece imgUrl={'/pieces/white-pawn.png'} />,
  'h2': <Piece imgUrl={'/pieces/white-pawn.png'} />
}

const blackPieces = {
  'a8': <Piece imgUrl={'/pieces/black-rook.png'} />,
  'b8': <Piece imgUrl={'/pieces/black-knight.png'} />,
  'c8': <Piece imgUrl={'/pieces/black-bishop.png'} />, 
  'd8': <Piece imgUrl={'/pieces/black-queen.png'} />, 
  'e8': <Piece imgUrl={'/pieces/black-king.png'} />,
  'f8': <Piece imgUrl={'/pieces/black-bishop.png'} />,
  'g8': <Piece imgUrl={'/pieces/black-knight.png'} />,
  'h8': <Piece imgUrl={'/pieces/black-rook.png'} />,
  'a7': <Piece imgUrl={'/pieces/black-pawn.png'} />,
  'b7': <Piece imgUrl={'/pieces/black-pawn.png'} />,
  'c7': <Piece imgUrl={'/pieces/black-pawn.png'} />, 
  'd7': <Piece imgUrl={'/pieces/black-pawn.png'} />, 
  'e7': <Piece imgUrl={'/pieces/black-pawn.png'} />,
  'f7': <Piece imgUrl={'/pieces/black-pawn.png'} />,
  'g7': <Piece imgUrl={'/pieces/black-pawn.png'} />,
  'h7': <Piece imgUrl={'/pieces/black-pawn.png'} />
}

const boardModel = {
  boardCoordinates: Object.assign({}, blackPieces, whitePieces),
  getPiece: function (row, column) { return this.boardCoordinates[`${column}${row}`] }
}

const tiles = (reverse) => {
  const tiles = []

  let rowsToUse = rows
  
  if (reverse) {
    rowsToUse = [...rows].reverse()
  }

  rowsToUse.forEach(row => {
    columns.forEach(column => {
      tiles.push(
        <Tile
          key={`${row}${column}`} 
          row={row} 
          column={column}
          piece={boardModel.getPiece(row, column)}
          onTileOver={(row, column) => console.log(row, column)} 
        />
      )
    })
  });

  return tiles
} 

function Chessboard ({ reverse=false }) {
  return (
    <div className={styles.board}>
      { tiles(reverse) }
    </div>
  )
}

export { Chessboard }