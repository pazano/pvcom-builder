import React from 'react';
import styles from './TitleCard.module.scss';

const TitleCard = ({ title, image, lede }) => {
  const imageStyle = {
    backgroundImage: `url('${image || ''}')`
  }

  return(
    <React.Fragment>
      <div className={styles.titlecard}>
        <h1>{ title || ''}</h1>
        { (image) ? (
          <div className={styles.titlecard__image} style={imageStyle}></div>
        ): null}
        { (lede) ? (
          <p>{lede || ''}</p>
        ): null}
      </div>
    </React.Fragment>
  )
}

export default TitleCard;