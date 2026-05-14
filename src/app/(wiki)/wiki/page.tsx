"use client";

import { useState } from "react";

export default function WikiLogin() {
  // REACT HOOKS
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  
    // TODO: UPDATE THIS WITH AUTH LOGIC WHEN ADDING NEXTAUTH
    return null;
  }

  return (
    <div className="justify-center flex py-12">
      <div className="w-150 flex flex-col gap-y-10 p-5 bg-[#00843D] text-white rounded-2xl">
        <h2 className="font-bold text-4xl text-center py-1 whitespace-pre-line">Aggie Robotics<br/>Wiki Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-y-10">
          {/* Email Input Group */}
          <div>
            <label htmlFor="email" className="block text-sm md:text-base font-semibold mb-2">Email Address</label>
            <input id="email" type="text" value={email} onChange={(e) => { setEmail(e.target.value); }}
                   placeholder="you@example.com" className={`w-full px-4 py-3 md:py-4 text-base md:text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all`}></input>
          </div>

          {/* Password Input Group */}
          <div>
            <label htmlFor="password" className="block text-sm md:text-base font-semibold mb-2">Password</label>
            <div className="relative">
              <input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => {setPassword(e.target.value)}}
                     placeholder="Enter your password" className={`w-full px-4 py-3 md:py-4 text-base md:text-lg border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all pr-14`}/>
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm md:text-base font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 px-2 rounded">{showPassword ? "Hide" : "Show"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}