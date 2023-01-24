import styles from './Content.module.scss';

const Content = ( ({ children }) => (
    <div className={styles.page}>
        { children }
    </div>
  )
);

export default Content;