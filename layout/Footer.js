import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <h4>&copy; Paul Valenzano {new Date().getFullYear()}</h4>
  </div>
);

export default Footer;