import { FaBell, FaUser } from 'react-icons/fa'
import './App.css'
import { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import Dash from './Dash'
import { RiSettings5Fill } from 'react-icons/ri'
import Detail from './Detail'
import Charts from './Charts'

function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div className='px-5'>
      <div id='nav' className='py-5 flex justify-between items-center z-50'>
        <div className='flex items-center gap-x-5'>
          <button className='w-72'><img src="https://i.imgur.com/zMCdpkm.png" alt="" /></button>
          <div className='flex items-center gap-x-2 cursor-pointer'>
            <IoSearch className='text-xl text-[#646464]' />
            <div className='px-2 rounded-lg pb-1 bg-[#2727271A]'>
              <img className='w-3.5 inline' src="https://i.imgur.com/JRRH9FR.png" alt="" />
              <span className='relative top-[0.056rem] pl-0.5 text-[#646464]'>K</span>
            </div>
          </div>
        </div>
        <div className='flex gap-x-4 items-center'>
          <div className='h-[1.7rem] flex hov rounded-full p-0.5 transition-colors px-1.5'>
            <div className="dropdown dropdown-end z-[100]">
              <div tabIndex={0} role="button" className="avatar">
                <div className="w-[1.4rem] pt-[0rem] flex justify-center items-center">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={`${flag ? 'https://i.imgur.com/EhpVWQJ.png' : 'https://i.imgur.com/mJnMXbV.png'}`} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-16 p-2 shadow">
                <li className='ml-auto'>
                  <img onClick={() => setFlag(!flag)} className='w-12' src={`${flag ? 'https://i.imgur.com/mJnMXbV.png' : 'https://i.imgur.com/EhpVWQJ.png'}`} alt="" />
                </li>
              </ul>
            </div>
          </div>
          <FaBell className='text-2xl rounded-full hov p-1' />
          <FaUser className='text-2xl rounded-full hov p-1' />
          <RiSettings5Fill className='text-3xl rounded-full hov p-1' />
          <div className="dropdown dropdown-end z-[100] pb-0 p-1 rounded-full hov transition-colors">
            <div tabIndex={0} role="button" className="avatar">
              <div className="w-[1.4rem] rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content space-y-4 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li className='font-semibold text-center'>Username</li>
              <li><a>Details</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-5'>
        <Dash />
        <div className='col-span-4 space-y-5'>
          <Detail />
          <Charts />
        </div>
      </div>
    </div>
  )
}

export default App
