import {Outlet} from 'react-router-dom'
import Sidebar from "./components/Sidebar"
import Searchbar from './components/Searchbar'
import { createContext, useState } from 'react'

export const UserContext = createContext();


export default function App(){
  const [mode, setMode] = useState(true);

  return <div className='w-[100%] h-[100vh] flex'>
    
    <UserContext.Provider value={mode}>
      <div className='bg-white w-[220px] h-[100%]'>
        <Sidebar />
      </div>
    </UserContext.Provider>

    <UserContext.Provider value={{mode, setMode}}>
      <div className='flex-1 flex flex-col'>
        <Searchbar />
        <Outlet />
      </div>
    </UserContext.Provider>
  </div>
}


// #17153B - Dark
// #231e7aff - Dark hover
// #2d279aff - Dark hover -2
// #29C7AC - Light
// #32f5d5ff - Light hover