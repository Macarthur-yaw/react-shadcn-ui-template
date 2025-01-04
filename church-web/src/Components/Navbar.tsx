import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import churchLogo from "../assets/churchLogo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
      <>
    <nav className="absolute top-0 w-full  p-4 bg-transparent text-white z-40">
      <div className="flex flex-row justify-between items-center">
      
        <span className="flex flex-row justify-center items-center gap-1">
          <img
            src={churchLogo}
            alt="Church Logo"
            className="border border-gray-800 w-6 h-6 rounded-full"
          />
          <h1 className="md:text-xl text-sm uppercase font-bold tracking-widest text-white">
            Church of Christ
          </h1>
        </span>

    
        <ul className="md:flex flex-row hidden justify-between items-center gap-10">
          <li className="text-lg font-medium cursor-pointer">Sermons</li>
          <li className="text-lg font-medium cursor-pointer">Church doctrines</li>
        </ul>

        <a
          href="#"
          className="text-lg font-medium md:block hidden cursor-pointer"
        >
          Subscribe
        </a>

       
        <div
          className="md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>
      </div>

      
      
    </nav>

    <div
        className={`${
          menuOpen ? "top-16 opacity-100 " : "-top-64 opacity-0"
        } absolute left-0 w-full bg-white z-10 text-[#403765] transition-all duration-500 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          <li className="text-lg font-medium cursor-pointer">Sermons</li>
          <li className="text-lg font-medium cursor-pointer">Church doctrines</li>
          <li className="text-lg font-medium cursor-pointer">Subscribe</li>
        </ul>
      </div>

    </>
  );
}
