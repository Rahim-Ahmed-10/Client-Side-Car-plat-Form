import React from "react";
import { Input, Button, Link } from "@heroui/react";
import { ArrowRight } from "lucide-react"; // আইকনের জন্য

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[450px] rounded-3xl bg-white p-10 shadow-sm border border-gray-100">
          <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Sign <span className="text-blue-600">Up</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Continue your learning journey today
          </p>
        </div>
        {/* ফরম ইনপুটস */}
        <div className="space-y-6">
          
          <div>
            <label className="text-sm font-bold mb-2 block text-gray-700">Full Name</label>
            <Input 
              type="text" 
              placeholder="Enter your name" 
              variant="bordered"
              radius="lg"
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-bold mb-2 block text-gray-700">Email Address</label>
            <Input 
              type="email" 
              placeholder="Enter your email" 
              variant="bordered"
              radius="lg"
              className="w-full"
            />
          </div>

          <div>
            <label className="text-sm font-bold mb-2 block text-gray-700">Profile Image URL</label>
            <Input 
              type="url" 
              placeholder="https://images.unsplash.com/..." 
              variant="bordered"
              radius="lg"
              className="w-full"
            />
          </div>
          
          <div>
            <label className="text-sm font-bold mb-2 block text-gray-700">Password</label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              variant="bordered"
              radius="lg"
              className="w-full"
            />
          </div>

          {/* সাবমিট বাটন */}
          <Button 
            color="primary" 
            className="w-full font-bold py-7 text-lg bg-[#0070f3] flex items-center justify-center gap-2"
            radius="lg"
          >
            Create Account <ArrowRight size={20} />
          </Button>

          {/* নিচে লগইন লিঙ্ক */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Already have an account?{' '} <Link href="/signup" className="text-blue-600 font-bold cursor-pointer underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;