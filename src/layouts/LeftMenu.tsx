import './LeftMenu.css';

export function LeftMenu () {
  return (
    <aside className='left-menu'>
      <nav className='left-menu-item-container'>
        <nav className='flex flex-col p-4'>
          <button className='left-menu-item'>Liked Videos</button>
          <button className='left-menu-item'>Trending</button>
          <button className='left-menu-item'>Upload</button>
        </nav>
        <nav className='flex flex-col p-4'>
          <p className='font-thin text-xs'>Licence : None </p>
          <p className='font-thin text-xs'>Copyright crushed-lemon@2025 </p>
        </nav>
      </nav>
    </aside>
  );
}
