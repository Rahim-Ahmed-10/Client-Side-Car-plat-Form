"use client";
import React from 'react';
import { Input, Button, Form } from "@heroui/react"; // HeroUI ব্যবহার করলে
import { FcGoogle } from "react-icons/fc";
import { signIn } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { ArrowRight } from '@gravity-ui/icons';
import toast from 'react-hot-toast';



const LoginPage = () => {
   
     const router = useRouter();
  const handleLogin = async (e) => {
      e.preventDefault();
  
      const formData = new FormData(e.currentTarget);
  
      const { name, email, password } = Object.fromEntries(
        formData.entries()
      );
  
      const { data, error } = await signIn.email({
        name,
        email,
        password,
        callbackURL: "/",
      });
  
      if (error) {
        console.log(error);
        toast.error(error.message || "login up failed");
        return;
      }
  
      router.push("/");
  
      toast.success("Account created successfully!");
    };
  
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

        {/* FORM INPUT */}
           <Form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div>
            <label className="text-sm font-bold mb-2 block text-gray-700">
              Email Address
            </label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              variant="bordered"
              radius="lg"
              className="w-full"
              required
            />
          </div>
          

          {/* Password */}
          <div>
            <label className="text-sm font-bold mb-2 block text-gray-700">
              Password
            </label>
            <Input
              type="password"
              name="password"
              placeholder="••••••••"
              variant="bordered"
              radius="lg"
              className="w-full"
              required
            />
            <div className="text-right mt-1">
              <a href="#" className="text-xs text-blue-600 hover:underline">Forgot password?</a>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            color="primary"
            className="w-full font-bold py-7 text-lg bg-[#0070f3] flex items-center justify-center gap-2"
            radius="lg"
          >
            Login <ArrowRight size={20} />
          </Button>
         
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;