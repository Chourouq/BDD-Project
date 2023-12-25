import React ,{useState} from "react";
import {FaUserCircle} from "react-icons/fa";
import { IoNotificationsOutline,IoLogOutOutline } from "react-icons/io5";
import EditCard from "./EditCard.jsx";
import Popup from "reactjs-popup";
import NotificationCard from "./NotificationCard.jsx";

function Profile() {
    const [showEditCard, setShowEditCard] = useState(false);
    const CloseEditCard = ()=>setShowEditCard(false)
    const arrowStyle = {color: 'black'};
    return (
        <div className='flex flex-row justify-center items-center p-4'>
            <Popup
                trigger={
                    <button>
                        <IoNotificationsOutline className='sm:mx-2 mr-2 w-8 h-8 text-gray-600'/>
                    </button>
                }
                position="bottom"
                arrowStyle={arrowStyle}
                >
                <div className="max-h-[200px] min-w-[300px]  absolute -right-8">
                <NotificationCard />
                </div>
            </Popup>
            <Popup
                trigger={
                    <button>
                        <FaUserCircle className='sm:mx-2 mr-2 w-8 h-8 text-gray-600 '/>
                    </button>
                }
                position="bottom"
                arrowStyle={arrowStyle}
            >
                <div className="max-h-[200px] min-w-[200px] p-2 absolute -right-8 ">
                    <div
                        className="flex text-[12px] flex-col justify-start bg-white rounded-xl text-gray-600  border-t-2 border-b-2 border-gray-500 shadow-xl p-2">
                        <div className="flex flex-row items-center text-[10px] mb-4 cursor-pointer">
                          <span className="text-cyan-600 text-[18px] mr-2 p-1 rounded-full bg-white">
                            <FaUserCircle/>
                          </span>
                          <span className="text-center text-[12px] " onClick={()=>setShowEditCard(true)}>Profile</span>
                            <EditCard onClose={CloseEditCard} visible={showEditCard}/>
                        </div>
                        <div className="flex flex-row items-center text-[10px] cursor-pointer">
                          <span className="text-cyan-600 text-[18px] mr-2 p-1 rounded-full bg-white">
                            <IoLogOutOutline/>
                          </span>
                          <span className="text-center text-[12px]">Log out</span>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    );
}

export default Profile;