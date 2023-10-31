import React from 'react'
import {Link} from 'react-router-dom'
function Signup() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center text-cyan-700 drop-shadow-lg font-bold my-7 signuptitle'>បង្កើតគណនី</h1>
      <form className='flex flex-col gap-4 '>
        <input type="text" placeholder='username' id='username' className='border p-3 rounded-xl' />
        <input type="email" placeholder='email' id='email' className='border p-3 rounded-xl' />
        <input type="password" placeholder='password' id='password' className='border p-3 rounded-xl' />
        <button className='bg-slate-500 p-3 rounded-lg drop-shadow-lg text-lg font-bold uppercase text-white hover:opacity-95 active:bg-slate-700 disabled:opacity-80' >Sign Up / ចុះឈ្មោះ</button>
      </form>
    <div className=" flex gap-2 mt-2">
      <p>Have an account?</p>
      <Link to={"/sign-in"} className='text-blue-700 font-bold'>Sign In</Link>
    </div>
    </div>
  )
}

export default Signup
