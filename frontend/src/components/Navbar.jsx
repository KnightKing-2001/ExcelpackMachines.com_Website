import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ openQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-50 sticky top-0 z-50 transition-all duration-300 font-sans shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer group">
            <div className="bg-slate-900 text-white font-black text-xl px-3 py-1 rounded-full tracking-widest transition-transform duration-300 group-active:scale-95 ease-[cubic-bezier(0.2,0,0,1)]">
              E
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              EXCELPACK <span className="text-orange-500">MACHINES</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <a href="/" className="px-4 py-2 text-sm font-bold text-slate-700 rounded-full hover:bg-slate-900/5 hover:text-slate-900 active:scale-95 transition-all duration-200">
              Home
            </a>
            <a href="/#catalog" className="px-4 py-2 text-sm font-bold text-slate-700 rounded-full hover:bg-slate-900/5 hover:text-slate-900 active:scale-95 transition-all duration-200">
              Our Machines
            </a>
            <a href="/#spare-parts" className="px-4 py-2 text-sm font-bold text-slate-700 rounded-full hover:bg-slate-900/5 hover:text-slate-900 active:scale-95 transition-all duration-200">
              Spare Parts
            </a>
            <a href="#contact" className="px-4 py-2 text-sm font-bold text-slate-700 rounded-full hover:bg-slate-900/5 hover:text-slate-900 active:scale-95 transition-all duration-200">
              Contact
            </a>

            
            <button
              type="button"
              onClick={openQuoteModal}
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-slate-800 transition-colors"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 p-2 rounded-full hover:bg-slate-900/5 active:scale-95 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-100 absolute w-full shadow-lg rounded-b-3xl overflow-hidden">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <a href="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-2xl text-base font-bold text-slate-800 hover:bg-slate-900/5 transition-colors">Home</a>
            <a href="/#catalog" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-2xl text-base font-bold text-slate-800 hover:bg-slate-900/5 transition-colors">Our Machines</a>
            <a href="/#spare-parts" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-2xl text-base font-bold text-slate-800 hover:bg-slate-900/5 transition-colors">Spare Parts</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center mt-4 bg-slate-900 text-white px-6 py-3.5 rounded-full text-base font-bold active:scale-95 transition-all duration-200 shadow-sm">
              Request Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;