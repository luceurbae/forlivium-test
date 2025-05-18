
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-forlivium-red text-2xl font-bold">フォリビウム</span>
          <span className="text-forlivium-black text-xl font-medium">Forlivium</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-forlivium-black hover:text-forlivium-red transition-colors">
            About
          </a>
          <a href="#community" className="text-forlivium-black hover:text-forlivium-red transition-colors">
            Community
          </a>
          <a href="#connect" className="text-forlivium-black hover:text-forlivium-red transition-colors">
            Connect
          </a>
          <Button className="bg-forlivium-red hover:bg-forlivium-red/80 text-white">
            Join Discord
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu}
            className="text-forlivium-black hover:bg-forlivium-red/10 hover:text-forlivium-red"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full animate-fade-in">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-forlivium-black hover:text-forlivium-red transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#community" 
              className="text-forlivium-black hover:text-forlivium-red transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#connect" 
              className="text-forlivium-black hover:text-forlivium-red transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect
            </a>
            <Button className="bg-forlivium-red hover:bg-forlivium-red/80 text-white mx-4">
              Join Discord
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
