import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
function Login() {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();
  function handleFormSubmit(User) {
    console.log(User)
   
  }
  return (
    <div className="m-6">
      <p className="text-4xl text-green-500 p-4 m-auto">WELCOME BACK!!!! </p>
      <p className="p-6">
        If you do not have account{" "}
        <a href={"/signup"} className=" text-green-500 underline">
          Click here
        </a>{" "}
        to Sign-Up{" "}
      </p>
      <div className="w-96 rounded-md m-auto border-black border-2">
        <h1 className=" mx-6 my-3 font-semibold text-2xl">SIGN IN</h1>
        <form className="px-10 m-2" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="py-3">
            {" "}
            <h1 className="text-xl font-semibold">Username</h1>
            <input
              className=" w-full p-2 rounded-md border-2 border-gray-500"
              type="text"
              {...register("Username", { required: true })}
            ></input>
          </div>
          {errors.Username?.type === "required" && (
            <h3 className=" text-red-700">*required</h3>
          )}
          <div className="py-3">
            <h1 className="text-xl font-semibold">Password</h1>
            <input
              id="Pass"
              className=" w-full p-2 rounded-md border-2 border-gray-500"
              type="password"
              {...register("Pass", { required: true, minLength: 8 })}
            ></input>
            {errors.Pass?.type === "required" && (
              <h3 className=" text-red-700">*required</h3>
            )}
            {errors.Pass?.type === "minLength" && (
              <h3 className=" text-red-700">
                Password must be atleat 8 cahracters
              </h3>
            )}
          </div>
          <div className="text-center p-4">
           <button
              type="submit"
              className=" bg-green-500 text-lg rounded-xl p-3 text-white hover:bg-blue-700 "
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-lg py-3">
          Don't have an account ?
          <NavLink
            to="/signup"
            className="underline px-3 text-green-500 font-semibold text-lg"
          >
            Sign up
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Login;