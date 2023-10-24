
const Service = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-[300px]" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-[#FF3811] font-bold">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Service;