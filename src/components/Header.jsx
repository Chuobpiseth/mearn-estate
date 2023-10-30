import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='p-4 bg-sky-600 shadow-md'>
        <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to='/'>
        <h1 className='font-extrabold text-xl font-sans flex flex-wrap sm:text-2xl'>
            <span className='text-yellow-100'>T&S</span>
            <span className='text-white pl-1'>Store</span>
        </h1>
        </Link>
        <form className="hidden bg-slate-100 rounded-2xl sm:flex px-3 py-2 items-center">
            <input type="text" placeholder='Search' className='p-1 bg-transparent outline-none sm:w-64'/>
            <FaSearch />
        </form>
        <ul className='flex gap-4 text-white cursor-pointer text-lg'> 
            <Link to='/'><li className='hover:text-yellow-200 hover:drop-shadow-lg'>Home</li></Link>
            <Link to='/about'><li className='hover:text-yellow-200 hover:drop-shadow-lg'>About</li></Link>
            <Link to='sign-in'><li className='hover:text-yellow-200 hover:drop-shadow-lg' >Sign In</li></Link>
        </ul>
        </div>
    </header>
  )
}

export default Header
