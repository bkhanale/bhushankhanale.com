import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="px-4 shadow-md">
      <div className="flex flex-wrap items-center justify-between container mx-auto">
        <div className="">
          <Link href="/">
            <div className="py-4 md:px-4 font-mono font-semibold text-2xl cursor-pointer">
              &lt;bhushan /&gt;
            </div>
          </Link>
        </div>
        <div className="flex md:hidden">
          <FontAwesomeIcon
            icon={isOpen ? faWindowClose : faBars}
            size="lg"
            id="hamburger"
            onClick={toggleMenu}
          />
        </div>
        <div
          className={`md:flex text-right w-full md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <a href="https://blog.bhushankhanale.com">
            <div className="block md:inline-block py-4 md:px-4 hover:bg-gray-200 md:rounded-md">
              <button type="button" className="">
                Blog
              </button>
            </div>
          </a>
          <Link href="/about">
            <div
              className={`block md:inline-block ${
                isOpen ? 'block' : 'hidden'
              } border-t-2 md:border-none hover:bg-gray-200 border-gray-200 md:rounded-md`}
            >
              <button type="button" className="py-4 md:px-4">
                About
              </button>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
