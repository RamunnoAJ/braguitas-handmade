'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhoneVolume,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import Form from '../../components/contact/Form';
import Title from '../../components/contact/Title';

export default function Contact() {
  return (
    <main className='flex flex-col items-center justify-between gap-12 w-full mx-auto px-2 my-12 md:gap-16'>
      <Title title='Contáctanos' />
      <div className='flex flex-col md:flex-row md:max-w-[710px] w-full items-center gap-4 '>
        <div className='flex flex-row w-full max-w-[330px] items-center justify-center gap-2 font-medium md:flex-col md:border-r-4 border-[#8F3AC6] md:h-[175px]'>
          <FontAwesomeIcon
            icon={faLocationDot}
            className='text-[#530586] w-[24px] h-[24px]'
          />
          <p className='hidden md:block font-bold uppercase text-lg'>
            Ubicación
          </p>
          <p>Ejemplo 0000</p>
        </div>
        <div className='flex flex-row w-full max-w-[330px] items-center justify-center gap-2 font-medium md:flex-col md:border-r-4 border-[#8F3AC6] md:h-[175px]'>
          <FontAwesomeIcon
            icon={faPhoneVolume}
            className='text-[#530586] w-[24px] h-[24px]'
          />
          <p className='hidden md:block uppercase text-lg font-bold'>
            Teléfono
          </p>
          <p>+54 223 000 0000</p>
        </div>
        <div className='flex flex-row w-full max-w-[330px] items-center justify-center gap-2 font-medium md:flex-col md:h-[175px]'>
          <FontAwesomeIcon
            icon={faEnvelope}
            className='text-[#530586] w-[24px] h-[24px]'
          />
          <p className='hidden md:block uppercase text-lg font-bold'>Email</p>
          <p>ejemplo@gmail.com</p>
        </div>
      </div>
      <Form />
    </main>
  );
}
