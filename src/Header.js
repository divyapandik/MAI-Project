
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import logo from "./Images/LOGO.png";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-[124.69px] h-[71.01px] object-contain ml-12"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <button
            className="bg-white border border-gray-400 px-4 py-2 rounded-lg font-semibold"
            onClick={() => navigate("/post-project")}
          >
            Post a Project
          </button>
          <FaShoppingCart className="text-[#003F6B] text-xl" />
          <div className="flex items-center gap-3 text-[#003F6B] font-montserrat font-bold text-[20px]">
            <span>Login</span>
            <span>Sign Up</span>
          </div>
        </div>

        <button
          className="md:hidden text-[#003F6B] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 bg-white py-4">
          <Link to="/" className="text-[#003F6B] font-bold text-lg" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/how-it-works" className="text-[#003F6B] font-bold text-lg" onClick={() => setMenuOpen(false)}>
            How it Works
          </Link>
          <Link to="/projects" className="text-[#003F6B] font-bold text-lg" onClick={() => setMenuOpen(false)}>
            Project
          </Link>
          <Link to="/blogs" className="text-[#003F6B] font-bold text-lg" onClick={() => setMenuOpen(false)}>
            Blogs
          </Link>
          <Link to="/diy-worktops" className="text-[#003F6B] font-bold text-lg" onClick={() => setMenuOpen(false)}>
            DIY Worktops
          </Link>
        </div> 



      )}

      <nav className="bg-sky-100 py-2 h-[60px] px-4 md:px-8 flex items-center justify-between">
        <span className="text-[#003F6B] font-extrabold text-sm hidden md:block ml-14">
          WWW.MYPROJECT.AI
        </span>

        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-[#003F6B] font-bold text-[17px]">Home</Link>
          <span className="text-blue-900">|</span>
          <Link to="/how-it-works" className="text-[#003F6B] font-bold text-[17px]">How it Works</Link>
          <span className="text-blue-900">|</span>
          <Link to="/projects" className="text-[#003F6B] font-bold text-[17px]">Project</Link>
          <span className="text-blue-900">|</span>
          <Link to="/blogs" className="text-[#003F6B] font-bold text-[17px]">Blogs</Link>
          <span className="text-blue-900">|</span>
          <Link to="/diy-worktops" className="text-[#003F6B] font-bold text-[17px]">DIY Worktops</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;


