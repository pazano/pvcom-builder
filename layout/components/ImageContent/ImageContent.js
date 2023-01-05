import Image from '../Image/Image';
import styles from './ImageContent.module.scss';

const ImageContent = ({image, altText, title, copy, orientation, imageSide, columnWidth, contentBackground=false}) => {
  const titleMarkup = title ? <h2>{title}</h2> : '';
  const copyMarkup = copy ? <div dangerouslySetInnerHTML={{ __html: copy }} /> : '';
  return (
    <div className={`content width__${columnWidth}`}>
      <div className={`${styles.module__image_content} ${styles['module__image_content__' + orientation + '_' + imageSide]}`}>
        <Image
          src={image}
          alt={altText}
          aspectRatio={orientation == 'portrait' ? '2x3' : '3x2'}
          respectAspect={false}
          style={styles.module__image_content__image}
        />
        <div className={`${styles.module__image_content__content} ${contentBackground ? styles.module__image_content__bgcolor : ''}`}>
          <div className={styles.module__image_content__content_inner} >
              {titleMarkup}
              {copyMarkup}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageContent;