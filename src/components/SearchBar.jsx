import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSliders,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

const SearchBar = ({ children }) => {
  const [products, setProduct] = useState([]);
  const [search, setSearch] = useState('');

  const URL = 'https://reqres.in/api/users/';

  const ShowData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProduct(data.data);
  };

  const searcher = e => {
    setSearch(e.target.value);
  };

  const filteredProducts = !search
    ? products
    : products.filter(product =>
        product.first_name.toLowerCase().includes(search.toLowerCase()),
      );

  const result =
    search && filteredProducts.length === 0
      ? 'No se encontraron resultados'
      : filteredProducts;

  useEffect(() => {
    ShowData();
  }, []);
  return (
    <div>
      <div className='flex justify-center items-center h-20  '>
        <div className='bg-[#E8D0EF] w-[330px]  md:w-[953px] text-center my-20 rounded  flex justify-center'>
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
              value={search}
              onChange={searcher}
            />
            <FontAwesomeIcon
              className='pl-4'
              icon={faSliders}></FontAwesomeIcon>
          </form>
        </div>
      </div>
      {children}
      <div className=''>
        <h3 className='w-full grid justify-center items-center font-bold text-lg '>
          MOSTRANDO LOS RESULTADOS DE TU BÚSQUEDA
        </h3>
        {search ? (
          <div className='grid md:grid-cols-4 xl:mx-40 sm:mx-20 grid-cols-2 gap-4 p-2 mt-10'>
            {Array.isArray(result) ? (
              result.map(product => (
                <ProductCard
                  key={product.id}
                  image={product.avatar}
                  title={product.first_name}
                  price={`$ ${product.id}`}
                />
              ))
            ) : (
              <p>{result}</p>
            )}
          </div>
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

export default SearchBar;
