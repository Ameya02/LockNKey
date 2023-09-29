import React from "react";

export default function Signup() {
    return (
        <div className="flex justify-center item-center flex-1 h-screen">
            <h3 className="text-slate-950 font-medium text-xl md:text-slate-200 absolute top-8 left-8 ">
                Lock&amp;Key
            </h3>
            <div className="hidden flex-1 bg-blue-950 md:flex flex-col justify-center items-center">
                <img src="/signup.png" alt="" />
            </div>
            <div className=" flex flex-1 bg-blue-50 bg-center justify-center items-center">
                <form className="md:w-1/2 p-8 md:p-0 space-y-5 flex flex-col justify-center">
                    <h1 className="text-xl font-semibold">Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <div>
                        <label htmlFor="email" className="inline-block border-0 mb-2 ">
                            <p className="font-medium text-lg">Email</p>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Email"
                            name="email"
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
                            required
                            className="bg-inherit border-2 inline-block px-8 py-6 border-slate-300 focus:outline-none focus:border-b-4 focus:border-b-green-400 h-7   w-full"
                        />
                    </div>

                    <div>
                        <label htmlFor="psw-repeat" className="w-9/12 inline-block mb-2">
                            <p className="font-medium text-lg">Repeat Password</p>
                        </label>
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            name="psw-repeat"
                            required
                            className="bg-inherit border-2 inline-block px-8 py-6 border-slate-300 focus:outline-none focus:border-b-4 focus:border-b-green-400 h-7   w-full"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <input
                            type="checkbox"
                            defaultChecked="checked"
                            name="remember"
                            className="inline-block"
                        />
                        <p>Remember me?</p>
                    </div>

                    {/* <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms &amp; Privacy
            </a>
            .
          </p> */}
                    <div className="clearfix">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white  mb-2 rounded w-full hover:bg-blue-700 opacity-90 cursor-pointer px-6 py-4"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}