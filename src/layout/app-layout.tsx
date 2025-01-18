import Header from '@/components/header';
import SideBar from '@/components/sidebar';
import { Outlet } from 'react-router-dom';

const Applayout = () => {
  return (
    <>
     <SideBar />
    <div className='flex flex-col my-10'>
      <div className='fixed top-0 left-0 right-0 z-100 h-16 bg-gray-950'>
        <Header/>

      </div>
      <div className='sm:ml-64 w-full h-screen p-4'>
        <Outlet />
      </div>
     </div>
    </>
  );
}

export default Applayout;