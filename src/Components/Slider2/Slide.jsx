import { Rating } from "@mui/material";

const Slide = ({ products }) => {
    return (
        <ul>
            {
                products?.map((product, idx) =>
                    <li key={idx} className="flex space-x-4 py-2 shadow-sm">
                        <img className="w-1/3 h-32 rounded" src={product?.img} alt="" />
                        <div>
                            <Rating name="read-only" value={product?.rating} readOnly /> <br />
                            <h4 className='text-xl font-semibold'>{product?.title}</h4>
                            <h4 className='text-2xl space-x-3 my-1'>
                                <span className='text-blue-500 font-bold'>
                                    ${
                                        Math.ceil((product?.price) -
                                            (product?.price) *
                                            (product?.price) / 100)
                                    }
                                </span>
                                <del className='text-gray-500'>${product?.price}</del>
                            </h4>
                        </div>
                    </li>
                )
            }
        </ul>
    );
};

export default Slide;