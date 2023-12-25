import Welcomeimg from '../../assets/Welcomeimg.svg'
import Home from "../../assets/bg.svg";
import {useNavigate} from "react-router-dom";

function Welcome() {
    const backgroundStyle = {
        backgroundImage: `url(${Home})`,
    };
    const navigate = useNavigate()
    const goToSignIn =()=>{
        navigate('/SignIn')
    }
    return (

        <div className="flex sm:flex-row flex-col justify-center items-center bg-center bg-cover min-h-screen w-screen sm:mt-4 mt-20"
             style={backgroundStyle}
             id={'home'}
        >
            <div className="sm:w-[45%] w-full px-8 ">
                <img src={Welcomeimg} alt="Illustration" />
            </div>
            <div className="sm:w-[45%] w-full flex-col justify-center items-center px-4 ">
                <div className='sm:text-start text-center text-gray-600 '>
                    <span className='text-[50px] text-orange-500'>
                        Welcome!
                    </span>
                    <br/>
                    <span className='text-[45px]'>
                        To Park-EASY
                    </span>
                    <p className='text-xl mt-5'>Your friendly parking reservation platform</p>
                    <button className="bg-[#455A64] text-sm text-white hover:bg-[#F3EBE7] hover:text-[#FF6C22] duration-150  py-4 px-5 text-center rounded-full items-center my-10 shadow-xl hover:scale-105"
                    onClick={goToSignIn}>
                        Reserve now
                    </button>
                </div>
            </div>
        </div>
);
}
export default Welcome;





