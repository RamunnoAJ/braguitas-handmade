import React from 'react';

const RegisterInput = ({ id, placeholder, type, textLabel }) => (
  <div className='md:w-[474px] w-[300px]   md:px-0 px-2 pt-4'>
    <label
      for={id}
      className='absolute z-20 bg-white ml-4 px-1 text-xs md:text-lg'>
      {textLabel}
    </label>
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      className=' relative z-10 w-full md:h-[50px] h-[40px] rounded-md   border-2 border-[#530586] mt-2 md:mt-4 p-3   text-xs md:text-base'
    />
  </div>
);

export default RegisterInput;
