'use client';

import Button from '../../components/buttons/Button';
import SearchBar from '../../components/SearchBar';

const StorePage = () => (
    <div className='grid justify-center items-center h-fit md:my-28 my-10 '>
      <h1 className='w-full h-10 grid justify-center items-center font-bold text-2xl '>
        NUESTROS PRODUCTOS
      </h1>
      <SearchBar>
        <div className='flex justify-center gap-2 mb-12'>
          <Button cx='bg-[#E8D0EF] hover:bg-[#530586] text-white w-[231px] h-[40px] flex items-center justify-center'>
            CATEGORÍA
          </Button>
          <Button cx='bg-[#E8D0EF] hover:bg-[#530586] text-white w-[231px] h-[40px] flex items-center justify-center'>
            CATEGORÍA
          </Button>
          <Button cx='bg-[#E8D0EF] hover:bg-[#530586] text-white w-[231px] h-[40px] flex items-center justify-center'>
            CATEGORÍA
          </Button>

          <Button cx='bg-[#E8D0EF] hover:bg-[#530586] text-white w-[231px] h-[40px] flex items-center justify-center'>
            CATEGORÍA
          </Button>
        </div>
      </SearchBar>
    </div>
  );

export default StorePage;
