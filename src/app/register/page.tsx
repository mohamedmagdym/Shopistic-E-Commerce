"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "../_apiReqest/SignUp";
import { z } from "zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signupSchema } from "../_schema/RegisterSchema";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

type SignupData = z.infer<typeof signupSchema>;

export default function Signup() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupData) => {
    try {
      const res = await signup(data);
      toast.success(res.message || "Account created successfully!");
      router.push("/login");
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">

      {/* Wrapper */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#0F172A] text-white p-10">
          <h1 className="text-4xl font-extrabold mb-4">
            Shop<span className="text-[#F59E0B]">Sphere</span>
          </h1>
          <p className="text-gray-300 text-center">
            Join us and start your shopping journey today.
          </p>
        </div>

        {/* Right Side (Form) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 md:p-10 space-y-4 w-full"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              Create Account 🚀
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Sign up to get started
            </p>
          </div>

          {/* NAME */}
          <div>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-blue-100 transition">
              <FaUser className="text-gray-400 mr-2" />
              <input
                placeholder="Full Name"
                {...register("name")}
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
            <p className="text-red-500 text-sm mt-1">
              {errors.name?.message}
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-blue-100 transition">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                placeholder="Email"
                {...register("email")}
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
            <p className="text-red-500 text-sm mt-1">
              {errors.email?.message}
            </p>
          </div>

          {/* PASSWORD */}
          <div>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-blue-100 transition">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
            <p className="text-red-500 text-sm mt-1">
              {errors.password?.message}
            </p>
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-blue-100 transition">
              <FaLock className="text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("rePassword")}
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
            <p className="text-red-500 text-sm mt-1">
              {errors.rePassword?.message}
            </p>
          </div>

          {/* PHONE */}
          <div>
            <div className="flex items-center border rounded-xl px-3 py-2 focus-within:border-[#2563EB] focus-within:ring-2 focus-within:ring-blue-100 transition">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                placeholder="Phone"
                {...register("phone")}
                className="w-full outline-none bg-transparent text-sm"
              />
            </div>
            <p className="text-red-500 text-sm mt-1">
              {errors.phone?.message}
            </p>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2563EB] text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-[#2563EB] cursor-pointer hover:underline"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}