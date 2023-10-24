import { AiOutlineCalendar, AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
const Contact = () => {
    return (
        <div className="flex gap-10 justify-around flex-col lg:flex-row text-white bg-black py-10 lg:py-20 rounded-lg my-5">
            <div className='flex items-center gap-3'>
                <AiOutlineCalendar className='text-4xl'></AiOutlineCalendar>
                <div>
                    <p>We are open monday-friday</p>
                    <h3 className="text-3xl">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <AiOutlinePhone className='text-4xl'></AiOutlinePhone>
                <div>
                    <p>Have a question?</p>
                    <h3 className="text-3xl">+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <CiLocationOn className='text-4xl'></CiLocationOn>
                <div>
                    <p>Need a repair? our address</p>
                    <h3 className="text-3xl">Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;