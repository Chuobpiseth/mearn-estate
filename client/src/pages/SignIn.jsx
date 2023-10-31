import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
function SignIn() {
  const navigate=useNavigate();
  const [formData,setFormData] = useState({});
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(false);
  const handleChage = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    setLoading(true);
    const res = await fetch('api/auth/signin',{
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if(data.success === false) {
      setLoading(false);
      setError(data.message);
      return;
    }
    setLoading(false);
    setError(null)
    navigate('/')
    }catch(error){
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center text-cyan-700 drop-shadow-lg font-bold my-7 signuptitle'>ចូលប្រព័ន្ធ</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 '>
        <input type="email" placeholder='email' id='email' onChange={handleChage} className='border p-3 rounded-xl' />
        <input type="password" placeholder='password' id='password' onChange={handleChage} className='border p-3 rounded-xl' />
        <button disabled={loading} className='bg-blue-500 p-3 rounded-lg drop-shadow-lg text-lg font-bold uppercase text-white hover:opacity-95 active:bg-blue-700 disabled:opacity-80' >{loading ? 'Loading...':'Sign In'}</button>
      </form>
    <div className=" flex gap-2 mt-2">
      <p>Dont have an account?</p>
      <Link to={"/signup"} className='text-blue-700 font-bold'>Sign Up</Link>
    </div>
    {error &&<p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}

export default SignIn
