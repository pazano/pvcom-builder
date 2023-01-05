import App from 'next/app';
import Router from 'next/router';

import * as tracking from '../lib/tracking';
import '../styles/styles.scss';

Router.events.on('routeChangeComplete', url => tracking.pageview(url))

export default App;