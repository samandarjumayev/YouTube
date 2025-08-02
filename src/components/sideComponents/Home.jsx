import { memo, useContext, useEffect, useState } from "react";
import loadingGif from '../../images/gifs/loading.gif';
import { UserContext } from "../../App";

const myApiKey = 'AIzaSyC_GnqTxxp_fliflf7y9ziewDkmOMZsJVs';
const myURL = `https://www.googleapis.com/youtube/v3/search?key=${myApiKey}&q=frontend&type=video&part=snippet&maxResults=18`


function Home(){
    // const [videoCount, setVideoCount] = useState(12);

    const [needID, setNeedID] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const info = useContext(UserContext);

    async function getFetchData(){
        setIsLoading(true);
        let response = await fetch(myURL);
        let pos = await response.json();
        setNeedID(pos);
        setIsLoading(false);
    }

    useEffect(() => {
        getFetchData();
    }, []);

    console.log(needID)


    return <div className={`${info.mode ? `bg-[#17153B]` : `bg-white`} transition-all duration-500 overflow-auto h-[calc(100vh-60px)] relative`}>
        <div className="w-[100%] h-[auto] p-3 grid gap-5 grid-cols-3 grid-rows-2">
            {isLoading ? (
                <div className="w-[90%] h-[calc(100vh-100px)] flex items-center justify-center absolute">
                    <img src={loadingGif} className="w-[150px]" />
                </div>
            ) : (
                needID?.items?.map((item, index) => {
                    return <div key={index} className={`${info.mode ? `hover:bg-[#2d279aff] text-white` : `hover:bg-zinc-400/60`} h-[280px] rounded-2xl px-3 py-1.5 cursor-pointer flex flex-col transition-all duration-300 hover:duration-200 active:duration-150 active:scale-95`}>
                        <div className="h-[200px] w-[100%] rounded-2xl overflow-hidden">
                            <img src={item.snippet.thumbnails.medium.url} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex gap-1 flex-1 pt-1">
                            <div className="h-full w-[55px] flex justify-center items-start">
                                <img src={item.snippet.thumbnails.default.url} className={`${info.mode ? `border-2 border-[#29C7AC]` : ``} w-[40px] h-[40px] object-cover rounded-full object-center`} />
                            </div>
                            <div className="h-full flex-1">
                                <p className="font-semibold leading-[16px]">{item.snippet.title}</p>
                                <p className={`${info.mode ? `text-[#29C7AC]` : `text-[#3a3a3a]`} text-[12px] tracking-[0.4px] font-semibold mt-1`}>{item.snippet.channelTitle}</p>
                                <p className="text-[11px]">{new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
                            </div>
                            {/* <p>{item.snippet.channelTitle}</p> */}
                        </div>
                    </div>
                })
            )}
        </div>
    
    </div>
}

export default memo(Home);