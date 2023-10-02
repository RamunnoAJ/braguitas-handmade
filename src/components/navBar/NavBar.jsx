import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faCartShopping,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import useStyles from './useStyles';

const NavBar = () => {
  const styles = useStyles();
  return (
    <main className={styles.container}>
      <div className={styles.sections}>INICIO</div>
      <div className={styles.sections}>TIENDA</div>
      <div className='flex justify-center text-xl font-bold'>LOGO</div>
      <div className={styles.sections}>CONTACTO</div>
      {/* icons */}
      <div className={styles.iconsDiv}>
        <div className={styles.icons}>
          <FontAwesomeIcon
            icon={faUser}
            style={{ color: '#1A002A' }}
            className='h-6 '
          />
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='h-6' />
        </div>
        <div className={styles.icons}>
          <FontAwesomeIcon icon={faCartShopping} className='h-6' />
        </div>

        <div className={`${styles.icons} `}>
          <FontAwesomeIcon icon={faCircleQuestion} className='h-6 ' />
        </div>
      </div>
    </main>
  );
};
export default NavBar;
