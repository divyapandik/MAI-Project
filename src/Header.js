import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import PostProject from './pages/PostProject';
import './App.css';

function Header() {
  return (
    <header className="bg-gray-100 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-900">MAI</div>
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-blue-500">How it Works</Link>
          <Link to="/project" className="text-gray-700 hover:text-blue-500">Project</Link>
          <Link to="/blogs" className="text-gray-700 hover:text-blue-500">Blogs</Link>
          <Link to="/diy-worktops" className="text-gray-700 hover:text-blue-500">DIY Worktops</Link>
        </nav>
        <div className="flex space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded">Post a Project</button>
          <button className="text-blue-700">Login</button>
          <button className="text-blue-700">Sign Up</button>
        </div>
      </div>
    </header>
  );
}


