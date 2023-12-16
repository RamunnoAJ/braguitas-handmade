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
    <div className='grid justify-center items-center h-fit md:my-28 my-10 '>
      <h1 className='w-full h-10 grid justify-center items-center font-bold text-2xl '>
        NUESTROS PRODUCTOS
      </h1>
      <SearchBar defaultValue='' onSubmit={searcher} />
      <div className='flex justify-center gap-2 mb-12'>
        <Button
          handleClick={() => handleCategory(1)}
          cx='bg-[#E8D0EF] hover:bg-[#530586] text-white w-[231px] h-[40px] flex items-center justify-center'>
          CATEGORÍA 1
        </Button>

        <Button
          handleClick={() => handleCategory(2)}
          cx='bg-[#E8D0EF] hover:bg-[#530586] text-white w-[231px] h-[40px] flex items-center justify-center'>
          CATEGORÍA 2
        </Button>

        <Button
          handleClick={() => handleCategory(3)}
          cx='bg-[#E8D0EF] hover:bg-[#530586] text-white w-[231px] h-[40px] flex items-center justify-center'>
          CATEGORÍA 3
        </Button>
        <Button
          handleClick={() => handleCategory(4)}
          cx='bg-[#E8D0EF] hover:bg-[#530586] text-white w-[231px] h-[40px] flex items-center justify-center'>
          CATEGORÍA 4
        </Button>
      </div>

      <div className=''>
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
    </div>
  );
};

export default StorePage;
