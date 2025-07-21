"use client";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./components/contexts/AuthContext";
import { ResumeProvider } from "./components/contexts/ResumeContext";

// Navbar imports
import NavbarBeforeLogin from "./components/layout/NavbarBeforeLogin";
import NavbarAfterLogin from "./components/layout/NavbarAfterLogin";

// Core Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import Templates from "./pages/Templates";
import MyResumes from "./pages/MyResumes";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import HomePage from "./pages/HomePage";

// Informational Pages
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Resources from "./pages/Resources";
import ResumeTips from "./pages/ResumeTips";
import CareerAdvice from "./pages/CareerAdvice";
import InterviewGuide from "./pages/InterviewGuide";
import Blog from "./pages/Blog";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import TermsOfService from "./pages/Terms";

// Wrapper to access auth context inside AppRouter
function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function AppRouter() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {user ? <NavbarAfterLogin /> : <NavbarBeforeLogin />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resume-tips" element={<ResumeTips />} />
        <Route path="/career-advice" element={<CareerAdvice />} />
        <Route path="/interview-guide" element={<InterviewGuide />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/builder/:templateId?"
          element={
            <ProtectedRoute>
              <ResumeBuilder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-resumes"
          element={
            <ProtectedRoute>
              <MyResumes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/premium"
          element={
            <ProtectedRoute>
              <Premium />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />

        {/* Catch-all Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ResumeProvider>
        <Router>
          <AppRouter />
        </Router>
      </ResumeProvider>
    </AuthProvider>
  );
}

export default App;
