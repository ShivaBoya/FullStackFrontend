"use client"

import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { FileText, User, LogOut, Settings, Menu } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate("/")
  }

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

            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Link to="/my-resumes">
                  <Button variant="ghost">My Resumes</Button>
                </Link>
                <Link to="/premium">
                  <Button variant="ghost">Premium</Button>
                </Link>

                {/* Profile Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full p-0">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                        <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <Link to="/profile">
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </DropdownMenuItem>
                    </Link>
                    <Link to="/settings">
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <>
                <Link to="/">
                  <Button variant="ghost">Home</Button>
                </Link>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
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

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-2 pb-4">
            <Link to="/templates" onClick={() => setMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">Templates</Button>
            </Link>

            {user ? (
              <>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
                </Link>
                <Link to="/my-resumes" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">My Resumes</Button>
                </Link>
                <Link to="/premium" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Premium</Button>
                </Link>
                <Link to="/profile" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Profile</Button>
                </Link>
                <Link to="/settings" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Settings</Button>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setMenuOpen(false)
                    handleLogout()
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Home</Button>
                </Link>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start">Login</Button>
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <Button className="w-full justify-start">Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
