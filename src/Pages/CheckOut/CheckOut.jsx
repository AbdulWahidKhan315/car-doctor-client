import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckOut = () => {
    const {user}=useContext(AuthContext)
    const service = useLoaderData();
    const {  _id, title, price } = service;

    const handleBook = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const amount = form.dueAmount.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booking = {
            customerName: name,
            date,
            email,
            amount,
            service_title: title,
            service_id: _id,
            phone,
            location,
        }
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'service booked successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

    return (
        <div>
            <h1 className="text-center text-2xl font-bold">Servie Name: {title}</h1>
            <h1 className="text-center text-2xl font-bold">Service Price: {price}</h1>
            <div>
                <div className="card shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleBook}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due Amount</span>
                                </label>
                                <input type="text" defaultValue={"$"+price} name="dueAmount" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" placeholder="Your Phone Number" name="phone" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Location</span>
                                </label>
                                <input type="text" placeholder="Your District and Divison name only" name="location" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Book" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;