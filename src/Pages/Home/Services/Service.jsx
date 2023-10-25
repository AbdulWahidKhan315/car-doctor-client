import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { title, img, price, _id } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-[#FF3811] font-bold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn text-lg normal-case text-[#FF3811] flex items-center gap-2">Book Now:<AiOutlineArrowRight></AiOutlineArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;