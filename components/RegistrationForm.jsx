"use client";

import Link from "next/link";
import { useActionState } from "react";
import { register } from "../actions/userController";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";

const RegistrationForm = () => {
  const [formState, formAction] = useActionState(register, {});
  const [role, setRole] = useState("customer");
  
  const options = [
    { label: "Customer", name:'customer', id: 1, value:'customer'},
    { label: "Seller", name:'seller', id: 2,  value:'seller'}
  ];

  const handleSubmit = async (e) => {
   const formData = new FormData(e.target);
    formData.append("role", role); 
    const result = await register(null, formData);
    console.log(result);
  };
  
  return (
    <form
    action={formAction} onSubmit={handleSubmit}
    className="border border-gray-300 shadow-2xl p-3 px-8 rounded-xl">
<Link href="/" className="flex font-mono"><ArrowLeft/> Go-Home</Link>
      <h3 className="flex justify-center font-bold uppercase text-3xl text-gray-800 mb-1">Register here</h3>
      <div className="grid gap-2 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-1 text-base font-medium text-gray-900 dark:text-white">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required=""/>
            {formState.errors?.first_name && (
              <span className="text-red-600">{formState.errors?.first_name}</span>
            )}
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block mb-1 text-base font-medium text-gray-900 dark:text-white"
          >
            Last name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Doe"
            required=""
          />
           {formState.errors?.last_name && (
              <span className="text-red-600">{formState.errors?.last_name}</span>
            )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-base font-medium text-gray-900 dark:text-white"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            // autoComplete="off"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
            required=""
          />
           {formState.errors?.email && (
              <span className="text-red-600">{formState.errors?.email}</span>
            )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block mb-1 text-base font-medium text-gray-900 dark:text-white"
          >
            Phone number (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{4}-[0-9]{7}"
            autoComplete="off"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0123-4567890"
          />
        </div>

        <div className="mb-1">
          <label
            htmlFor="password"
            className="block mb-1 text-base font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="••••••"
            required=""
          />
          {formState.errors?.password && (
              <span className="text-red-600">{formState.errors?.password}</span>
            )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-1 text-base font-medium text-gray-900 dark:text-white"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="••••••"
            required=""
          />
          {formState.errors?.confirm_password && (
            <span className="text-red-600">{formState.errors?.confirm_password}</span>
            )}
        </div>
      </div>
      <div className="w-full mb-2">
        <h1 className="block mb-1 text-base font-medium text-gray-900 dark:text-white">Register As (customer | seller) </h1>
        <select  onChange={(e) => setRole(e.target.value)}
          value={role} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {/* <span className="text-red-600">{formState.errors?.role}</span> */}

      </div>
     
     <button
        type="submit"
        className="text-white bg-blue-700 uppercase hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      <div className="text-xl my-2">
        Already have an account.
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-4 uppercase"
          href="/login "
        >
          Login
        </Link>
      </div>
    </form>
  );
};
export default RegistrationForm;
