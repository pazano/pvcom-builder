import styles from './ImageBlock.module.scss';
import Image from '../Image/Image';

const ImageBlock = ({ image, altText, displayWidth }) => {
  return(
    <div className={styles.imageblock_container + ' ' + styles[displayWidth]}  >
      <Image
        src={image}
        alt={altText}
        style={styles.imageblock_image}
      />
    </div>
  );
}

export default ImageBlock;