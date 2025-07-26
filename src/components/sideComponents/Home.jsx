import { useEffect, useState } from "react";
import loadingGif from '../../images/gifs/loading.gif';

function Home(){
    const [videoCount, setVideoCount] = useState(12);
    const myApiKey = 'AIzaSyC_GnqTxxp_fliflf7y9ziewDkmOMZsJVs';
    const myURL = `https://www.googleapis.com/youtube/v3/search?key=${myApiKey}&q=frontend&type=video&part=snippet&maxResults=${videoCount}`

    const [needID, setNeedID] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function getFetchData(){
        setIsLoading(true);
        let response = await fetch(myURL);
        let pos = await response.json();
        setNeedID(pos);
        setIsLoading(false);
    }

    useEffect(() => {
        getFetchData()
    }, []);

    console.log(needID)

    return <div className="overflow-auto h-[calc(100vh-60px)] relative">
        <div className="w-[100%] h-[auto] p-3 grid gap-5 grid-cols-3 grid-rows-2">
            {isLoading ? (
                <div className="w-[90%] h-[calc(100vh-100px)] flex items-center justify-center absolute">
                    <img src={loadingGif} className="w-[150px]" />
                </div>
            ) : (
                needID?.items?.map((item, index) => {
                    return <div key={index} className="h-[280px] cursor-pointer flex flex-col">
                        <div className="h-[200px] w-[100%] rounded-2xl overflow-hidden">
                            <img src={item.snippet.thumbnails.medium.url} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex gap-1 flex-1 pt-1">
                            <div className="h-full w-[55px] flex justify-center items-start">
                                <img src={item.snippet.thumbnails.default.url} className="w-[40px] h-[40px] object-cover rounded-full object-center" />
                            </div>
                            <div className="h-full flex-1">
                                <p className="font-semibold leading-[16px]">{item.snippet.title}</p>
                                <p className="text-[12px] tracking-[0.4px] font-semibold text-[#3a3a3a] mt-1">{item.snippet.channelTitle}</p>
                                <p className="text-[11px]">{new Date(item.snippet.publishedAt).toLocaleDateString()}</p>
                            </div>
                            {/* <p>{item.snippet.channelTitle}</p> */}
                        </div>
                    </div>
                })
            )}
        </div>
        
        {isLoading ? (
            <p></p>
        ) : (
            <div className="my-5 flex justify-center items-center">
                <button onClick={(e) => {
                    if(videoCount <= 36){
                        setVideoCount(videoCount + 12);
                        getFetchData();
                    }else {
                        e.target.style.display = 'none';
                    }
                }} className="border px-3 rounded-[5px] text-zinc-500 hover:text-black cursor-pointer transition-all duration-250 active:duration-100 active:scale-90">Show more</button>
            </div>
        )}
    </div>
}

export default Home;