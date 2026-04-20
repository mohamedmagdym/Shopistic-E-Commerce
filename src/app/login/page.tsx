"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { loginSchema } from "../_schema/LoginSchema";
import { signIn } from "next-auth/react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";

type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    let resData = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (resData?.ok) {
      toast.success("logined", { position: "top-center" });
      window.location.href = "/";
    } else {
      toast.error(resData?.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">

      {/* Wrapper */}
      <div className="w-full max-w-5xl grid md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Left Side (Branding) */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#0F172A] text-white p-10">
          <h1 className="text-4xl font-extrabold mb-4">
            Shop<span className="text-[#F59E0B]">Sphere</span>
          </h1>
          <p className="text-gray-300 text-center">
            Discover amazing products and enjoy a seamless shopping experience.
          </p>
        </div>

        {/* Right Side (Form) */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-8 md:p-10 space-y-5 w-full"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              Welcome Back 👋
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Login to continue shopping
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

          {/* BUTTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2563EB] text-white py-2.5 rounded-xl font-medium hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Logging in..." : "Login Now"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-sm">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Fake Social */}
          <div className="flex gap-3">
            <button
              type="button"
              className="w-full border rounded-xl py-2 text-sm hover:bg-gray-100 transition"
            >
              Google
            </button>
            <button
              type="button"
              className="w-full border rounded-xl py-2 text-sm hover:bg-gray-100 transition"
            >
              Facebook
            </button>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-500">
            Don’t have an account?
            <Link href="/register" className="text-[#2563EB] cursor-pointer hover:underline">
              {"  " }Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}