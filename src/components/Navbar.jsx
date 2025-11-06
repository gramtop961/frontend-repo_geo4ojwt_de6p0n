import React from 'react';
import { Brain, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-transparent/50 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white lg:px-12">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-400">
            <Brain className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">ChatDokter</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm text-white/80 hover:text-white">Features</a>
          <a href="#showcase" className="text-sm text-white/80 hover:text-white">Showcase</a>
          <a href="#cta" className="text-sm text-white/80 hover:text-white">Early Access</a>
          <a
            href="#cta"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            Get started
          </a>
        </div>
        <button className="md:hidden">
          <Menu />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
