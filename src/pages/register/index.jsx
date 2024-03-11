import React from "react";
import "./reg.css"

const Register = () => {
    return(
        <div>
           <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-full max-w-md bg-[#222] rounded-xl shadow-md py-8 px-8">
            <h2 className="text-[28px] font-bold text-white  mb-6 ">Sign Up</h2>
            <form className="flex flex-col">
                <div className="flex space-x-4 mb-4">
                    <input placeholder="First Name" className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300" type="text" />
                    <input placeholder="Last Name" className="bg-gray-700 text-white border-0 rounded-md p-2 w-1/2 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300" type="text" />
                </div>
                <input placeholder="Email" className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300" type="email" />
                <input placeholder=" Confirm Email" className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300" type="email" />
                <input placeholder="Password" className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300" type="password" />
                <input placeholder="Confirm Password" className="bg-gray-700 text-white border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none transition ease-in-out duration-150 placeholder-gray-300" type="password" />
                <button className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-600 hover:to-blue-600 duration ease-in duration-200">Submit</button>
                <p className="text-white mt-4 text-center">Already have an account?
                 <a className="text-white-500 hover:underline mt-4 px-1" href="#">Log In</a>
                </p>
            </form>
            </div>
           
           </div>
        </div>
    )
}

export default Register;