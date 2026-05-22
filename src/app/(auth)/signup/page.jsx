"use client";

import React from "react";
import { Input, Button, Link, Form } from "@heroui/react";
import { ArrowRight } from "lucide-react";
import toast from "react-hot-toast";
import { signUp } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpPage = () => {

     const router = useRouter();
     
  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const { name, email, password } = Object.fromEntries(
      formData.entries()
    );

    const { data, error } = await signUp.email({
      name,
      email,
      password,
      
    });

    if (error) {
      console.log(error);
      toast.error(error.message || "Sign up failed");
      return;
    }

    router.push("/")

    toast.success("Account created successfully!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-[450px] rounded-3xl bg-white p-10 shadow-sm border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Sign <span className="text-blue-600">Up</span>
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Continue your learning journey today
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={handleSignUp} className="space-y-6">

          {/* Full Name */}
          <div>
            <label className="text-sm font-bold mb-2 block text-gray-700">
              Full Name
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              variant="bordered"
              radius="lg"
              className="w-full"
              required
            />
          </div>

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

          {/* Profile Image (optional, not sent to auth) */}
          <div>
            <label className="text-sm font-bold mb-2 block text-gray-700">
              Profile Image URL
            </label>
            <Input
              type="url"
              name="image"
              placeholder="https://images.unsplash.com/..."
              variant="bordered"
              radius="lg"
              className="w-full"
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
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            color="primary"
            className="w-full font-bold py-7 text-lg bg-[#0070f3] flex items-center justify-center gap-2"
            radius="lg"
          >
            Create Account <ArrowRight size={20} />
          </Button>

          {/* Login link */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-blue-600 font-bold underline"
            >
              Sign in
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;