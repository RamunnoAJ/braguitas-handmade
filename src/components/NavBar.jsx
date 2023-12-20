'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import {
  faMagnifyingGlass,
  faCartShopping,
  faCircleQuestion,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/logo.svg';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <main className='bg-[#E8D0EF] w-full items-center h-16 md:h-20 md:px-12 px-6'>
      <div className='hidden md:grid  md:grid-cols-5  h-20  '>
        <div className='flex justify-center items-center    col-span-4 '>
          <Link
            href='/'
            className='flex justify-center items-center font-bold text-sm hover:bg-white text-[#530586]  w-full rounded-full h-10 mx-10'>
            INICIO
          </Link>
          <Link
            href='/store'
            className='flex justify-center items-center font-bold text-sm hover:bg-white text-[#530586]  w-full rounded-full h-10 mr-20 '>
            TIENDA
          </Link>
          <div className='justify-center items-center flex flex-col w-full h-20 px-10 '>
            <Image className='w-8 h-8 ' src={Logo} alt='logo' />
            <h1 className='text-[#530586] text-xl font-semibold'>BRAGUITAS</h1>
            <p className='text-[#530586] text-xs'>H A N D M A D E</p>
          </div>
          <Link
            href='/contact'
            className='flex justify-center items-center font-bold text-sm hover:bg-white text-[#530586]  w-full rounded-full h-10 ml-20 '>
            CONTACTO
          </Link>
        </div>
        {/* icons */}

        <div className='flex justify-center items-center    pl-10 pr-8  '>
          <div className='rounded-full flex  h-10 w-10 items-center justify-center hover:bg-[#fff] '>
            <FontAwesomeIcon
              icon={faUser}
              className='h-6 '
              style={{ color: '#530586' }}
            />
          </div>

          <div className='rounded-full flex  h-10 w-10 items-center justify-center hover:bg-[#fff]'>
            <FontAwesomeIcon
              icon={faCartShopping}
              className='h-6'
              style={{ color: '#530586' }}
            />
          </div>

          <div className='rounded-full flex  h-10 w-10 items-center justify-center hover:bg-[#fff]'>
            <FontAwesomeIcon
              icon={faCircleQuestion}
              className='h-6 '
              style={{ color: '#530586' }}
            />
          </div>
        </div>
      </div>
      {/* hambur */}
      {!nav ? (
        <div className=' grid grid-cols-3 md:hidden items-center w-full h-16  '>
          <FontAwesomeIcon
            icon={faBars}
            size='lg'
            onClick={handleClick}
            style={{ color: '#530586' }}
          />
          <div className=' md:hidden   justify-center items-center flex flex-col'>
            <Image className='w-10 h-10' src={Logo} alt='logo' />
          </div>
          <div className='flex  justify-end'>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size='lg'
              style={{ color: '#530586' }}
            />
            <FontAwesomeIcon
              icon={faCartShopping}
              size='lg'
              style={{ color: '#530586' }}
            />
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className=' flex md:hidden items-center  h-16'>
          <ul className='w-full h-screen absolute z-30 top-0 left-0    bg-white  '>
            <div className='grid md:hidden   h-20 w-full bg-[#E8D0EF] items-center px-10'>
              <FontAwesomeIcon
                icon={faCircleXmark}
                style={{ color: '#530586' }}
              />
            </div>
            <li className='px-10 py-5 font-bold text-sm text-[#530586]'>
              <Link href='/'>PERFIL</Link>
            </li>
            <li className='px-10 py-5 font-bold text-sm text-[#530586]'>
              <Link href='/'>INICIO</Link>
            </li>
            <li className='px-10 py-5 font-bold text-sm text-[#530586]'>
              <Link href='/store'>TIENDA</Link>
            </li>
            <li className='px-10 py-5 font-bold text-sm text-[#530586]'>
              <Link href='/contact'>CONTACTO</Link>
            </li>
          </ul>
        </div>
      )}{' '}
    </main>
  );
};
export default NavBar;
