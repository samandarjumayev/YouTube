import { useContext, useRef } from 'react';
import profile from '../images/profile.png';
import { UserContext } from '../App';

function Searchbar(){
    const info = useContext(UserContext);
    const searchInput = useRef();
    return <div className={`${info.mode ? `bg-[#17153B] text-[#29C7AC] border-[#29C7AC]` : `bg-white  border-zinc-300`} transition-all duration-500 w-[100%] h-[60px] border-b-1 py-1 pr-5 flex justify-between gap-3`}>
        <div className='h-full flex-1 flex justify-center items-center gap-3'>
            <label className={`${info.mode ? `border-[#29C7AC]` : `border-gray-500`} border-1 w-[70%] h-[70%] flex items-center justify-between`}>
                <input ref={searchInput} type="text" placeholder='Search' className={`${info.mode ? `placeholder:text-[#29C7AC]` : `text-gray-600`} px-3 flex-1 min-w-[22px] outline-none`} />
                <p className={`${info.mode ? `border-[#29C7AC] text-[#29C7AC]  hover:text-[#32f5d5ff]` : `border-gray-500  text-gray-500  hover:text-black`} border-l-1 h-full cursor-pointer w-[37px] flex items-center justify-center`}>
                    <i className="fa-solid fa-search"></i>
                </p>
            </label>
            <i className="fa-solid fa-microphone text-[18px] cursor-pointer transition-all duration-250 active:duration-100 active:scale-90"></i>
        </div>

        <div className={`${info.mode ? `text-[#29C7AC]` : `text-gray-700`} h-full flex items-center gap-4`}>
            <i onClick={() => {
                info.setMode(!info.mode);
            }} className={`fa-solid ${info.mode ? `fa-sun text-[coral]` : `fa-moon text-blue-800`} text-[19px] cursor-pointer transition-all duration-250 active:rotate-45`}></i>
            <i className="fa-regular fa-square-plus text-[18px] cursor-pointer hover:text-black transition-all duration-250 active:duration-100 active:scale-90"></i>
            <i className="fa-solid fa-bell text-[18px] cursor-pointer hover:text-black transition-all duration-250 active:duration-100 active:scale-90"></i>
            <img src={profile} className='w-[33px] rounded-full cursor-pointer shadow shadow-zinc-500 transition-all duration-250 active:duration-100 active:scale-95' />
        </div>
    </div>
}

export default Searchbar;