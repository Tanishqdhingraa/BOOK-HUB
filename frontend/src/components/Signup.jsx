import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    alert(`Account created for ${data.email}`);
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.pexels.com/download/video/4860897/"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Signup Card */}
      <div className="relative z-10 bg-white py-12 px-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          Book-Hub 📚
        </h1>
        <p className="text-amber-800 text-center mb-8 mt-4">
          Create a new account
          <br /> Join Book-Hub today!
        </p>

        {/* Signup Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-xl border border-black text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("name", { required: "Full name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-black text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl border border-black text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          <input
            type="password"
            placeholder="Confirm your password"
            className="w-full px-4 py-3 rounded-xl border border-black text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("confirmPassword", {
              required: "Confirm password is required",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-amber-800 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Login Option */}
        <p className="text-black text-center text-amber-800 mt-8">
          Already have an account?{" "}
          <Link
            to="/Login1"
            className="text-amber-800 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
