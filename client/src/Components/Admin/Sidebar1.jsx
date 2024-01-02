// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";
import {IoIosArrowBack} from "react-icons/io";
import {AiOutlineAppstore} from "react-icons/ai";
import {FaClipboardList, FaThList} from "react-icons/fa";
import {useMediaQuery} from "react-responsive";
import {NavLink,useLocation} from "react-router-dom";
import {IoCarSport} from "react-icons/io5";
import {FaPerson} from "react-icons/fa6";

const bar = [
    {
        path: "/Dashboard",
        icon: <AiOutlineAppstore size={23} className="min-w-max"/>,
        name: "Dashboard"
    },
    {
        path: "/Management",
        icon: <FaPerson size={23} className="min-w-max"/>,
        name: "Management"
    },
    {
        path: "/Plan",
        icon: <FaClipboardList size={23} className="min-w-max"/>,
        name: "Plan"
    }
]

const Sidebar = () => {
    let isTabletMid = useMediaQuery({query: "(max-width: 768px)"});
    const [open, setOpen] = useState(!isTabletMid);
    const sidebarRef = useRef();
    const {pathname} = useLocation();

    useEffect(() => {
        if (isTabletMid) {
            setOpen(false);
        } else {
            setOpen(true);
        }
    }, [isTabletMid]);

    useEffect(() => {
        isTabletMid && setOpen(false);
    }, [pathname]);

    const Nav_animation = isTabletMid
        ? {
            open: {
                x: 0,
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                x: -250,
                width: 0,
                transition: {
                    damping: 40,
                    delay: 0.15,
                },
            },
        }
        : {
            open: {
                width: "16rem",
                transition: {
                    damping: 40,
                },
            },
            closed: {
                width: "4rem",
                transition: {
                    damping: 40,
                },
            },
        };

    return (
        <div>
            <div
                onClick={() => setOpen(false)}
                className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
                    open ? "block" : "hidden"
                } `}
            ></div>
            <motion.div
                ref={sidebarRef}
                variants={Nav_animation}
                initial={{x: isTabletMid ? -250 : 0}}
                animate={open ? "open" : "closed"}
                className=" bg-orange-400 text-white shadow-xl z-[999] max-w-[12rem]  w-[12rem]
                 overflow-hidden md:relative fixed
                 h-screen rounded-r-[10px]"
            >
                <div className="flex flex-row items-center font-medium border-b py-2 border-slate-300  mx-4">
                    <span className='text-[25px] mx-1'>
                       <IoCarSport/>
                    </span>
                    <h4 className="text-sm font-medium pl-4">
                        ParkEasy
                    </h4>
                </div>


                <div className="flex flex-col  h-full">
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-cyan-600   md:h-[68%] h-[70%]">
                        {bar.map((info, index) =>
                            <li key={index}>
                                <NavLink to={info.path} className="link" onClick={() => {
                                    setOpen(!open);
                                }}
                                         animate={
                                             open
                                                 ? {
                                                     x: 0,
                                                     y: 0,
                                                     rotate: 0,
                                                 }
                                                 : {
                                                     x: -10,
                                                     y: -200,
                                                     rotate: 180,
                                                 }
                                         }
                                         transition={{duration: 0}}>
                                    {info.icon}
                                    {info.name}
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </div>
                <motion.div
                    onClick={() => {
                        setOpen(!open);
                    }}
                    animate={
                        open
                            ? {
                                x: 0,
                                y: 0,
                                rotate: 0,
                            }
                            : {
                                x: -10,
                                y: -200,
                                rotate: 180,
                            }
                    }
                    transition={{duration: 0}}
                    className="absolute w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
                >
                    <IoIosArrowBack size={25}/>
                </motion.div>
            </motion.div>
            <div className="absolute top-5 left-4 md:hidden" onClick={() => setOpen(true)}>
                <FaThList size={24}/>
            </div>
        </div>
    );
};

export default Sidebar;
