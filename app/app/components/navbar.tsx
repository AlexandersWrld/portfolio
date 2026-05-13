'use client'

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  return (
    <nav className="w-full bg-black text-white px-6 py-4 border-b-4 border-jade-green relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Outlaw Brand Area */}
        <div 
          className="text-3xl font-black cursor-pointer tracking-tighter uppercase group flex items-center gap-2" 
          onClick={() => router.push('/')}
        >
          {/* Monospace accent for that "hacker/system" feel */}
          <span className="text-jade-green font-mono group-hover:text-white transition-colors duration-150">
            {'//'}
          </span> 
          Alex
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`block px-6 py-2 uppercase font-black tracking-widest text-sm transition-all duration-150 ${
                    isActive 
                      ? 'bg-jade-green text-white' 
                      : 'text-zinc-500 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  {/* Adds brutalist bracket brackets to the active link */}
                  {isActive ? `[ ${link.name} ]` : link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Brutalist Mobile Menu Button */}
        <button 
          className="md:hidden bg-zinc-900 p-2 border-2 border-zinc-800 text-white hover:border-red-600 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {/* Note: strokeLinecap changed from "round" to "square" for sharp edges */}
            {isOpen ? (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Brutalist Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-b-8 border-red-600 flex flex-col z-50">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-6 py-5 border-t border-zinc-900 uppercase font-black tracking-widest text-sm ${
                  isActive 
                    ? 'bg-red-600 text-white' 
                    : 'text-zinc-500 hover:bg-zinc-900 hover:text-white hover:pl-10 transition-all duration-200'
                }`}
              >
                {isActive ? `> ${link.name}` : link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}