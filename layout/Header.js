import Navigation from './components/Navigation/Navigation';
import Link from 'next/link';

import styles from './Header.module.scss';

const Logo = () => (
  <div className={styles.logo}>
    <Link href="/">
      <h1>Pa<span>ul Valen</span>zano</h1>
    </Link>
  </div>
)

const Header = () => {
  const menu = [
    {
      label: 'About',
      target: '/about',
      key: 'menu-about'
    },
    {
      label: 'Work',
      target: '/work',
      key: 'menu-work'
    },
    {
      label: 'Contact',
      target: '/contact',
      key: 'menu-contact'
    },
    {
      label: 'Blog',
      target: '/blog',
      key: 'menu-blog'
    },
  ];

  return(
    <div className={styles.header}>
      <Navigation
        menuItems={menu}
      />
      <Logo />
    </div>
  )
}

export default Header;