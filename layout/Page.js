import { withRouter } from 'next/router';

import Meta from './Meta.js';
import Header from './Header.js';
import Footer from './Footer.js';

import styles from './Page.module.scss';

export default withRouter( ({ seo, children }) => (
    <div className={styles.main}>
        <Meta seo={seo} />
        <div className={styles.page}>
          <Header />
            { children }
          <Footer />
        </div>
      </div>
  )
);