import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import Link from 'next/link';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const renderThemeButton = () => {
    if (!darkMode) {
      return (
        <BsFillMoonStarsFill onClick={() => toggleDarkMode()} className='cursor-pointer text-2xl'/>
      )
    }

    return (
      <BsFillSunFill onClick={() => toggleDarkMode()} className='cursor-pointer text-2xl'/>
    )
  };

  return(
    <nav className='bg-stone-900 dark:bg-slate-700 max-h-min min-w-max py-4 flex justify-between'>
      <div className='flex items-center px-8'>
        <Link className='text-l' href='/'>Partners</Link>
        <Link className='text-l ml-6' href='/new'>Add new partner</Link>
      </div>
      <ul className='flex items-center px-8'>
        <li>
          {renderThemeButton()}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
