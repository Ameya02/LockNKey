import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RGB = () => {
    const navigate = useNavigate();
	const [colors,setColors] = useState({
        red:0,
        blue:0,
        green:0
    })
    const [pattern,setPattern] = useState("")
    // const [red, setRed] = useState(0)
    // const [blue, setBlue] = useState(0)
    // const [green, setGreen] = useState(0)

    const handlePattern = async (e) => {
        e.preventDefault();
        let value = e.target.value

        if(colors[value]<=1)
        {
        setColors({
            ...colors,
            [value]: colors[value] + 1
          });
       
        setPattern(pattern+value)
        }
        else{
            let value = e.target.value
            setError(`You can click a ${value} 2 times only`)
        }
      

    }
   

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);
    const handleSubmit = async(e)  => {
        try {
			setError("");
			setLoading(true);
			const res = await axios.post(
				"api/user/colorauth",
				{
					color_secret: pattern,
				},
				{
					withCredentials: true,
				}
			);
			setSuccess(res.data.msg);
			setLoading(false);
			setTimeout(() => {
				navigate("/imgauth");
			}, 1000);
		} catch (err) {
			console.error(err);
			setError(err.response ? err.response.data.msg : err.msg);
			setLoading(false);
		}
	};
    return (
        <div className='bg-blue-50 h-screen'  >

            <div className=' bg-blue-50 flex justify-center items-center h-5/6'>
                <div className=' bg-white p-8 rounded-lg shadow-xl h-96 w-96 '>
                
                {error && (
              <div className=" bg-red-200 text-red-700 rounded ">
                <i className="bi bi-exclamation-triangle-fill mx-1"></i>
                {error}
              </div>
            )}
            {success && (
              <div className="p-2 bg-green-200 text-green-700 rounded mb-4">
                <i className="bi bi-check-circle-fill mx-1"></i>
                {success}
              </div>
            )}
           
                    <h2 className='flex justify-center items-center p-1 text-xl font-semibold'>Sign Up</h2>
                    <h3 className='flex justify-center items-center p-3 font-normal'>Enter your pattern !</h3>
                    <div className='flex justify-center p-6 space-x-4 '>

                        <button className="w-12 h-12 bg-red-500 p-10 rounded-lg shadow-lg" value="red" onClick={handlePattern} >
                        </button>
                        <button className="w-12 h-12 bg-green-500 p-10 rounded-lg shadow-lg" value="green" onClick={handlePattern}>
                        </button>
                        <button className="w-12 h-12 bg-blue-500 p-10 rounded-lg shadow-lg" value="blue" onClick={handlePattern}>
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <p className='text-red-600 '>Two clicks only!</p>
                    </div>
                    <div className='flex justify-center items-center p-2'>
                        <button onClick={handleSubmit}
                            className="bg-blue-600 text-white  mb-2 rounded w-full hover:bg-blue-700 opacity-90 cursor-pointer px-6 py-4">Next</button>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default RGB;