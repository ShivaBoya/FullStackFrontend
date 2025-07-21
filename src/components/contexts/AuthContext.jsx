"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { baseUrl } from "../lib/util"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) {
        setUser(JSON.parse(storedUser))
      }
    } catch (err) {
      console.error("Invalid user JSON in localStorage:", err)
      localStorage.removeItem("user") // clear bad data
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      const res = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!res.ok) throw new Error("Login failed")

      const data = await res.json()
      if (!data.user || !data.user.email) {
        console.error("Login response missing user data:", data)
        throw new Error("Invalid user data from server")
      }

      setUser(data.user)
      localStorage.setItem("user", JSON.stringify(data.user))
    } catch (err) {
      console.error("Login error:", err)
      throw err
    }
  }

  const register = async (username, email, password) => {
    try {
      const res = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      })

      if (!res.ok) throw new Error("Registration failed")

      const data = await res.json()
      if (!data.user || !data.user.email) {
        console.error("Signup response missing user data:", data)
        throw new Error("Invalid user data from server")
      }

      setUser(data.user)
      localStorage.setItem("user", JSON.stringify(data.user))
    } catch (err) {
      console.error("Register error:", err)
      throw err
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
