import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import useStyles from './useStyles';

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.containerSocialNetworks}>
        <FontAwesomeIcon className={styles.socialNetworks} icon={faWhatsapp} />
        <FontAwesomeIcon className={styles.socialNetworks} icon={faFacebook} />
        <FontAwesomeIcon className={styles.socialNetworks} icon={faInstagram} />
      </div>

      <div className={styles.copyRight}>
        All rights reserved - Copyright 2023
      </div>
    </div>
  );
};

export default Footer;
