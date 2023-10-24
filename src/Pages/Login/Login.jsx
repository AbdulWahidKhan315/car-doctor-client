import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(()=>{
            Swal.fire({
                title: 'Success!',
                text: 'Sign In successfully',
                icon: 'success',
                confirmButtonText: 'Ok'
            })
        })
        .catch(error =>{
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Cancel'
            })
        })
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:w-3/4">
                <div className=" w-1/2 lg:mr-10">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h1 className="text-4xl text-center font-bold my-5">Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#FF3811] text-white font-bold">Login</button>
                        </div>
                        <div className='text-center'>
                            <p>Or SIgn In With</p>
                            <div className='flex justify-center gap-5 mt-5'>
                                <button className="btn rounded-full"><FaFacebookF className='text-blue-500'></FaFacebookF></button>
                                <button className="btn rounded-full"><FcGoogle></FcGoogle></button>
                            </div>
                        </div>
                        <p className='text-center'>New to Car Doctor ? please <Link to="/signUp" className='font-bold text-[#FF3811]'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;