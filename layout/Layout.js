import { withRouter } from 'next/router';

import Meta from './Meta.js';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

import styles from './Layout.module.scss';

export default withRouter( ({ seo, children }) => (
    <div className={styles.main}>
        <Meta seo={seo} />
        <div className={styles.page}>
          <Header />
          <Content>
            { children }
          </Content>
          <Footer />
        </div>
      </div>
  )
);