"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingBag } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-3xl font-bold text-blue-600">
        <Link href="/">BAYSIDE FINE JEWELRY</Link>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700 font-medium text-2xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

     

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-blue-600 text-2xl"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md p-4 space-y-4 text-gray-700 font-medium md:hidden">
          <li>
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
