import styles from './TitleCard.module.scss';

const TitleCard = ({ title, image, lede }) => {
  if (image) {
    const imageStyle = {
      backgroundImage: `url('${image}')`
    }
    return (
      <div className={`${styles.content} ${styles.padding__low}`}>
        <div className={styles.titlecard}>
          <h1>{ title }</h1>
          <div className={styles.titlecard__image} style={imageStyle}></div>
          <p>{lede || ''}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${styles.content} ${styles.padding__low}`}>
        <div className={styles.titlecard}>
          <h1>{title}</h1>
          <p>{lede || ''}</p>
        </div>
      </div>
    )
  }
}

export default TitleCard;