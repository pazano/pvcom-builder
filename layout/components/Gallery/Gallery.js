import { hydrateImageList } from '../../../lib/builder_helpers';
import { sortGalleryRows } from '../../../lib/layout_helpers';

import Link from 'next/link';
import Image from '../Image/Image';
import styles from './Gallery.module.scss';
import { useState, useEffect } from 'react';
import { Builder } from '@builder.io/react';

const GalleryImageRow = ({ galleryImages, respectAspect, rowKey }) => {

  const rowClassName = galleryImages.reduce((result, galleryImage) => result ? result + '_' + galleryImage.orientation : galleryImage.orientation, "");

  let counter = 0;
  return(
    <div className={`${styles.gallery__row} ${styles[rowClassName]}`} key={rowKey}>
      { galleryImages &&
        galleryImages.map(({ src, altText, aspectRatio, metadata }) => {
            const imageData = {
              src,
              alt: altText,
              aspectRatio,
              slug: metadata.slug,
              respectAspect,
              style: 'image_' + counter,
            }
            return(
              <GalleryImageLink
                image={imageData}
                imageKey={`gallery-image-${++counter}`}
              />
            )
          }
        )
      }
    </div>
  )
}

const GalleryImageLink = ({ image, imageKey }) => {
  return (
      <Link href="/photography/[[...page]]" as={`photography/${image.slug}`} >
        <div className={`gallery__image link ${styles[image.style]}`} key={imageKey}>
          <Image
            src={image.src}
            alt={image.alt}
            aspectRatio={image.aspectRatio}
            respectAspect={image.respectAspect}
          />
        </div>
      </Link>
  )
}


// Gallery
//    Type indicates layout width -- Hero uses smaller gutters than Page
//    Links looks to display a label and link over Gallery entries

const Gallery = (props) => {
  console.log(props);
  let { galleryImages, type } = props;
  let visibleLinks = props.visibleLinks || false;

  // ensure the image records have data in Builder preview
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    async function setImageDataForPreview() {
      const hydratedImages = await hydrateImageList(galleryImages);
      hydratedImages && setImageList(hydratedImages);
    }
    Builder.isPreviewing ? setImageDataForPreview() : setImageList(galleryImages);
  }, [galleryImages]);

  // convert list of images to rows based on aspect ratios
  const galleryRows = sortGalleryRows(imageList, 4);

  //  Test for aspects in the list, disable strict aspect management if mixed
  const respectAspect = galleryRows.reduce(((result, row) => {
    return result += new Set(row.map(image => image.orientation)).size;
  }), 0) > galleryRows.length ? false : true;

  let rowCounter = 0;

  return (
    <div className={styles.content__gallery}>
      <div className={`${styles.gallery__container} ${styles["gallery__" + type]} ${visibleLinks ? styles.gallery__with_link_labels : ''}`}>
        {galleryRows &&
          galleryRows.map((images) =>
            <GalleryImageRow
              galleryImages={images}
              respectAspect={respectAspect}
              rowKey={`gallery-image-row-${++rowCounter}`}
            />)
        }
      </div>
    </div>
  )
}

export default Gallery;