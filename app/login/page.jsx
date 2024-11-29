'use client'
import Link from "next/link";
import { useActionState } from "react";
import { login } from "../../actions/userController";


const page = () => {
  const [formState, formAction] = useActionState(login, {});

  return (
    <>
      <form action={formAction} className="space-y-3 max-w-[450px] mx-auto flex-1 rounded-lg border border-gray-300 shadow-2xl p-8  mt-0 md:mt-10">
        <h2 className="flex justify-center font-bold uppercase text-3xl text-gray-800">
          LogIn
        </h2>
        <h1 className="text-2xl">Please LogIn to Continue.</h1>
        <span className="text-red-600 font-bold">{formState.message}</span>
        <div className="my-5">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required=""
          />
        <span className="text-red-600 font-bold">{formState.email}</span>
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="•••••••••"
            required=""
          />
        <span className="text-red-600 font-bold">{formState.password}</span>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 uppercase hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-medium w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <div className="text-lg">
          
          Don't have account!
          <Link
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-4 uppercase"
            href="/signUp"
          >
            
            Create
          </Link>
        </div>
      </form>
    </>
  );
};
export default page;
