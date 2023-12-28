import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from "./Slide";
import summerSell from '../../assets/summerSell.png'

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
        <div>
            <h1 className='text-4xl font-bold text-blue-500 text-center mt-10 mb-5'>Slider-2</h1>
        <div className="my-5 flex justify-between">
            <div className="lg:w-7/12">
            <img className="h-80 mt-12" src={summerSell} alt="" />
            </div>
            <div className="pl-2 lg:w-5/12">
                <div>
                    <div className="flex justify-between">
                    <h3 className="uppercase border-b-4 pb-2 border-blue-500 text-2xl font-bold">Best Sellers</h3>
                    <div className="flex space-x-2">
                        <p onClick={() => goToSlide(0)} className={`${value === 0 ? 'w-10' : 'w-3'} h-3 bg-blue-500 rounded-lg`}></p>
                        <p onClick={() => goToSlide(1)} className={`${value === 1 ? 'w-10' : 'w-3'} h-3 bg-blue-500 rounded-lg`}></p>
                        <p onClick={() => goToSlide(2)} className={`${value === 2 ? 'w-10' : 'w-3'} h-3 bg-blue-500 rounded-lg`}></p>
                    </div>
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
        </div>
    );

};

export default TabSliders;