import React from 'react';

export default function Faceid() {
    return (
        <div className='bg-blue-50 h-screen'>
            <nav className="bg-blue-50">
                <div className="bg-blue-50 text-gray-950 p-4 h-16">
                    <ul className="flex items-center justify-between">
                        <li>
                            <h3 className="font-bold text-gray-950">Lock & Key</h3>
                        </li>
                        <li>
                            <a href="#home" className="text-blue-950 font-bold px-3 py-2">Home</a>
                            <a href="#about" className="text-gray-950 hover:bg-blue-950 hover:text-blue-50 px-3 py-2">About us</a>
                            <a href="#contact" className="text-gray-950 hover:bg-blue-950 hover:text-blue-50 px-3 py-2">Contact</a>
                            <a href="#signup" className="text-gray-950 hover:bg-blue-950 hover:text-blue-50 px-3 py-2">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr />
            <div className="flex justify-center items-center h-3/4">
                <div className=" md:w-1/2 hidden md:flex flex-col">
                    <img src="/face.png" alt="Face Recognition" />
                </div>
                <div className="md:w-1/2 p-8 md:p-0 space-y-5 flex flex-col justify-center">
                    <div>

                        <h1 className="md:w-1/2 p-8 md:p-0 space-y-5 flex flex-col justify-center text-xl font-bold text">Face Recognition</h1>
                        <h3 className="md:w-1/2 p-8 md:p-0 space-y-5 flex flex-col justify-center">
                            Revolutionize your online security with our cutting-edge face recognition technology. Seamlessly authenticate users, enhance user experiences, and safeguard sensitive information on your website.
                        </h3>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white mb-2 rounded w-full hover:bg-blue-700 opacity-90 cursor-pointer px-6 py-4 md:w-1/2 space-y-5 "
                        >
                            Identify
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
