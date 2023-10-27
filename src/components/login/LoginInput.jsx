'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function LoginInput({
  type,
  placeholder,
  id,
  label,
  isPassword,
}) {
  const [inputType, setInputType] = useState(type);

  const handleShowPassword = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  return (
    <div className='w-full relative'>
      <label
        htmlFor={id}
        className='absolute z-20 bg-white ml-8 px-1 text-sm font-medium md:text-lg '>
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={inputType}
        className=' relative z-10 w-full rounded-md border-2 border-[#530586] mt-2 md:mt-4 px-8 py-4 text-xs md:text-base'
      />
      {isPassword && (
        <span
          className='absolute right-4 bottom-3 md:bottom-4 z-20 cursor-pointer'
          onClick={handleShowPassword}>
          <FontAwesomeIcon icon={faEye} color='#530586' />
        </span>
      )}
    </div>
  );
}
