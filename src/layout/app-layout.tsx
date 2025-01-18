import Header from '@/components/header';
import SideBar from '@/components/sidebar';
import { Outlet } from 'react-router-dom';

const Applayout = () => {
  return (
    <div>
      <SideBar />
      <Header/>
      <div className='flex-1 p-4 sm:ml-64'>
        <Outlet />
      </div>
    </div>
  );
}

export default Applayout;