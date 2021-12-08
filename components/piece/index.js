import propTypes from 'prop-types'

import styles from './Piece.module.css'

function Piece ({ imgUrl }) {

  return (
    <div 
      className={styles.piece}
      style={{ 
        backgroundImage: `url(${imgUrl})` 
      }} 
    />
  )

}

Piece.propTypes = {
  imgUrl: propTypes.string.isRequired
}

export { Piece }