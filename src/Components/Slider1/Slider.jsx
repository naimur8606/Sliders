import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Sliders.css';
import Slide from './Slide';

export default function Slider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('./Products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const numberToArray = n => Array.from({ length: n }, (_, index) => index + 1);

  const renderProduct = (idx, index) => {
    const productIndex = idx + (index - 1) * 4 - 1;
    let product = products[productIndex];
    if (typeof index !== 'number') {
      product = index;
      console.log(index)
    }
    console.log(product)
    return (
      <div key={idx}>
        <Slide product={product}></Slide>
      </div>
    );
  };

  return (
    <div>
      <h1 className='text-4xl font-bold text-blue-500 text-center mt-10 mb-5'>Slider-1</h1>
      <div className='hidden lg:block'>
        <Swiper navigation modules={[Navigation]} className="mySwiper">
          {numberToArray(products.length / 4)?.map(index => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2">
                {numberToArray(4)?.map(idx => renderProduct(idx, index))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='lg:hidden'>
        <Swiper navigation modules={[Navigation]} className="mySwiper">
          {products?.map((index, idx) => (
            <SwiperSlide key={idx}>
              <Slide product={index}></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
