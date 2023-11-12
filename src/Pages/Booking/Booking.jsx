import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Booking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then((res) => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your item has been deleted.',
                                'success'
                            )
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)
                        }
                    })
            }
        })
    }

    const handleConfirm = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your item has been confirmed',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    useEffect(() => {

        axiosSecure.get(`/bookings?email=${user?.email}`)
        .then(res=>{
            setBookings(res.data)
        })
        // axios.get(`http://localhost:5000/bookings?email=${user?.email}`,{withCredentials: true})
        // .then(res=>{
        //     setBookings(res.data)
        // })

        // fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [axiosSecure,user?.email])
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
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <tr key={booking._id}>
                                <th>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-circle bg-black text-white hover:text-black">
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
                                <td>
                                    {booking.status === 'confirm' ? <span className="font-bold text-green-600">Confirmed</span> :
                                        <button onClick={() => handleConfirm(booking._id)} className="btn normal-case btn-sm">Please Confirm</button>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Booking;