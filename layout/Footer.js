import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <h4>&copy; Danielle Rouillard {new Date().getFullYear()}</h4>
  </div>
);

export default Footer;