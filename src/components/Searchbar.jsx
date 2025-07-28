import { useRef } from 'react';
import profile from '../images/profile.png';

function Searchbar(){
    const searchInput = useRef()
    return <div className="w-[100%] h-[60px] border-b-1 border-zinc-300 py-1 pr-5 flex justify-between gap-3">
        <div className='h-full flex-1 flex justify-center items-center gap-3'>
            <label className='border-1 border-gray-500 w-[70%] h-[70%] flex items-center justify-between'>
                <input ref={searchInput} type="text" placeholder='Search' className='px-3 flex-1 min-w-[22px] outline-none' />
                <p className=' border-l-1 border-gray-500 h-full cursor-pointer hover:text-black w-[37px] flex items-center justify-center text-gray-500'>
                    <i className="fa-solid fa-search"></i>
                </p>
            </label>
            <i className="fa-solid fa-microphone text-[18px] cursor-pointer transition-all duration-250 active:duration-100 active:scale-90"></i>
        </div>

        <div className='h-full flex items-center gap-4'>
            <i className="fa-regular fa-square-plus text-[18px] cursor-pointer text-gray-700 hover:text-black transition-all duration-250 active:duration-100 active:scale-90"></i>
            <i className="fa-solid fa-bell text-[18px] cursor-pointer text-gray-700 hover:text-black transition-all duration-250 active:duration-100 active:scale-90"></i>
            <img src={profile} className='w-[33px] rounded-full cursor-pointer shadow shadow-zinc-500 transition-all duration-250 active:duration-100 active:scale-95' />
        </div>
    </div>
}

export default Searchbar;