import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);

    const handleDelete = (id)=>{
        console.log(id);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h2 className="text-3xl">Your bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <h4 className="font-bold text-normal">delete</h4>
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            <th>email</th>
                            <th>phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <tr key={booking._id}>
                                <th>
                                    <button onClick={()=> handleDelete(booking._id)} className="btn btn-circle bg-black text-white hover:text-black">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="items-center">
                                        <div className="avatar">
                                            <div className="w-24 rounded">
                                                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking.service_title}
                                </td>
                                <td>{booking.amount}</td>
                                <td>{booking.email}</td>
                                <td>{booking.phone}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;