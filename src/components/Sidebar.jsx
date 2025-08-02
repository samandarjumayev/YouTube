import { NavLink } from "react-router-dom";
import logo from '../images/youtube.png';
import barcelona from '../images/subscribers/barcelona.png';
import fifa from '../images/subscribers/fifa.png';
import group from '../images/subscribers/group.png';
import ted from '../images/subscribers/ted.png';
import { useContext } from "react";
import { UserContext } from "../App";

function Sidebar(){
    const mode = useContext(UserContext);

    return <div className={`${mode ? `bg-[#17153B] text-white` : `bg-white`} flex flex-col h-[100%] gap-3 transition-all duration-500`}>
        <NavLink to={'/'} className="h-[40px] w-[100%] flex items-center gap-5 px-5">
            <i className={`${mode ? `text-[#29C7AC]` : `text-gray-500`} fa-solid fa-bars cursor-pointer text-xl`}></i>
            <span className="flex items-center gap-1 cursor-pointer">
                <img src={logo} alt="" className="w-[25px]" />
                <p className={`${mode ? `text-[#FF4301]` : `text-black`} transition-all duration-500 font-[cursive] font-semibold`}>SamTube</p>
            </span>
        </NavLink>
        
        <div className="flex-1 flex flex-col">

            <div className="flex flex-col border-b border-zinc-400 pb-4 pt-0">
                <NavLink to={'/'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                </NavLink>
                <NavLink to={'/explore'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-compass"></i>
                    <p>Explore</p>
                </NavLink>
                <NavLink to={'/shorts'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-video"></i>
                    <p>Shorts</p>
                </NavLink>
                <NavLink to={'/subscribers'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-users"></i>
                    <p>Subscribers</p>
                </NavLink>
            </div>

            <div className="flex flex-col border-b border-zinc-400 py-4 ">
                <NavLink to={'/library'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-house"></i>
                    <p>Library</p>
                </NavLink>
                <NavLink to={'/history'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-compass"></i>
                    <p>History</p>
                </NavLink>
                <NavLink to={'/yourvideos'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-video"></i>
                    <p>Your videos</p>
                </NavLink>
                <NavLink to={'/watchlater'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-users"></i>
                    <p>Watch later</p>
                </NavLink>
                <NavLink to={'/pop'} className={`${mode ? `hover:bg-[#231e7aff]` : `hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97`}>
                    <i className="fa-solid fa-users"></i>
                    <p>Pop</p>
                </NavLink>
                <p className={`${mode ? `text-[#29C7AC] hover:text-[#32f5d5ff]` : `text-zinc-600 hover:text-black`} ml-5 cursor-pointer font-medium text-[14px] w-[100px]`}>Show more</p>
            </div>

            <div className="flex-1">
                <h1 className={`${mode ? `text-[#29C7AC]` : `text-zinc-600`} mx-5 my-1 mt-3 uppercase text-[14px] font-semibold tracking-[-0.5px] cursor-context-menu`}>Subscriptions</h1>
                <NavLink className={`${mode ? `hover:bg-[#231e7aff]` : ` hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97 text-[13px]`}>
                    <img src={barcelona} className="w-[20px] object-cover object-center" />
                    <p>FC Barcelona</p>
                </NavLink>
                <NavLink className={`${mode ? `hover:bg-[#231e7aff]` : ` hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97 text-[13px]`}>
                    <img src={ted} className="w-[20px] object-cover object-center" />
                    <p>TED</p>
                </NavLink>
                <NavLink className={`${mode ? `hover:bg-[#231e7aff]` : ` hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97 text-[13px]`}>
                    <img src={group} className="w-[20px] object-cover object-center" />
                    <p>NNGroup</p>
                </NavLink>
                <NavLink className={`${mode ? `hover:bg-[#231e7aff]` : ` hover:bg-gray-200`} px-4 mx-1 py-1 mb-[2px] rounded flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97 text-[13px]`}>
                    <img src={fifa} className="w-[20px] object-cover object-center" />
                    <p>FIFA</p>
                </NavLink>
            </div>
        </div>
    </div>
}

export default Sidebar;