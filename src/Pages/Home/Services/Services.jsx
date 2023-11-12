import {  useContext, useEffect, useState } from "react";
import Service from "./Service";
import { AuthContext } from "../../../Providers/AuthProvider";

const Services = () => {
    const {loading}=useContext(AuthContext)
    const [services, setServices] = useState([]);
    const [asc ,setAsc] = useState(true)
    const [search, setSearch]=useState('');
    useEffect(() => {
        fetch(`http://localhost:5000/services?sort=${asc ? 'asc':'desc'}&search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [asc,search])

    const handleSearch = e =>{
        e.preventDefault();
        const search = e.target.search.value;
        setSearch(search)
    }

    return (
        <div>
            <div className="text-center space-y-5 mt-4">
                <h3 className="text-3xl text-[#FF3811]">Services</h3>
                <h1 className="text-6xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don not look even slightly believable. </p>
                <form className="bg-gray-500 p-2" onSubmit={handleSearch}>
                    <input type="text" name="search" />
                    <input type="submit" value="Submit" className="btn ml-3"/>
                </form>
                <button onClick={()=> setAsc(!asc)} className="btn btn-secondary">
                    {asc ? 'Price:High to low':'Price:Low to high'}
                    </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                {
                    loading?<span className="loading loading-spinner text-secondary"></span>: services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-outline btn-secondary">More Services</button>
            </div>
        </div>
    );
};

export default Services;