import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-2/3 absolute rounded-lg shadow-2xl right-8 top-1/2 border-8 border-white" />
                </div>
                <div className='lg:w-1/2 p-4 space-y-5'>
                    <p className='text-xl text-[#FF3811] font-bold'>About Us</p>
                    <h1 className="text-5xl font-bold w-[400px]">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] normal-case text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;