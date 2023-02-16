import styles from './PullQuote.module.scss';

const PullQuote = ({ copy }) => {
  return(
    <div className={styles.pullquote_container}  >
      <span>{copy}</span>
    </div>
  );
}

export default PullQuote;