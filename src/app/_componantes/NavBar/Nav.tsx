"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-black">Shop</span>
          <span className="text-gray-500">istic</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition border-b-2 pb-1 ${
                pathname === link.href
                  ? "border-black text-black font-semibold"  // ← active
                  : "border-transparent text-gray-700 hover:text-black" // ← غير active
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button className="text-sm px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Login
          </button>
          <button className="text-sm px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Register
          </button>
          <button className="text-sm px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
            Sign Out
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;