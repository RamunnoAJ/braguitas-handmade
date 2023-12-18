'use client';

import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import ProductCard from '../../components/ProductCard';
import Button from '../../components/buttons/Button';

const StorePage = () => {
  const [products, setProduct] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const ShowData = async () => {
      const URL = `https://reqres.in/api/users/`;
      const response = await fetch(URL);
      const data = await response.json();
      setProduct(data.data);
    };

    ShowData();
  }, []);
  const searcher = e => {
    e.preventDefault();
    setSearch(e.target.inputSearch.value);
    setCategory(null);
  };

  // eslint-disable-next-line no-shadow
  const handleCategory = category => {
    setCategory(category);
  };
  const filteredProducts = products.filter(product => {
    const name = product.first_name
      .toLowerCase()
      .includes(search.toLowerCase());

    if (category === 1) {
      return search.trim() === ''
        ? product.first_name.toLowerCase() === 'emma'
        : name;
    }

    if (category === 2) {
      return search.trim() === ''
        ? product.first_name.toLowerCase() === 'george'
        : name;
    }

    if (category === 3) {
      return search.trim() === ''
        ? product.first_name.toLowerCase() === 'janet'
        : name;
    }

    if (category === 4) {
      return search.trim() === ''
        ? product.first_name.toLowerCase() === 'eve'
        : name;
    }

    return search.trim() !== '' ? name : name;
  });

  return (
    <main className='grid justify-center items-center h-full md:my-28 my-10  '>
      <h1 className=' grid justify-center items-center w-full h-10 font-bold text-2xl '>
        NUESTROS PRODUCTOS
      </h1>
      <SearchBar defaultValue='' onSubmit={searcher} />
      <div className='flex  items-center justify-center mx-4'>
        <div className='md:flex m-2'>
          <Button
            handleClick={() => handleCategory(1)}
            cx='bg-[#E8D0EF] hover:bg-[#530586] text-white text-xs md:text-sm w-full md:w-[231px] h-[40px] flex items-center justify-center m-2'>
            CATEGORÍA 1
          </Button>

          <Button
            handleClick={() => handleCategory(2)}
            cx='bg-[#E8D0EF] hover:bg-[#530586] text-white text-xs md:text-sm w-full md:w-[231px] h-[40px] flex items-center justify-center m-2'>
            CATEGORÍA 2
          </Button>
        </div>
        <div className='md:flex m-2'>
          <Button
            handleClick={() => handleCategory(3)}
            cx='bg-[#E8D0EF] hover:bg-[#530586] text-white text-xs md:text-sm w-full md:w-[231px] h-[40px] flex items-center justify-center m-2'>
            CATEGORÍA 3
          </Button>
          <Button
            handleClick={() => handleCategory(4)}
            cx='bg-[#E8D0EF] hover:bg-[#530586] text-white text-xs md:text-sm w-full md:w-[231px] h-[40px] flex items-center justify-center m-2'>
            CATEGORÍA 4
          </Button>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mx-4'>
        <h3 className='w-full grid justify-center items-center font-bold text-lg '>
          MOSTRANDO LOS RESULTADOS DE TU BÚSQUEDA
        </h3>
        {filteredProducts.length === 0 ? (
          <div> No se encontraron resultados</div>
        ) : (
          <div className='grid md:grid-cols-4 xl:mx-40 sm:mx-20 grid-cols-2 gap-4 p-2 mt-10 '>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                image={product.avatar}
                title={product.first_name}
                price={`$ ${product.id}`}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default StorePage;
