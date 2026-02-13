'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white mt-16 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">VehicleDetect</h3>
            <p className="text-slate-400 text-sm">
              AI-powered vehicle damage detection for insurance claims, dealer intake, and inspections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-blue-400 transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/history" className="hover:text-blue-400 transition">
                  History
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-md font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <Link href="/terms" className="hover:text-blue-400 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>support@vehicledetect.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; 2024 VehicleDetect. All rights reserved.
            </p>
            <div className="flex space-x-6 text-slate-400 text-sm">
              <span className="hover:text-blue-400 transition cursor-pointer">Twitter</span>
              <span className="hover:text-blue-400 transition cursor-pointer">LinkedIn</span>
              <span className="hover:text-blue-400 transition cursor-pointer">Facebook</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
