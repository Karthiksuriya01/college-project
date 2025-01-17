import SideBar from '@/components/sidebar';
import {Outlet} from 'react-router-dom'

const Applayout = () => {
  return (
    <div className='flex'>
      <div
      className='fixed top-0 bg-black left-0 z-40 w-64 h-screen p-5'>
        <SideBar />
      </div>
      <div className='p-4 sm:ml-64'>
        <Outlet/>
      </div>
      
    </div>

    
  );
}

export default Applayout;