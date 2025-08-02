import { useContext } from "react";
import { UserContext } from "../../App";

function Shorts(){
    const info = useContext(UserContext);
    return <div className={`${info.mode ? `bg-[#17153B]` : `bg-white`} transition-all duration-500 overflow-auto h-[calc(100vh-60px)] relative`}>
        <h1 className={`${info.mode ? `text-[#29C7AC]` : `text-black`} text-4xl mt-5 tracking-[4px]`}>Shorts</h1>
    </div>
}

export default Shorts;