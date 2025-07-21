"use client"

import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { FileText, Menu } from "lucide-react"
import { useState } from "react"

export default function NavbarBeforeLogin() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">ResumeBuilder</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/templates">
              <Button variant="ghost">Templates</Button>
            </Link>
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/register">
              <Button>Sign Up</Button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="p-2"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link to="/templates" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">Templates</Button>
            </Link>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">Home</Button>
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">Login</Button>
            </Link>
            <Link to="/register" onClick={() => setMenuOpen(false)}>
              <Button className="w-full justify-start">Sign Up</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
