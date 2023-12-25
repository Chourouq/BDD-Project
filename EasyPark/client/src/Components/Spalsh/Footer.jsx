// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaFacebook, FaTwitter,FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-black p-8 pb-2 flex justify-around items-start flex-wrap "id={'Footer'}>
            <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
                <h3 className="text-3xl font-semibold mb-4 text-[#FF6C22]">Contact-<span className='text-gray-600'>Us</span></h3>
                <form>

                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full h-full p-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-700"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-700"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full p-2 mb-2 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-700"
                    > </textarea>
                    <button
                        type="submit"
                        className="bg-[#455A64] text-lg text-white hover:bg-[#F3EBE7] hover:text-[#FF6C22] duration-150 font-bold py-2 px-4 rounded-full items-center my-2 shadow-xl hover:scale-110 "
                    >
                        Send
                    </button>
                </form>
            </div>

            <div className="w-full md:w-1/3 mb-8 md:mb-0 pl-10 ">
                <h3 className="text-lg font-semibold mb-4">Information</h3>
                <ul>
                    <li className="flex items-center">
                        <FaPhone size={20} className="mr-2  " />
                        : +123456789
                    </li>
                    <li className="flex items-center mb-4">
                        <FaEnvelope size={20} className="mr-2" />
                        : info@example.com
                    </li>
                    <li>
                        <span className='font-bold '>Follow us on social media :</span>
                        <ul className="flex space-x-2 mt-3">
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Facebook"
                                >
                                    <FaFacebook size={32} className="text-[#FF6C22]"/>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Twitter"
                                >
                                    <FaTwitter size={32} className='text-[#FF6C22]'/>
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>
            </div>

            <div className="w-full md:w-1/3">
                <h3 className="text-lg font-semibold mb-4">Google Map</h3>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                    className="w-full h-40 md:h-64"
                    allowFullScreen
                ></iframe>
            </div>
        </footer>
    );
};

export default Footer;
