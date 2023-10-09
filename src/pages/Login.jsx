import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
export default function Login() {
    const navigate = useNavigate();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			const res = await axios.post(
				"api/user/signup",
				{
					email: emailRef.current.value,
					password: passwordRef.current.value,
				},
				{
					withCredentials: true,
				}
			);
			setSuccess(res.data.msg);
			setLoading(false);
			setTimeout(() => {
				navigate("/colorauth");
			}, 100);
		} catch (err) {
			e.target.reset();
			console.error(err);
			setError(err.response ? err.response.data.msg : err.msg);
			setLoading(false);
		}
	};
    return (

        <div className="flex justify-center item-center flex-1 h-screen">
           
            <div className="hidden flex-1 bg-blue-950 md:flex flex-col justify-center items-center">
                <img src="/signup.png" alt="" />
            </div>
            <div className=" flex flex-1 bg-blue-50 bg-center justify-center items-center">
            {error && (
              <div className="p-2 bg-red-200 text-red-700 rounded mb-4">
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
                <form className="md:w-1/2 p-8 md:p-0 space-y-5 flex flex-col justify-center">
                    <h1 className="text-xl font-semibold">Login</h1>
                    <p>To keep connecting with us please login with the correct details.</p>
                    <hr />
                    <div>
                        <label htmlFor="email" className="inline-block border-0 mb-2 ">
                            <p className="font-medium text-lg">Email</p>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
                            onChange={(e) => {emailRef.current.value = e.target.value}}
                            required
                            className="bg-inherit border-2 inline-block px-8 py-6 border-slate-300 focus:outline-none focus:border-b-4 focus:border-b-green-400 h-7   w-full"
                        />
                    </div>
                    <div>
                        <label htmlFor="psw" className="w-full inline-block mb-2">
                            <p className="font-medium text-lg">Password</p>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            name="psw"
                            onChange={(e) => {passwordRef.current.value = e.target.value}}
                            required
                            className="bg-inherit border-2 inline-block px-8 py-6 border-slate-300 focus:outline-none focus:border-b-4 focus:border-b-green-400 h-7   w-full"
                        />
                    </div>


                    <div className="flex justify-between w-full">
                        <div className="flex space-x-2">
                            <input
                                type="checkbox"
                                defaultChecked="checked"
                                name="remember"
                                className="inline-block"
                            />
                            <p>Remember me?</p>
                        </div>
                        <a href="" className="text-blue-700">
                            Forgot Password
                        </a>
                    </div>


                    <div className="clearfix">
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className="bg-blue-600 text-white  mb-2 rounded w-full hover:bg-blue-700 opacity-90 cursor-pointer px-6 py-4"
                        >
                            Login
                        </button>
                    </div>
                    <p>
                        Don't have an account?{" "}
                        <Link to={"/signup"} className="text-blue-700 text-secondary font-medium text-lg">
                            Signup
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
}