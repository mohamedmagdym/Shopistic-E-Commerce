"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaHeart,
} from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  function logOut() {
    signOut({ callbackUrl: "/login" });
  }

  return (
    <nav className="w-full bg-[#0F172A] text-white shadow-lg shadow-black/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          <span className="text-white">Shop</span>
          <span className="text-[#F59E0B]">Sphere</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition pb-1 border-b-2 ${
                pathname === link.href
                  ? "border-[#2563EB] text-[#2563EB]"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CART (same logic style) */}
          {session && (
            <Link
              href="/cart"
              className={`flex items-center gap-2 transition pb-1 border-b-2 ${
                pathname === "/cart"
                  ? "border-[#2563EB] text-[#2563EB]"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              <FaShoppingCart />
              Cart
            </Link>
          )}

          {/* WISHLIST (only if logged in) */}
          {session && (
            <Link
              href="/wishlist"
              className={`flex items-center gap-2 transition pb-1 border-b-2 ${
                pathname === "/wishlist"
                  ? "border-[#2563EB] text-[#2563EB]"
                  : "border-transparent text-gray-300 hover:text-white"
              }`}
            >
              <FaHeart className="text-red-500" />
              Wishlist
            </Link>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">

          {/* Social */}
          <div className="hidden md:flex items-center gap-3 text-gray-300">
            <FaFacebookF className="cursor-pointer hover:text-[#2563EB]" />
            <FaInstagram className="cursor-pointer hover:text-[#F59E0B]" />
            <FaTwitter className="cursor-pointer hover:text-[#2563EB]" />
          </div>

          {/* Auth */}
          {session ? (
            <>
              <span className="hidden md:block text-sm text-gray-300">
                Hi, {session.user.name}
              </span>

              <Link
                onClick={logOut}
                href="/"
                className="text-sm px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-700 transition"
              >
                Log Out
              </Link>
            </>
          ) : (
            <div className="hidden md:flex gap-2">
              <Link
                href="/login"
                className="text-sm px-4 py-2 rounded-xl border border-gray-500 text-gray-300 hover:bg-white hover:text-black transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>
          )}

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0F172A] border-t border-gray-700 px-4 py-4 space-y-4">

          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${
                pathname === link.href
                  ? "text-[#2563EB]"
                  : "text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CART mobile */}
          {session && (
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300"
            >
              <FaShoppingCart />
              Cart
            </Link>
          )}

          {/* WISHLIST mobile */}
          {session && (
            <Link
              href="/wishlist"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-300"
            >
              <FaHeart className="text-red-500" />
              Wishlist
            </Link>
          )}

          <div className="flex gap-3 pt-3 border-t border-gray-700">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
          </div>

          {session ? (
            <button
              onClick={logOut}
              className="w-full mt-3 px-4 py-2 rounded-xl bg-[#2563EB]"
            >
              Log Out
            </button>
          ) : (
            <div className="flex flex-col gap-2 mt-3">
              <Link
                href="/login"
                className="text-center px-4 py-2 rounded-xl border border-gray-500 text-gray-300"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-center px-4 py-2 rounded-xl bg-[#2563EB]"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;