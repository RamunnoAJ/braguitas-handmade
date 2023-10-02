import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWhatsapp,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className='bg-[#E8D0EF] text-[#1A002A] flex flex-col items-center justify-center w-full h-[120px] sm:h-[200px]'>
    <div className='text-lg md:text-2xl font-bold leading-7'>LOGO</div>
    <div className='flex'>
      <FontAwesomeIcon
        className='w-5 h-5 sm:w-6 sm:h-6 m-1 '
        icon={faWhatsapp}
      />
      <FontAwesomeIcon
        className='w-5 h-5 sm:w-6 sm:h-6 m-1 '
        icon={faFacebook}
      />
      <FontAwesomeIcon
        className='w-5 h-5 sm:w-6 sm:h-6 m-1'
        icon={faInstagram}
      />
    </div>

    <div className='text-[8px] sm:text-sm '>
      All rights reserved - Copyright 2023
    </div>
  </div>
);

export default Footer;
