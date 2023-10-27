'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Select({ options, selectedValue, onChange }) {
  return (
    <div className='relative'>
      <select
        className='focus:bg-white font-bold bg-[#E8D0EF] w-[160px] sm:w-[184px] h-[40px]  appearance-none rounded-md border-gray-300 py-2 px-4 pr-8 text-lg leading-tight focus:outline-[#E8D0EF] '
        value={selectedValue}
        onChange={onChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className='pointer-events-none absolute left-28 md:left-32 flex items-center inset-y-0  px-4 text-gray-600'>
        <FontAwesomeIcon
          className='text-[#1C1B1F] w-[20px] h-[20px] '
          icon={faAngleDown}
        />
      </div>
    </div>
  );
}

export default Select;
