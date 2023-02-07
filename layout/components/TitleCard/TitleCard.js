import React from 'react';
import Image from '../Image/Image';
import styles from './TitleCard.module.scss';

const TitleCard = ({ title, image, lede }) => {
  const imageStyle = {
    backgroundImage: `url('${image || ''}')`
  }

  return(
    <React.Fragment>
      <div className={styles.titlecard}>
        { (image) ? (
          <Image
            src={image}
            aspectRatio="4x3"
            respectAspect={false}
            style={styles.titlecard__image}
          />
        ): null}
        <div className={styles.titlecard__titleblock}>
          <h1>{ title || ''}</h1>
          { (lede) ? (<p>{lede || ''}</p>): null}
        </div>
      </div>
    </React.Fragment>
  )
}

export default TitleCard;