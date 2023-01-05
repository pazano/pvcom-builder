import styles from './Image.module.scss';

const renditionWidths = [300, 600, 1200, 2000]
const stretchTolerance = 20;

const buildSrcSet = (imageUrl, renditionWidths) => {
  return renditionWidths.reduce((srcSet, width) => {
    return srcSet + `${imageUrl}?width=${width} ${width}w, `;
  }, "")
}

const buildSizeList = (renditionWidths, stretchTolerance) => {
  let counter = 1;
  return renditionWidths.reduce((sizeList, width) => {
    if(counter == renditionWidths.length) {
      return sizeList + `${width}px`;
    } else {
      counter++;
      return sizeList + `(max-width: ${width + width * (stretchTolerance / 100)}px) ${width}px, `;
    }
  }, "")
}

const Image = ({ src, alt, aspectRatio, respectAspect, style = '' }) => {

  const srcSet = buildSrcSet(src, renditionWidths);
  const sizeList = buildSizeList(renditionWidths, stretchTolerance);

  if(respectAspect) {

    const splitParams = aspectRatio && aspectRatio.split("x");
    const viewBoxParams = splitParams[0] + " " + splitParams[1];

    return (
      <div className={`${styles.image__respect_aspect} ${style}`}>
        <svg viewBox={`0 0 ${viewBoxParams}`}></svg>
        <picture>
          <img
            srcSet={srcSet}
            sizes={sizeList}
            src={src} alt={alt} />
        </picture>
      </div>
    )
  }
  else {
    return (
      <div className={style}>
        <picture>
          <img
            srcSet={srcSet}
            sizes={sizeList}
            src={src} alt={alt} />
        </picture>
      </div>
    )
  }
}

export default Image;