import { NavLink } from "react-router-dom";
import logo from '../images/youtube.png';
import barcelona from '../images/subscribers/barcelona.png';
import fifa from '../images/subscribers/fifa.png';
import group from '../images/subscribers/group.png';
import ted from '../images/subscribers/ted.png';

function Sidebar(){
    return <div className="flex flex-col h-[100%] gap-3">
        <NavLink to={'/'} className="h-[40px] w-[100%] flex items-center gap-5 px-5">
            <i className="fa-solid fa-bars cursor-pointer text-xl text-gray-500"></i>
            <span className="flex items-center gap-1 cursor-pointer">
                <img src={logo} alt="" className="w-[25px]" />
                <p className="font-[cursive] font-semibold">SamTube</p>
            </span>
        </NavLink>
        
        <div className="flex-1 flex flex-col">

            <div className="flex flex-col border-b border-zinc-400 pb-4 pt-0">
                <NavLink to={'/'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                </NavLink>
                <NavLink to={'/explore'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-compass"></i>
                    <p>Explore</p>
                </NavLink>
                <NavLink to={'/shorts'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-video"></i>
                    <p>Shorts</p>
                </NavLink>
                <NavLink to={'/subscribers'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-users"></i>
                    <p>Subscribers</p>
                </NavLink>
            </div>

            <div className="flex flex-col border-b border-zinc-400 py-4 ">
                <NavLink to={'/library'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-house"></i>
                    <p>Library</p>
                </NavLink>
                <NavLink to={'/history'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-compass"></i>
                    <p>History</p>
                </NavLink>
                <NavLink to={'/yourvideos'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-video"></i>
                    <p>Your videos</p>
                </NavLink>
                <NavLink to={'/watchlater'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-users"></i>
                    <p>Watch later</p>
                </NavLink>
                <NavLink to={'/pop'} className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97'}>
                    <i className="fa-solid fa-users"></i>
                    <p>Pop</p>
                </NavLink>
                <p className="ml-5 cursor-pointer font-medium text-[14px] text-zinc-600 hover:text-black w-[100px]">Show more</p>
            </div>

            <div className="flex-1">
                <h1 className="mx-5 my-1 mt-3 uppercase text-zinc-600 text-[14px] font-semibold tracking-[-0.5px] cursor-context-menu">Subscriptions</h1>
                <NavLink className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97 text-[13px] font-semibold'}>
                    <img src={barcelona} className="w-[20px] object-cover object-center" />
                    <p>FC Barcelona</p>
                </NavLink>
                <NavLink className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97 text-[13px] font-semibold'}>
                    <img src={ted} className="w-[20px] object-cover object-center" />
                    <p>TED</p>
                </NavLink>
                <NavLink className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97 text-[13px] font-semibold'}>
                    <img src={group} className="w-[20px] object-cover object-center" />
                    <p>NNGroup</p>
                </NavLink>
                <NavLink className={'hover:bg-gray-200 px-4 mx-1 py-1 mb-[2px] rounded hover:font-semibold flex gap-3 items-center transition-all duration-200 active:duration-100 active:scale-97 text-[13px] font-semibold'}>
                    <img src={fifa} className="w-[20px] object-cover object-center" />
                    <p>FIFA</p>
                </NavLink>
            </div>
        </div>
    </div>
}

export default Sidebar;