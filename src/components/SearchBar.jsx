import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const SearchBar = ({ defaultvalue, onSubmit }) => {
  const [value, setValue] = useState(defaultvalue);
  return (
    <div>
      <div className='flex justify-center items-center h-20  '>
        <div className='bg-[#E8D0EF] w-[330px]  md:w-[953px] text-center my-20 rounded  flex justify-center'>
          <div>
            <i class='fa-solid fa-magnifying-glass'></i>
          </div>
          <form onSubmit={onSubmit}>
            <FontAwesomeIcon
              className='pr-4'
              icon={faMagnifyingGlass}></FontAwesomeIcon>
            <input
              className=' h-0.5 m-3 w-[803px] text-left py-4 pl-4 rounded'
              type='text'
              name='inputSearch'
              placeholder='Que estas buscando?'
              value={value}
              onChange={e => {
                setValue(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
