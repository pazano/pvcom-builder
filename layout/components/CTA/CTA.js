import styles from './CTA.module.scss';

const CTA = ({ title, label, linkType, url, columnWidth }) => {
  let linkProtocol = linkType == 'http' ? 'https://' : linkType == 'tel' ? 'tel:' : 'mailto:';
  return(
    <div className={`content width__${columnWidth}`}>
      <div className={`${styles.cta__block} ${styles.background__blush}`}>
        <h3>{title}</h3>
        <a className={styles.cta__action} href={`${linkProtocol}${url}`}>{ label }</a>
      </div>
    </div>
  )
}

export default CTA;