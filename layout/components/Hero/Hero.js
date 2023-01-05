import styles from './Hero.module.scss';

const Hero = ({ text, image, height, imageVerticalPosition='center' }) => {
  const imageStyle = {
    backgroundImage: `url('${image}')`,
    backgroundPositionY: imageVerticalPosition
  }
  return (
    <div className={`${styles.hero} ${height === 'large' ? styles.hero__large : height == 'medium' ? styles.hero__medium : styles.hero__small}`}>
      <div className={styles.hero__image} style={imageStyle}></div>
      <div className={styles.hero__content}>
        <h1>{ text }</h1>
      </div>
    </div>
  )
}

export default Hero;