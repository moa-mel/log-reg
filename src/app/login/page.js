'use client'

import React, { useState } from 'react'
import Link from "next/link";
import Image from 'next/image'
import axios from "axios";
import { useRouter } from "next/navigation";
import section from "../../../public/assests/Section.png"

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",

  })

  const onLogin = async () => {
    try {
      const response = await axios.post("https://devapi.omacart.com/login", user);
      console.log("Login success", response.data);
      router.push("/courses");
    } catch (error) {
      console.log("Login failed", error.message);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center   text-center'>
      <div className="flex w-full h-full">
        <div className='w-1/2 items-center lg:items-center justify-center lg:justify-center '>
          <h1 className='font-bold mt-10 mx-9 lg:mx-10'>Welcome Back</h1>
          <p className='text-gray-400 text-sm"'>Welcome back! please enter your details</p>
          <div className='flex flex-col mt-16 mx-6 lg:mx-11'>
            <label className=" text-left text-gray-400 text-sm"
            >Email*</label>
            <input className='border p-2 w-50 rounded-xl'
              id='email'
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              type="email" required />
          </div>
          <div className='flex flex-col mt-8 '>
            <label className="mx-11 text-left text-gray-400 text-sm">Password*</label>
            <input className='border p-2 w-50 mx-11 rounded-xl'
              id='password'
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              type="password" required />
          </div>
          <div className='flex justify-between  mx-11 gap-x-8 mt-4'>
            <label className='flex items-center text-l text-sm'>
              <input type='checkbox' name='remember' className='mr-1' />
              Remember for 30 days
            </label>
            <a href='#' className='text-l text-sm'>Forgot Password</a>
          </div>
          <button className="rounded-xl w-80 mx-13 mt-12 h-10 bg-cyan-900 text-white hover:bg-cyan-900 text-center"
            onClick={onLogin}
          >Log in</button>
          <p className="mx-16 py-9 text-sm">Don't have an account? <Link href="/" className="text-cyan-900">Sign up</Link></p>
        </div>
        <div className='w-1/2 hidden lg:block'>
          <Image
            className="object-cover w-full h-screen"
            src={section}
            alt="Picture"
          />
        </div>
      </div>
    </div>
  )
}

export default Login