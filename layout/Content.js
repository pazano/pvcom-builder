import styles from './Content.module.scss';

const Content = ( ({ children }) => (
    <div className={styles.content}>
        { children }
    </div>
  )
);

export default Content;