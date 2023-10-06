import React from 'react';

const RGB = () => {
    return (
        <div className='bg-blue-50 h-screen'  >
            <nav className="bg-blue-50 flex-1 ">
                <div className="">
                    <ul className="bg-blue-50 text-gray-950 p-4  h-16">
                        <li className="float-left">
                            <h3 className="font-bold text-gray-950 ">Lock & Key</h3>
                        </li>
                        <li className="float-right">
                            <a href="#home" className="text-blue-50 bg-blue-950 font-bold px-3 py-2">Home</a>
                            <a href="#about" className="text-gray-950  hover:bg-blue-950 hover:text-blue-50 px-3 py-2">About us</a>
                            <a href="#contact" className="text-gray-950  hover:bg-blue-950 hover:text-blue-50  px-3 py-2">Contact</a>
                            <a href="#signup" className="text-gray-950  hover:bg-blue-950 hover:text-blue-50  px-3 py-2">Sign up</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <hr />
            <div className=' bg-blue-50 flex justify-center items-center h-5/6'>
                <div className=' bg-white p-8 rounded-lg shadow-xl h-96 w-96 '>
                    <h2 className='flex justify-center items-center p-1 text-xl font-semibold'>Sign Up</h2>
                    <h3 className='flex justify-center items-center p-3 font-normal'>Enter your pattern !</h3>
                    <div className='flex justify-center p-6 space-x-4 '>

                        <button className="w-12 h-12 bg-red-500 p-10 rounded-lg shadow-lg" >
                        </button>
                        <button className="w-12 h-12 bg-green-500 p-10 rounded-lg shadow-lg">
                        </button>
                        <button className="w-12 h-12 bg-blue-500 p-10 rounded-lg shadow-lg">
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-red-600 '>Three clicks only!</p>
                    </div>
                    <div className='flex justify-center items-center p-2'>
                        <button type="submit"
                            className="bg-blue-600 text-white  mb-2 rounded w-full hover:bg-blue-700 opacity-90 cursor-pointer px-6 py-4">Next</button>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default RGB;