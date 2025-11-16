import React from "react";
import { useNavigate } from "react-router";

export default function SignUpPage() {

    const navigate =  useNavigate();

    return (
        <div className="min-h-[87vh] bg-[#0c0c0c] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-[#111213] border border-[#1f1f1f] rounded-3xl p-10 shadow-xl">
                <h1 className="text-4xl font-bold text-center mb-8 text-[#9AA1AC]">
                Create Account
                </h1>

                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-300 mb-1 text-sm">Username</label>
                        <input
                        type="text"
                        className="w-full bg-[#0c0d0f] border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600/50"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1 text-sm">Email</label>
                        <input
                        type="email"
                        className="w-full bg-[#0c0d0f] border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600/50"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300 mb-1 text-sm">Password</label>
                        <input
                        type="password"
                        className="w-full bg-[#0c0d0f] border border-[#1f1f1f] rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-600/50"
                        />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-[#DFB159] hover:bg-black hover:text-[#DFB159] border-2 border-[#DFB159] hover:border-[#DFB159] transition rounded-xl py-3 font-semibold text-white"
                    >
                    Sign Up
                    </button>
                </form>


                <p className="text-center text-gray-400 mt-6 text-sm">
                Already have an account? <span onClick={()=>navigate('/login')} className="text-[#d7a840] hover:underline cursor-pointer">Login</span>
                </p>
            </div>
        </div>
    );
}