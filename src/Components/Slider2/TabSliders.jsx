import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from "./Slide";

const TabSliders = () => {

    const swiperRef = useRef(null);
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        fetch('./Products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            });
    }, []);
    const displaySkincareProducts = products?.filter(item => item?.category === "Skincare")
    const displayBeautyProducts = products?.filter(item => item?.category === "Beauty")
    const displayHealthProducts = products?.filter(item => item?.category === "Health")

    const goToSlide = (index) => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
            setValue(index)
        }
    };

    const handleSlideChange = () => {
        const currentSlideIndex = swiperRef.current.swiper.realIndex;
        setValue(currentSlideIndex);
      };

    return (
        <div className="my-5 flex justify-between">
            <div className="lg:w-1/2">

            </div>
            <div className="lg:w-1/2">
                <div>
                    <div className="flex space-x-2">
                        <p onClick={() => goToSlide(0)} className={`${value === 0 ? 'w-10' : 'w-3'} h-3 bg-blue-500 rounded-lg`}></p>
                        <p onClick={() => goToSlide(1)} className={`${value === 1 ? 'w-10' : 'w-3'} h-3 bg-blue-500 rounded-lg`}></p>
                        <p onClick={() => goToSlide(2)} className={`${value === 2 ? 'w-10' : 'w-3'} h-3 bg-blue-500 rounded-lg`}></p>
                    </div>
                    <div>
                        {/* {
                            displayProducts?.map((product, idx) =>

                                <Slide key={idx} product={product}></Slide>
                            )
                        } */}
                        <Swiper
                            ref={swiperRef}
                            className="mySwiper"
                            onSlideChange={handleSlideChange}
                        >
                            <SwiperSlide>
                                <Slide products={displaySkincareProducts}></Slide>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide products={displayBeautyProducts}></Slide>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Slide products={displayHealthProducts}></Slide>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default TabSliders;


// import React, { useRef } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';


// export default function Tab() {
//   const swiperRef = useRef(null);

//   const goToSlide = (index) => {
//     if (swiperRef.current && swiperRef.current.swiper) {
//       swiperRef.current.swiper.slideTo(index);
//     }
//   };

//   return (
//     <>
//       <Swiper
//         ref={swiperRef}
//         className="mySwiper"
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>

//       <button onClick={() => goToSlide(2)}>Go to Slide 3</button>
//     </>
//   );
// }