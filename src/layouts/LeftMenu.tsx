import { Link } from 'react-router-dom';
import './LeftMenu.css';

export function LeftMenu () {
  return (
    <aside className='left-menu'>
      <nav className='left-menu-item-container'>
        <nav className='flex flex-col p-4'>
          <Link to="/liked" className='left-menu-item'>Liked Videos</Link>
          <Link to="/trending" className='left-menu-item'>Trending</Link>
          <Link to="/upload" className='left-menu-item'>Upload</Link>
        </nav>
        <nav className='flex flex-col p-4'>
          <p className='font-thin text-xs'>Licence : None </p>
          <p className='font-thin text-xs'>Copyright crushed-lemon@2025 </p>
        </nav>
      </nav>
    </aside>
  );
}
