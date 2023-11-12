import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axioSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{
        axioSecure.interceptors.response.use(res =>{
            return res;
        }, error =>{
            console.log('hello error',error.response)
            if(error.response.status === 401 || error.response.status === 403){
                logOut()
                .then(()=>{
                    navigate('/login')
                })
                .catch(err => {
                    console.log(err) 
                })
            }
        })
    },[navigate,logOut])
    return axioSecure 
};

export default useAxiosSecure;