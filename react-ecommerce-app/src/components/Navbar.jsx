import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBag, FaBars } from "react-icons/fa";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const NavItemList = ({ onClick, textColor = "text-white" }) => (
  <ul className="flex flex-col md:flex-row md:gap-6">
    {navItems.map((item, index) => (
      <li key={index} className="my-2 md:my-0">
        <NavLink
          to={item.path}
          onClick={onClick}
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-semibold"
              : `${textColor} hover:text-blue-500`
          }
        >
          {item.label}
        </NavLink>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex justify-between items-center py-4 px-6 md:px-16 bg-transparent">
        
        <Link to="/" className="font-bold text-2xl text-white relative z-50">Logo</Link>

        
        <div className="md:hidden cursor-pointer text-2xl text-white relative z-50" onClick={toggleMenu}>
          <FaBars />
        </div>

        
        <div className="hidden md:block z-50 relative">
          <NavItemList textColor="text-white font-bold" />
        </div>

       
        <div className="hidden md:block text-2xl text-white relative cursor-pointer z-50">
          <FaShoppingBag />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md">
            0
          </span>
        </div>

        
        {isOpen && (
          <div className="absolute top-full left-0 w-full shadow-lg md:hidden z-50 bg-black/70 backdrop-blur-md text-white">
            <NavItemList onClick={toggleMenu} textColor="text-white" />
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
