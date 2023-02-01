import React from 'react';
import styles from './BodyCopy.module.scss';

const BodyCopy = ({ copy }) => {

  return (
    <div className={styles.bodycopy} dangerouslySetInnerHTML={{ __html: copy }} />
  )
}

export default BodyCopy;