import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import realsound from "../assets/realsound.mp3";

function soundeffect() {
  new Audio(realsound).play();
}

const Loginpage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // SUCCESS SUBMIT
  const onSubmit = (data) => {
    toast.success(`Welcome back ${data.email} 🎉`, {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      closeOnClick: true,
    });
  };

  // ERROR SUBMIT
  const onError = () => {
    toast.error("Please fill all required fields ❌", {
      position: "top-right",
      autoClose: 3000,
      pauseOnHover: true,
      closeOnClick: true,
    });
  };

  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      {/* Toast Container */}
      <ToastContainer />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.pexels.com/download/video/854416/"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white py-12 px-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-4">
          Book-Hub 📚
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Welcome back!
          <br />
          Please login to continue.
        </p>

        {/* Login Form */}
        <form
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-black text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl border border-black text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-black">Remember me</span>
            </label>
            <Link to="#" className="text-black hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-xl font-semibold transition-all"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-gray-600 mt-8">
          Don’t have an account?{" "}
          <Link
            to="/Signup"
            className="text-amber-600 font-semibold hover:underline"
            onClick={soundeffect}
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
