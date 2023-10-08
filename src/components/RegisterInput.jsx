import React from 'react';

const RegisterInput = ({ id, placeholder, type, textLabel }) => (
    <div className='md:w-[474px] w-[300px] h-14 '>
      <label for={id} className='absolute bg-white ml-4  h-[16px] px-1'>
        {textLabel}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        className='w-full h-[50px] rounded-md   border-2 border-[#530586] mt-2 pl-3'
      />
    </div>
  );

export default RegisterInput;
