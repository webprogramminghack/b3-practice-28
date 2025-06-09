import { useEffect, useState } from 'react';
import logo from '../../assets/logo-pokemon.svg';
import { useLocation } from 'react-router-dom';
import Searchbar from '../container/Searchbar';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {pathname === '/' ? (
        <div
          className={`flex items-center justify-center gap-2 p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white shadow' : 'bg-transparent'
          }`}
        >
          <img src={logo} alt="" />
          <div className="text-[20px] md:text-[28px] text-neutral-900 font-bold">
            Pokedex
          </div>
        </div>
      ) : (
        <div
          className={
            'flex items-center justify-center gap-2 p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow'
          }
        >
          <img src={logo} alt="" />
          <Searchbar />
        </div>
      )}
    </>
  );
};
export default Navbar;
