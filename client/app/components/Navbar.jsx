"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, LogOut, Home, BarChart3, History, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsLoggedIn(true); // cookie-based auth, backend will protect routes
  }, []);

  const handleLogout = async () => {
    try {
      await logoutService(); // clears cookie on backend
      setIsLoggedIn(false);
      router.push("/");
      setIsOpen(false);
    } catch (err) {
      console.log("LOGOUT ERROR:", err);
    }
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl hover:text-blue-400 transition"
          >
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              AI
            </div>
            <span>VehicleDetect</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition flex items-center space-x-1"
            >
              <Home size={18} />
              <span>Home</span>
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  href="/dashboard"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition flex items-center space-x-1"
                >
                  <BarChart3 size={18} />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="/history"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition flex items-center space-x-1"
                >
                  <History size={18} />
                  <span>History</span>
                </Link>
                <Link
                  href="/profile"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition flex items-center space-x-1"
                >
                  <User size={18} />
                  <span>Profile</span>
                </Link>
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium transition flex items-center space-x-1"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-4 py-2 text-sm font-medium hover:bg-slate-700 rounded-md transition"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-slate-700 transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={handleNavClick}
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition"
            >
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link
                  href="/dashboard"
                  onClick={handleNavClick}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition"
                >
                  Dashboard
                </Link>
                <Link
                  href="/history"
                  onClick={handleNavClick}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition"
                >
                  History
                </Link>
                <Link
                  href="/profile"
                  onClick={handleNavClick}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition"
                >
                  Profile
                </Link>
              </>
            )}
            <div className="border-t border-slate-700 pt-2 space-y-1">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition text-red-400"
                >
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={handleNavClick}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition"
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    onClick={handleNavClick}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 transition bg-blue-600"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
