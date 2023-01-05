import Image from '../Image/Image';
import styles from './ImageDetail.module.scss';

const ImageDetail = ({portfolioImage, imageSide, contentBackground=false}) => {
  let { image, orientation, altText, attributions} = portfolioImage

  let attributionPrep = attributions.map((attribution) => {
    let counter = 1;
    attribution.rolesList = attribution.role.reduce((rolesList, role) => {
      if(counter == attribution.role.length) {
        return rolesList + role['roleOptions'];
      }
      else{
        counter++;
        return rolesList + role['roleOptions'] + ', ';
      }
    }, '')
    return attribution;
  })

  return (
    <div className="content width__narrow">
      <div className={`${styles.module__image_content} ${styles['module__image_content__' + orientation + '_' + imageSide]}`}>
        <Image
          src={image}
          alt={altText || ''}
          aspectRatio={orientation == 'portrait' ? '2x3' : '3x2'}
          respectAspect={false}
          style={styles.module__image_content__image}
        />
        <div className={`${styles.module__image_content__content} ${contentBackground ? styles.module__image_content__bgcolor : ''}`}>
          <div className={styles.module__image_content__content_inner} >
            <dl>
              { attributionPrep.map((attribution) => (
                <>
                  <dt>{attribution.rolesList}</dt>
                  <dd>{attribution.name} <a href={`https://instagram.com/${attribution.instagram}`}>@{attribution.instagram}</a></dd>
                </>
              )) }
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageDetail;