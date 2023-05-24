import React from 'react';
import Image from '../Image/Image';
import styles from './ProfileCard.module.scss';

const ProfileCard = ({ image, name, profession, description, links }) => {

  return(
    <React.Fragment>
      <div className={styles.profilecard}>
        { (image) ? (
          <Image
            src={image}
            aspectRatio="4x3"
            respectAspect={false}
            style={styles.profilecard__image}
          />
        ): (
          <div className={styles.profilecard_image_placeholder} />
        )}
        <div className={styles.profilecard__details}>
          <h2>{ name || ''}</h2>
          { (profession) ? (<span>{profession || ''}</span>): null}
          { (description) ? (<p>{description || ''}</p>): null}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProfileCard;