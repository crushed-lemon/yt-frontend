import Navbar from './Navbar';
import { LeftMenu } from './LeftMenu';
import { Outlet } from 'react-router-dom';

export function AppLayout () {
  return (
    <div>
      <Navbar />
      <LeftMenu />
      <main className='pt-20 pl-0 md:pl-48 transition-all'>
        <Outlet />
      </main>
    </div>
  );
}
