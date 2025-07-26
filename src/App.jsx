import {Outlet} from 'react-router-dom'
import Sidebar from "./components/Sidebar"
import Searchbar from './components/Searchbar'


export default function App(){

  return <div className='w-[100%] h-[100vh] flex'>
    
    <div className='bg-white w-[220px] h-[100%]'>
      <Sidebar />
    </div>

    <div className='flex-1 flex flex-col'>
      <Searchbar />
      <Outlet />
    </div>
  </div>
}
