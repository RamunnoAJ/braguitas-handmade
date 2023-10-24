import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSliders,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => (
  <div className='flex justify-center items-center'>
    <div className='bg-[#E8D0EF] w-[953px] text-center my-20 rounded  flex justify-center'>
      <div>
        <i class='fa-solid fa-magnifying-glass'></i>
      </div>
      <form>
        <FontAwesomeIcon
          className='pr-4'
          icon={faMagnifyingGlass}></FontAwesomeIcon>
        <input
          className=' h-0.5 m-3 w-[803px] text-left py-4 pl-4 rounded'
          type='text'
          placeholder='Que estas buscando?'
        />
        <FontAwesomeIcon className='pl-4' icon={faSliders}></FontAwesomeIcon>
      </form>
    </div>
  </div>
);

export default SearchBar;
