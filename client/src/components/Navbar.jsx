import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-[#16161d]/80 backdrop-blur-md border-b border-[#2a2a38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[73px]">
        <Link to="/" className="flex items-center gap-0.5">
          <span className="text-2xl font-extrabold tracking-tight text-[#f0f0f5]">Dally</span>
          <span className="text-2xl font-extrabold tracking-tight text-[#6469ff]">.2</span>
        </Link>
        <button
          onClick={() => navigate('/create-post')}
          className="bg-gradient-to-r from-[#6469ff] to-[#818cf8] text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-[0_0_20px_rgba(100,105,255,0.4)] hover:scale-[1.02] text-sm"
        >
          Create
        </button>
      </div>
    </header>
  );
};

export default Navbar;
