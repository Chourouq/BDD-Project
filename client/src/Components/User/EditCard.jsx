import React, { useContext, useEffect,useState } from 'react';
import AdminFinder from '../../Apis/AdminFinder';
import { AdminContext } from '../../context/AdminContext';
import { IoPersonOutline, IoCallOutline, IoMailOutline, IoKeyOutline } from 'react-icons/io5';
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function EditCard({ visible, onClose }) {

     const {admin}=useContext(AdminContext);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const {  setAdmin } = useContext(AdminContext);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await AdminFinder.get('/');
          setAdmin(response.data.data.admin);
          console.log(response.data.data);
          setUsername(response.data.data.admin.username)
          setPhoneNumber(response.data.data.admin.phonenumber)
          setEmail(response.data.data.admin.email)
          setPassword(response.data.data.admin.password)
          setUsername(response.data.data.admin.username)

        } catch (err) {
          console.error(err);
        }
      };
  
      fetchData();
    }, []);
  





    if (!visible) return null;

    const inputs = [
        {
            icon: <IoPersonOutline />,
            type: "text",
            holder: "Username",
            state: username,
            setState: setUsername,
        },
        {
            icon: <IoCallOutline />,
            type: "number",
            holder: "Phone number",
            state: phoneNumber,
            setState: setPhoneNumber,
        },
        {
            icon: <IoMailOutline />,
            type: "email",
            holder: "Email address",
            state: email,
            setState: setEmail,
        },
        {
            icon: <IoKeyOutline />,
            type: showPassword ? "text" : "password",
            holder: "Password",
            toggleIcon: showPassword ? <RiEyeOffFill /> : <RiEyeFill />,
            onToggle: () => setShowPassword(!showPassword),
            state: password,
            setState: setPassword,
        },
        {
            icon: <IoKeyOutline />,
            type: showConfirmPassword ? "text" : "password",
            holder: "Confirm Password",
            toggleIcon: showConfirmPassword ? <RiEyeOffFill /> : <RiEyeFill />,
            onToggle: () => setShowConfirmPassword(!showConfirmPassword),
            state: showConfirmPassword,
            setState: setShowConfirmPassword,
        },
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updatedAdmin = await AdminFinder.put("http://localhost:3000/api/v1/admin/1", {
              
               
                    username,
                    phoneNumber,
                    email,
                    password,
             
            });

          console.log(updatedAdmin);
        } catch (error) {
            console.error("Error updating admin data:", error);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[1000] ">
            <div className="flex flex-col gap-6 bg-white md:p-4 p-2 rounded-xl md:mx-auto border-2 border-gray-600 sm:w-[45%] w-full mx-4">
                <div className="flex flex-row justify-between">
                    <span></span>
                    <span className="text-orange-500 font-medium text-xl">Edit profile</span>
                    <button onClick={onClose} className="text-gray-600 text-[20px] font-bold">X</button>
                </div>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    {inputs.map((input, index) => (
                        <div className="flex flex-row justify-start border-2 border-gray-600 rounded-2xl px-2 w-full m-3 py-1" key={index}>
                            <div className="sm:text-3xl text-xl text-orange-500 flex items-center px-2">
                                {input.icon}
                            </div>
                            <input
                                className="border-none w-[95%] flex focus:outline-none"
                                type={input.type}
                                placeholder={input.holder}
                                value={input.state}
                                onChange={(e) => input.setState(e.target.value)}
                            />
                            {input.toggleIcon && (
                                <div className="sm:text-3xl text-xl text-orange-500 flex items-center px-2 cursor-pointer" onClick={input.onToggle}>
                                    {input.toggleIcon}
                                </div>
                            )}
                        </div>
                    ))}
                    <button onClick={() =>handleSubmit()}
                        type="submit"
                        className="bg-[#455A64] text-sm text-white duration-150 font-bold py-2 px-4 rounded-full items-center my-2 shadow-xl hover:scale-110 "
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditCard;
