import about from '../../assets/About.svg';
import Home from "../../assets/bg.svg";

function About() {
    const backgroundStyle = {
        backgroundImage: `url(${Home})`,
    };
    return (

        <div className="flex sm:flex-row-reverse flex-col justify-center items-center bg-center bg-cover min-h-screen w-screen"
             style={backgroundStyle}
             id={'about'}
        >
            <div className="sm:w-[45%] w-full px-8 ">
                <img src={about} alt="Illustration" />
            </div>
            <div className="sm:w-[45%] w-full flex-col justify-center items-center px-4 ">
                <div className='font-bold text-center text-xl '>
                    <span className='text-5xl text-gray-600'>About <span className='text-orange-500'>Us</span></span>
                    <br/><br/>
                    <p className='p-4 pb-8'>
                        At EasyPark, we understand that finding the perfect parking spot should be as simple as a click. Our user-friendly platform is designed with you in mind, offering a seamless parking experience that takes the stress out of city parking.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;





