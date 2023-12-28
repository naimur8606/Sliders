import { Rating } from "@mui/material";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";

const Slide = ({product}) => {
    const {img, discount_percent, title, price, rating, short_description} = product;
    return (
        <div className='displayHover p-2 md:h-64 lg:h-[270px] flex justify-between  items-center shadow-sm'>
          <div className='w-5/12 relative'>
            <div className='w-full relative'>
              <h5 className='absolute top-3 md:top-16 lg:top-3 left-5 text-white bg-blue-500 rounded-[50%] p-2'>-{discount_percent}%</h5>
              <img className='w-full' src={img} alt="" />
            </div>
            <div className='displayHidden'>
              <div className='w-full absolute top-0 flex items-center justify-center bg-[#00000061] h-full'>
                <div className='flex text-4xl'>
                  <FaRegHeart className='bg-[#ffffff8f] hover:text-blue-500 p-2 rounded-[50%]'></FaRegHeart>
                  <TfiReload className='mx-5 bg-[#ffffff8f] hover:text-blue-500 p-2 rounded-[50%]'></TfiReload>
                  <FaSearch className='bg-[#ffffff8f] hover:text-blue-500 p-2 rounded-[50%]'></FaSearch>
                </div>
              </div>
            </div>
          </div>
          <div className='w-7/12 py-4 pl-2'>
            <Rating name="read-only" value={rating} readOnly /> <br />
            <h4 className='text-xl md:text-2xl font-semibold'>{title}</h4>
            <h4 className='text-2xl space-x-3 my-1'>
              <span className='text-blue-500 font-bold'>
                ${
                  Math.ceil((price) -
                    (price) *
                    (price) / 100)
                }
              </span>
              <del className='text-gray-500'>${price}</del>
            </h4>
            <p>{short_description}</p>
            <button className='displayHidden text-xl font-medium text-white py-2 px-5 rounded-lg bg-blue-500 hover:bg-black mt-5'>Add to Cart</button>
          </div>
        </div>
    );
};

export default Slide;