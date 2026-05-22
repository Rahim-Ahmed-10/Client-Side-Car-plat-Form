import React from 'react';
import { Input, Button } from "@heroui/react"; // HeroUI ব্যবহার করলে
import { FcGoogle } from "react-icons/fc";



const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[400px] rounded-2xl bg-white p-8 shadow-lg">
        {/* হেডার অংশ */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Welcome <span className="text-blue-600">Back</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Continue your learning journey today
          </p>
        </div>

        {/* গুগল লগইন বাটন */}
        <Button 
          variant="bordered" 
          className="w-full font-medium rounded-2xl  py-6 border-slate-200 hover:bg-slate-50 transition-colors flex gap-3 item-center justify-center"
          startContent={<FcGoogle size={24} />}
        >
        <img src="https://www.google.com/favicon.ico" alt="Google" 
        className='w-5 h-5'
        />  Sign in with Google
        </Button>

        {/* ডিভাইডার */}
        <div className="flex items-center my-6">
          <div className="flex-1" />
          <span className="px-3 text-xs text-gray-400 uppercase">Or with email</span>
          <div className="flex-1" />
        </div>

        {/* ফরম ইনপুট */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold mb-1 block">Email Address</label>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              variant="bordered"
              className="w-full"
            />
          </div>
          
          <div>
            <label className="text-sm font-semibold mb-1 block">Password</label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              variant="bordered"
              className="w-full"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
            </div>
          </div>

          <Button color="primary" className="w-full font-bold py-6 text-lg bg-blue-600">
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;