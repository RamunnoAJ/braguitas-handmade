import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const QuantityStock = () => {
  const [stock, setStock] = useState(0);

  const incrementStock = () => {
    if (stock < 10) {
      setStock(stock + 1);
    }
  };

  const decrementStock = () => {
    if (stock > 0) {
      setStock(stock - 1);
    }
  };

  return (
    <div className='flex items-center font-bold  bg-white w-[160px] sm:w-[184px] h-[40px] rounded-md  py-2 px-4 text-lg leading-tight border-2 border-[#E8D0EF] '>
      <button
        onClick={decrementStock}
        className='flex  cursor-pointer'
        disabled={stock === 0}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span className='flex w-[140px] justify-center '>{stock}</span>
      <button
        onClick={incrementStock}
        className=' cursor-pointer'
        disabled={stock === 10}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default QuantityStock;
