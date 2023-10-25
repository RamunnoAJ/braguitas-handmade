'use client';

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardImage from './CardImage';
import ProductCard from './ProductCard';

function CarouselHome() {
  const apiUrl = 'https://source.unsplash.com/';

  const [slides, setSlides] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleSideImageClick = index => {
    setSelectedImageIndex(index);
  };

  const fetchImages = async () => {
    const imagePromises = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 4; i++) {
      imagePromises.push(
        fetch(`${apiUrl}956x427/?fashion`).then(response => ({
          url: response.url,
        })),
      );
    }

    const imageUrls = await Promise.all(imagePromises);
    setSlides(imageUrls);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className='relative z-10'>
      {isLoading ? (
        <p className='flex justify-center font-bold text-2xl mb-10 '>
          Loading...
        </p>
      ) : (
        <div>
          <Carousel
            showArrows={true}
            centerMode={true}
            selectedItem={selectedImageIndex}
            emulateTouch={true}
            showThumbs={false}
            dynamicHeight={true}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}>
            {slides.map((slide, index) => (
              <CardImage
                handleClick={() => handleSideImageClick(index)}
                key={index}
                src={slide.url}
                alt={`url(${slide.url})`}
                imageClassName='h-[160px] w-[280px] sm:w-full sm:h-full object-cover  px-2 xl:px-6'
              />
            ))}
          </Carousel>
          <div className='grid md:grid-cols-4 xl:mx-40 sm:mx-20 grid-cols-2 gap-4 p-2 mt-10'>
            {slides.map((slide, index) => (
              <CardImage
                key={index}
                src={slide.url}
                alt={`url(${slide.url})`}
                onCategory={true}
                category={` Categoria ${index + 1}`}
                handleClick={() => handleSideImageClick(index)}
                imageClassName={`object-cover text-white flex items-center justify-center font-semibold w-full h-32 md:h-60 bg-cover ring-4  ${
                  index === selectedImageIndex
                    ? 'ring-purple-500'
                    : 'ring-transparent'
                }`}
              />
            ))}
          </div>
          <p className='flex font-bold text-xl sm:text-2xl justify-center items-center uppercase my-8'>
            Productos destacados
          </p>
          <div className='grid md:grid-cols-4 xl:mx-40 sm:mx-20 grid-cols-2 gap-4 p-2 mt-10'>
            {slides.map((slide, index) => (
              <ProductCard
                key={index}
                image={slide.url}
                title='Nombre del producto'
                price='Precio'
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CarouselHome;
