'use client'

import React, {useState} from "react";
import Link from "next/link";
import Image from 'next/image'
import axios from "axios";
import inimage from "../../public/assests/Section (1).png"
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })
  
  const handleSubmit = async () =>{
    try{
      const response = await axios.post("https://devapi.omacart.com/signup", user)
      console.log("signup success", response.data)
      router.push("/courses")
    } catch(error){
      console.log("signup failed", error.message);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1  text-center">
      <div className="flex w-full h-full">
        <div className="w-3/5 h-full  hidden lg:block">
          <Image
            className="object-cover w-full h-screen"
            src={inimage}
            alt="Picture of the author"
          />
        </div>
        <div className="w-2/5">
          <h2 className="font-bold text-left py-9 mx-9 text-xl">Sign In</h2>
          <div className='flex flex-col '>
            <label className="mx-9 text-left text-gray-400 text-sm">FirstName*</label>
            <input className='border p-2 w-50 mx-9 rounded-xl' 
            id="firstname"
            value={user.firstname}
            onChange={(e) => setUser({...user, firstname: e.target.value})}
            type="text" required/>
          </div>
          <div className='flex flex-col '>
            <label className="mx-9 text-left text-gray-400 text-sm">LastName*</label>
            <input className='border p-2 w-50 mx-9 rounded-xl' 
            id="lastname"
            value={user.lastname}
            onChange={(e) => setUser({...user, lastname: e.target.value})}
            type="text" required/>
          </div>
          <div className='flex flex-col py-2'>
            <label className="mx-9 text-left text-gray-400 text-sm">Email*</label>
            <input className='border p-2 w-50 mx-9 rounded-xl' 
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            type="email" required/>
          </div>
          <div className='flex flex-col py-2'>
            <label className="mx-9 text-left text-gray-400 text-sm">Password*</label>
            <input className='border p-2 w-50 mx-9 rounded-xl' 
            id="passsword"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            type="password" required/>
          </div>
          <p className="mx-9 text-left text-gray-400 text-sm ">Must be at least 8 characters</p>
          
          <button className="border rounded w-80 h-10 mx-13 mt-6 py-2 bg-cyan-900 text-white hover:bg-cyan-900 text-center"
          onClick={handleSubmit}
          >
            Get started</button> 
          <p className="mx-16 py-9 text-sm">Already have an account ? <Link href="/login" className="text-cyan-900">Log in</Link></p>
        </div>
      </div>
    </main>
  );
}
