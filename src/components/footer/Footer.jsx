import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Logo from '../../../assets/logo.svg';
import useStyles from './useStyles';

const Footer = () => {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className='justify-center items-center flex flex-col w-full h-20 px-10  md:mb-4 '>
          <Image className='w-8 h-8 md:w-16 md:h-16' src={Logo} alt='logo' />
          <h1 className='text-[#530586] text-xl font-semibold'>BRAGUITAS</h1>
          <p className='text-[#530586] text-xs'>H A N D M A D E</p>
        </div>
      </div>
      <div className={styles.containerSocialNetworks}>
        <FontAwesomeIcon
          className={styles.socialNetworks}
          icon={faWhatsapp}
          style={{ color: '#530586' }}
        />
        <FontAwesomeIcon
          className={styles.socialNetworks}
          icon={faFacebook}
          style={{ color: '#530586' }}
        />
        <FontAwesomeIcon
          className={styles.socialNetworks}
          icon={faInstagram}
          style={{ color: '#530586' }}
        />
      </div>

      <div className={styles.copyRight}>
        All rights reserved - Copyright 2023
      </div>
    </div>
  );
};

export default Footer;
