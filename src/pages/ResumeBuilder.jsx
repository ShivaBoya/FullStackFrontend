"use client"
import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Badge } from "../components/ui/badge"
import { Progress } from "../components/ui/progress"
import { Alert, AlertDescription } from "../components/ui/alert"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog"
import { useToast } from "../hooks/use-toast"
import PersonalInfoForm from "../components/forms/PersonalInfoForm"
import ExperienceForm from "../components/forms/ExperienceForm"
import EducationForm from "../components/forms/EducationForm"
import SkillsForm from "../components/forms/SkillsForm"
import ProjectsForm from "../components/forms/ProjectsForm"
import CertificationsForm from "../components/forms/CertificationsForm"
import ResumePreview from "../preview/ResumePreview"
import {
  Download,
  Save,
  Eye,
  EyeOff,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Lightbulb,
  ArrowLeft,
  ArrowRight,
  Palette,
  Settings,
  Share2,
  Clock,
  Brain,
  TrendingUp,
  Shield,
  FileText,
  User,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  ChevronRight,
  RefreshCw,
  Check,
  Mail,
  Loader2,
} from "lucide-react"

// API service functions - Fixed to match your backend
const API_BASE_URL = "http://localhost:3000/resume/create"

const getAuthToken = () => {
  return localStorage.getItem("token") || sessionStorage.getItem("token")
}

const getRefreshToken = () => {
  return localStorage.getItem("refreshToken") || sessionStorage.getItem("refreshToken")
}

const apiCall = async (endpoint, options = {}) => {
  const token = getAuthToken()
  const refreshToken = getRefreshToken()
  const url = `${API_BASE_URL}${endpoint}`

  const config = {
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...(refreshToken && { refreshtoken: `Refresh ${refreshToken}` }),
      ...options.headers,
    },
    ...options,
  }

  try {
    const response = await fetch(url, config)

    // Check for new access token in response headers
    const newAccessToken = response.headers.get("new-access-token")
    if (newAccessToken) {
      localStorage.setItem("token", newAccessToken)
    }

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`)
    }

    return data
  } catch (error) {
    console.error("API call failed:", error)
    throw error
  }
}

// AI Service using OpenAI API (you can replace with any AI service)
const generateAIContent = async (prompt, resumeData) => {
  try {
    // Using OpenAI API - replace with your preferred AI service
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`, // Add this to your .env file
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a professional resume advisor. Provide specific, actionable suggestions to improve resumes.",
          },
          {
            role: "user",
            content: `${prompt}\n\nCurrent resume data: ${JSON.stringify(resumeData, null, 2)}`,
          },
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error("AI service unavailable")
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error("AI generation failed:", error)
    // Fallback to static suggestions if AI fails
    return null
  }
}

// Updated API calls to match your backend endpoints
const resumeAPI = {
  // Get user's resume
  getResume: () => apiCall("/getresume"),

  // Create new resume
  create: (resumeData) =>
    apiCall("/create", {
      method: "POST",
      body: JSON.stringify(resumeData),
    }),

  // Update existing resume
  update: (resumeData) =>
    apiCall("/update", {
      method: "PUT",
      body: JSON.stringify(resumeData),
    }),

  // Delete resume
  delete: () =>
    apiCall("/delete", {
      method: "DELETE",
    }),

  // Send resume via email
  sendEmail: () => apiCall("/send"),

  // Download PDF - This will be handled differently since your backend generates PDF
  downloadPDF: () => apiCall("/send"), // Using send endpoint as it generates PDF
}

export default function ResumeBuilder() {
  const { templateId, resumeId } = useParams()
  const navigate = useNavigate()
  const { toast } = useToast()

  // State management - Updated to match your Mongoose schema
  const [selectedTemplate, setSelectedTemplate] = useState(templateId || "modern")
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      github: "",
    },
    workExperience: [],
    education: [],
    skills: [],
    projects: [],
    certifications: [],
    coverLetter: {
      title: "",
      content: "",
    },
    theme: {
      font: "Arial",
      color: "#000000",
      layout: "modern",
    },
  })
  const [showPreview, setShowPreview] = useState(true)
  const [activeTab, setActiveTab] = useState("personal")
  const [aiSuggestions, setAiSuggestions] = useState([])
  const [isGeneratingAI, setIsGeneratingAI] = useState(false)
  const [completionScore, setCompletionScore] = useState(0)
  const [atsScore, setAtsScore] = useState(0)
  const [autoSaveStatus, setAutoSaveStatus] = useState("saved")
  const [showAIPanel, setShowAIPanel] = useState(true)
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [resumeTitle, setResumeTitle] = useState("")
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [saveSuccess, setSaveSuccess] = useState(false)
  const [hasExistingResume, setHasExistingResume] = useState(false)
  const [isSendingEmail, setIsSendingEmail] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  // Load existing resume on component mount
  useEffect(() => {
    loadExistingResume()
  }, [])

  const loadExistingResume = async () => {
    try {
      setIsLoading(true)
      const response = await resumeAPI.getResume()

      if (response.resume) {
        const transformedData = transformBackendToFrontend(response.resume)
        setResumeData(transformedData)
        setHasExistingResume(true)
        setResumeTitle(generateDefaultTitle(transformedData))

        if (response.resume.theme?.layout) {
          setSelectedTemplate(response.resume.theme.layout)
        }

        toast({
          title: "Resume loaded",
          description: "Your existing resume has been loaded successfully.",
        })
      }
    } catch (error) {
      if (!error.message.includes("Resume not found") && !error.message.includes("404")) {
        toast({
          title: "Error loading resume",
          description: error.message,
          variant: "destructive",
        })
      }
      setHasExistingResume(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Transform backend data structure to frontend structure
  const transformBackendToFrontend = (backendData) => {
    return {
      personalInfo: {
        name: backendData.personalInfo?.name || "",
        email: backendData.personalInfo?.email || "",
        phone: backendData.personalInfo?.phone || "",
        address: backendData.personalInfo?.address || "",
        linkedin: backendData.personalInfo?.linkedin || "",
        github: backendData.personalInfo?.github || "",
      },
      workExperience: backendData.workExperience || [],
      education: backendData.education || [],
      skills: backendData.skills || [],
      projects: backendData.projects || [],
      certifications: backendData.certifications || [],
      coverLetter: backendData.coverLetter || { title: "", content: "" },
      theme: backendData.theme || { font: "Arial", color: "#000000", layout: "modern" },
    }
  }

  // Transform frontend data structure to backend structure
  const transformFrontendToBackend = (frontendData) => {
    return {
      personalInfo: frontendData.personalInfo,
      workExperience: frontendData.workExperience,
      education: frontendData.education,
      skills: frontendData.skills,
      projects: frontendData.projects,
      certifications: frontendData.certifications,
      coverLetter: frontendData.coverLetter,
      theme: {
        ...frontendData.theme,
        layout: selectedTemplate,
      },
    }
  }

  const generateDefaultTitle = (data) => {
    const name = data.personalInfo?.name || "My"
    return `${name} - Professional Resume`
  }

  // Generate default resume title based on personal info
  useEffect(() => {
    if (!resumeTitle && resumeData.personalInfo?.name) {
      setResumeTitle(`${resumeData.personalInfo.name} - Professional Resume`)
    }
  }, [resumeData.personalInfo, resumeTitle])

  // Calculate completion score
  useEffect(() => {
    const calculateCompletion = () => {
      let score = 0
      const sections = [
        { key: "personalInfo", weight: 25 },
        { key: "workExperience", weight: 30 },
        { key: "education", weight: 20 },
        { key: "skills", weight: 15 },
        { key: "projects", weight: 5 },
        { key: "certifications", weight: 5 },
      ]

      sections.forEach((section) => {
        const data = resumeData[section.key]
        if (section.key === "personalInfo") {
          const required = ["name", "email", "phone"]
          const filled = required.filter((field) => data[field]?.trim()).length
          score += (filled / required.length) * section.weight
        } else if (Array.isArray(data)) {
          score += data.length > 0 ? section.weight : 0
        }
      })

      setCompletionScore(Math.round(score))
    }
    calculateCompletion()
  }, [resumeData])

  // Calculate ATS score
  useEffect(() => {
    const calculateATS = () => {
      let score = 0
      const { personalInfo, workExperience, skills } = resumeData

      if (personalInfo.name && personalInfo.email && personalInfo.phone) score += 25
      if (workExperience.length > 0) score += 30
      if (skills.length >= 5) score += 25
      if (personalInfo.linkedin) score += 10
      if (personalInfo.github) score += 10

      setAtsScore(Math.min(100, score))
    }
    calculateATS()
  }, [resumeData])

  // Auto-save functionality
  useEffect(() => {
    if (hasExistingResume && resumeTitle) {
      const autoSave = async () => {
        setAutoSaveStatus("saving")
        try {
          const backendData = transformFrontendToBackend(resumeData)
          await resumeAPI.update(backendData)
          setAutoSaveStatus("saved")
        } catch (error) {
          setAutoSaveStatus("error")
          console.error("Auto-save failed:", error)
        }
      }

      const timer = setTimeout(autoSave, 3000)
      return () => clearTimeout(timer)
    }
  }, [resumeData, resumeTitle, selectedTemplate, hasExistingResume])

  // Update resume data function for child components
  const updateResumeData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }))
  }

  // Generate AI suggestions with real AI integration
  const generateAISuggestions = async () => {
    setIsGeneratingAI(true)

    try {
      const prompt = `Analyze this resume and provide 3 specific suggestions to improve it for better ATS compatibility and professional appeal. Focus on missing sections, weak areas, and optimization opportunities.`

      const aiResponse = await generateAIContent(prompt, resumeData)

      if (aiResponse) {
        // Parse AI response and create structured suggestions
        const suggestions = parseAIResponse(aiResponse)
        setAiSuggestions(suggestions)
      } else {
        // Fallback to static suggestions
        generateStaticSuggestions()
      }
    } catch (error) {
      console.error("AI suggestions failed:", error)
      generateStaticSuggestions()
    } finally {
      setIsGeneratingAI(false)
    }
  }

  const parseAIResponse = (aiResponse) => {
    // Simple parsing - you can make this more sophisticated
    const suggestions = []
    const lines = aiResponse.split("\n").filter((line) => line.trim())

    lines.forEach((line, index) => {
      if (line.includes("summary") || line.includes("objective")) {
        suggestions.push({
          id: index + 1,
          type: "improvement",
          section: "personal",
          title: "Enhance Professional Summary",
          description: line.trim(),
          priority: "high",
          action: "Improve Summary",
        })
      } else if (line.includes("experience") || line.includes("work")) {
        suggestions.push({
          id: index + 1,
          type: "enhancement",
          section: "experience",
          title: "Strengthen Work Experience",
          description: line.trim(),
          priority: "high",
          action: "Add Experience",
        })
      } else if (line.includes("skills") || line.includes("technical")) {
        suggestions.push({
          id: index + 1,
          type: "enhancement",
          section: "skills",
          title: "Optimize Skills Section",
          description: line.trim(),
          priority: "medium",
          action: "Add Skills",
        })
      }
    })

    return suggestions.slice(0, 3) // Limit to 3 suggestions
  }

  const generateStaticSuggestions = () => {
    const suggestions = []
    const { personalInfo, workExperience, skills } = resumeData

    if (!personalInfo.name || !personalInfo.email) {
      suggestions.push({
        id: 1,
        type: "missing",
        section: "personal",
        title: "Complete Personal Information",
        description: "Add your full name and contact information to make it easy for employers to reach you.",
        priority: "high",
        action: "Add Info",
      })
    }

    if (workExperience.length === 0) {
      suggestions.push({
        id: 2,
        type: "missing",
        section: "experience",
        title: "Add Work Experience",
        description: "Include your professional experience to showcase your career progression and achievements.",
        priority: "high",
        action: "Add Experience",
      })
    }

    if (skills.length < 8) {
      suggestions.push({
        id: 3,
        type: "enhancement",
        section: "skills",
        title: "Expand Skills Section",
        description: "Add more relevant skills to improve ATS matching and showcase your expertise.",
        priority: "medium",
        action: "Add Skills",
      })
    }

    setAiSuggestions(suggestions)
  }

  const tabs = [
    { id: "personal", label: "Personal", icon: User, color: "text-blue-600" },
    { id: "experience", label: "Experience", icon: Briefcase, color: "text-green-600" },
    { id: "education", label: "Education", icon: GraduationCap, color: "text-purple-600" },
    { id: "skills", label: "Skills", icon: Code, color: "text-orange-600" },
    { id: "projects", label: "Projects", icon: FileText, color: "text-pink-600" },
    { id: "certifications", label: "Certifications", icon: Award, color: "text-yellow-600" },
  ]

  // Fixed PDF download functionality
  const handleDownload = async () => {
    if (!hasExistingResume) {
      toast({
        title: "No resume to download",
        description: "Please save your resume first before downloading.",
        variant: "destructive",
      })
      return
    }

    setIsDownloading(true)
    try {
      // Since your backend generates PDF via email, we'll inform user about this
      await resumeAPI.sendEmail()
      toast({
        title: "PDF Generation Started",
        description: "Your resume PDF has been generated and sent to your email address.",
      })
    } catch (error) {
      toast({
        title: "Download failed",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  // Fixed save functionality
  const handleSave = async () => {
    if (hasExistingResume) {
      // Update existing resume
      setIsSaving(true)
      try {
        const backendData = transformFrontendToBackend(resumeData)
        await resumeAPI.update(backendData)
        setSaveSuccess(true)
        setTimeout(() => setSaveSuccess(false), 3000)
        toast({
          title: "Resume updated",
          description: "Your resume has been updated successfully.",
        })
      } catch (error) {
        toast({
          title: "Error updating resume",
          description: error.message,
          variant: "destructive",
        })
      } finally {
        setIsSaving(false)
      }
    } else {
      // Show save dialog for new resume
      setShowSaveDialog(true)
    }
  }

  const handleSaveNewResume = async () => {
    if (!resumeTitle.trim()) {
      toast({
        title: "Resume title required",
        description: "Please enter a title for your resume.",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)
    try {
      const backendData = transformFrontendToBackend(resumeData)
      const response = await resumeAPI.create(backendData)

      if (response.resume) {
        setHasExistingResume(true)
        setShowSaveDialog(false)
        setSaveSuccess(true)
        setTimeout(() => setSaveSuccess(false), 3000)

        toast({
          title: "Resume created",
          description: "Your resume has been created successfully.",
        })
      }
    } catch (error) {
      toast({
        title: "Error creating resume",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleSendEmail = async () => {
    if (!hasExistingResume) {
      toast({
        title: "No resume to send",
        description: "Please save your resume first before sending it via email.",
        variant: "destructive",
      })
      return
    }

    setIsSendingEmail(true)
    try {
      await resumeAPI.sendEmail()
      toast({
        title: "Email sent successfully",
        description: "Your resume has been sent to your email address.",
      })
    } catch (error) {
      toast({
        title: "Error sending email",
        description: error.message,
        variant: "destructive",
      })
    } finally {
      setIsSendingEmail(false)
    }
  }

  const handleDeleteResume = async () => {
    if (!hasExistingResume) return

    if (!window.confirm("Are you sure you want to delete this resume? This action cannot be undone.")) {
      return
    }

    try {
      await resumeAPI.delete()
      setHasExistingResume(false)
      setResumeData({
        personalInfo: {
          name: "",
          email: "",
          phone: "",
          address: "",
          linkedin: "",
          github: "",
        },
        workExperience: [],
        education: [],
        skills: [],
        projects: [],
        certifications: [],
        coverLetter: {
          title: "",
          content: "",
        },
        theme: {
          font: "Arial",
          color: "#000000",
          layout: "modern",
        },
      })
      setResumeTitle("")
      toast({
        title: "Resume deleted",
        description: "Your resume has been deleted successfully.",
      })
      navigate("/dashboard")
    } catch (error) {
      toast({
        title: "Error deleting resume",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  const handleTabChange = (tabId) => {
    setActiveTab(tabId)
  }

  const navigateTab = (direction) => {
    const currentIndex = tabs.findIndex((tab) => tab.id === activeTab)
    if (direction === "next" && currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id)
    } else if (direction === "prev" && currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your resume...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 md:py-0">
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full">
              <Button variant="ghost" onClick={() => navigate("/dashboard")}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="hidden sm:block h-6 w-px bg-gray-300" />
              <div className="flex items-center flex-wrap space-x-2">
                <h1 className="text-xl font-semibold text-gray-900">Resume Builder</h1>
                {resumeTitle && (
                  <>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 font-medium">{resumeTitle}</span>
                  </>
                )}
              </div>
              <Badge variant="outline" className="mt-2 sm:mt-0">
                {selectedTemplate || "Modern Professional"}
              </Badge>
            </div>

            {/* Right Section */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {/* Auto-save status */}
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>
                  {autoSaveStatus === "saving"
                    ? "Saving..."
                    : autoSaveStatus === "saved"
                      ? "Saved"
                      : autoSaveStatus === "error"
                        ? "Error"
                        : "Draft"}
                </span>
              </div>

              {/* Save success */}
              {saveSuccess && (
                <div className="flex items-center space-x-2 text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  <Check className="w-4 h-4" />
                  <span>Resume Saved!</span>
                </div>
              )}

              {/* Buttons */}
              <Button variant="outline" onClick={() => setShowPreview(!showPreview)}>
                {showPreview ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                {showPreview ? "Hide Preview" : "Show Preview"}
              </Button>

              <Button variant="outline" onClick={handleSendEmail} disabled={isSendingEmail || !hasExistingResume}>
                {isSendingEmail ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Mail className="w-4 h-4 mr-2" />}
                {isSendingEmail ? "Sending..." : "Email Resume"}
              </Button>

              <Button variant="outline" onClick={handleSave} disabled={isSaving}>
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? "Saving..." : hasExistingResume ? "Update Resume" : "Save Resume"}
              </Button>

              <Button onClick={handleDownload} disabled={isDownloading} className="bg-blue-600 hover:bg-blue-700">
                {isDownloading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Download className="w-4 h-4 mr-2" />
                )}
                {isDownloading ? "Generating..." : "Download PDF"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-2 gap-2">
            <span className="text-sm font-medium text-gray-700">Resume Completion</span>
            <span className="text-sm font-medium text-gray-700">{completionScore}%</span>
          </div>
          <Progress value={completionScore} className="h-2" />
          <div className="flex flex-col sm:flex-row justify-between mt-2 text-xs text-gray-500 gap-1">
            <span>Keep going! You're doing great.</span>
            <span>ATS Score: {atsScore}%</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`grid gap-8 ${showPreview ? "lg:grid-cols-3" : "lg:grid-cols-1"}`}>
          {/* Form Section */}
          <div className={`space-y-6 ${showPreview ? "lg:col-span-2" : ""}`}>
            {/* AI Suggestions Panel */}
            {showAIPanel && (
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-purple-600 rounded-lg">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg text-purple-900">AI Resume Assistant</CardTitle>
                        <CardDescription className="text-purple-700">
                          Get personalized AI-powered suggestions to improve your resume
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={generateAISuggestions}
                        disabled={isGeneratingAI}
                        className="bg-white/50"
                      >
                        {isGeneratingAI ? (
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Brain className="w-4 h-4 mr-2" />
                        )}
                        {isGeneratingAI ? "Analyzing..." : "Get AI Suggestions"}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowAIPanel(false)}
                        className="text-purple-600"
                      >
                        ×
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {aiSuggestions.length > 0 ? (
                    <div className="space-y-3">
                      {aiSuggestions.slice(0, 3).map((suggestion) => (
                        <Alert key={suggestion.id} className="bg-white/50 border-purple-200">
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-1 rounded-full ${
                                suggestion.priority === "high"
                                  ? "bg-red-100 text-red-600"
                                  : suggestion.priority === "medium"
                                    ? "bg-yellow-100 text-yellow-600"
                                    : "bg-blue-100 text-blue-600"
                              }`}
                            >
                              {suggestion.type === "missing" ? (
                                <AlertCircle className="w-4 h-4" />
                              ) : (
                                <Lightbulb className="w-4 h-4" />
                              )}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium text-gray-900">{suggestion.title}</h4>
                                <Badge
                                  variant={
                                    suggestion.priority === "high"
                                      ? "destructive"
                                      : suggestion.priority === "medium"
                                        ? "default"
                                        : "secondary"
                                  }
                                  className="text-xs"
                                >
                                  {suggestion.priority}
                                </Badge>
                              </div>
                              <AlertDescription className="text-gray-600 mb-2">
                                {suggestion.description}
                              </AlertDescription>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setActiveTab(suggestion.section)}
                                className="bg-white/50"
                              >
                                {suggestion.action}
                                <ChevronRight className="w-3 h-3 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </Alert>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <p className="text-purple-700 mb-4">
                        Get personalized AI suggestions to improve your resume and increase your chances of landing
                        interviews.
                      </p>
                      <Button
                        onClick={generateAISuggestions}
                        disabled={isGeneratingAI}
                        className="bg-purple-600 hover:bg-purple-700"
                      >
                        {isGeneratingAI ? (
                          <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        ) : (
                          <Sparkles className="w-4 h-4 mr-2" />
                        )}
                        {isGeneratingAI ? "Analyzing Your Resume..." : "Analyze My Resume"}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Main Form Card */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">Build Your Professional Resume</CardTitle>
                    <CardDescription className="text-blue-100">
                      Fill out each section to create your perfect resume
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-white/20 text-white">
                      <Shield className="w-3 h-3 mr-1" />
                      ATS Optimized
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <Tabs value={activeTab} onValueChange={handleTabChange}>
                  {/* Enhanced Tab Navigation */}
                  <div className="border-b bg-gray-50">
                    <div className="px-6 py-4">
                      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-white shadow-sm">
                        {tabs.map((tab) => (
                          <TabsTrigger
                            key={tab.id}
                            value={tab.id}
                            className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                          >
                            <tab.icon className="w-4 h-4" />
                            <span className="hidden sm:inline">{tab.label}</span>
                          </TabsTrigger>
                        ))}
                      </TabsList>

                      {/* Progress indicators for each section */}
                      <div className="flex justify-between mt-4 text-xs">
                        {tabs.map((tab) => {
                          const isComplete =
                            tab.id === "personal"
                              ? resumeData.personalInfo?.name && resumeData.personalInfo?.email
                              : Array.isArray(resumeData[tab.id === "experience" ? "workExperience" : tab.id])
                                ? resumeData[tab.id === "experience" ? "workExperience" : tab.id].length > 0
                                : false

                          return (
                            <div key={tab.id} className="flex items-center gap-1">
                              {isComplete ? (
                                <CheckCircle className="w-3 h-3 text-green-600" />
                              ) : (
                                <div className="w-3 h-3 rounded-full border-2 border-gray-300" />
                              )}
                              <span className={`hidden sm:inline ${isComplete ? "text-green-600" : "text-gray-400"}`}>
                                {tab.label}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Tab Content */}
                  <div className="p-6">
                    <TabsContent value="personal" className="mt-0">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                        <p className="text-gray-600">Start with your basic information and contact details.</p>
                      </div>
                      <PersonalInfoForm
                        data={resumeData.personalInfo}
                        onChange={(data) => updateResumeData("personalInfo", data)}
                      />
                    </TabsContent>

                    <TabsContent value="experience" className="mt-0">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Work Experience</h3>
                        <p className="text-gray-600">Add your professional experience and achievements.</p>
                      </div>
                      <ExperienceForm
                        data={resumeData.workExperience}
                        onChange={(data) => updateResumeData("workExperience", data)}
                      />
                    </TabsContent>

                    <TabsContent value="education" className="mt-0">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Education</h3>
                        <p className="text-gray-600">Include your educational background and qualifications.</p>
                      </div>
                      <EducationForm
                        data={resumeData.education}
                        onChange={(data) => updateResumeData("education", data)}
                      />
                    </TabsContent>

                    <TabsContent value="skills" className="mt-0">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills & Expertise</h3>
                        <p className="text-gray-600">Showcase your technical and soft skills.</p>
                      </div>
                      <SkillsForm data={resumeData.skills} onChange={(data) => updateResumeData("skills", data)} />
                    </TabsContent>

                    <TabsContent value="projects" className="mt-0">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects</h3>
                        <p className="text-gray-600">Highlight your key projects and accomplishments.</p>
                      </div>
                      <ProjectsForm
                        data={resumeData.projects}
                        onChange={(data) => updateResumeData("projects", data)}
                      />
                    </TabsContent>

                    <TabsContent value="certifications" className="mt-0">
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h3>
                        <p className="text-gray-600">Add your professional certifications and licenses.</p>
                      </div>
                      <CertificationsForm
                        data={resumeData.certifications}
                        onChange={(data) => updateResumeData("certifications", data)}
                      />
                    </TabsContent>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t">
                      <Button variant="outline" onClick={() => navigateTab("prev")} disabled={activeTab === tabs[0].id}>
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        onClick={() => navigateTab("next")}
                        disabled={activeTab === tabs[tabs.length - 1].id}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Next
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Preview Section */}
          {showPreview && (
            <div className="lg:sticky lg:top-8 lg:h-fit">
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        Live Preview
                      </CardTitle>
                      <CardDescription className="text-green-100">See your resume update in real-time</CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-white/20 text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {atsScore}% ATS
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                      <SelectTrigger className="w-48">
                        <SelectValue placeholder="Choose template" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modern">Modern Professional</SelectItem>
                        <SelectItem value="classic">Classic Executive</SelectItem>
                        <SelectItem value="creative">Creative Designer</SelectItem>
                        <SelectItem value="minimal">Minimal Clean</SelectItem>
                        <SelectItem value="technical">Technical Expert</SelectItem>
                        <SelectItem value="academic">Academic Scholar</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Palette className="w-4 h-4 mr-2" />
                        Customize
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <ResumePreview data={resumeData} template={selectedTemplate} />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{completionScore}%</div>
                      <div className="text-xs text-blue-600">Complete</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{atsScore}%</div>
                      <div className="text-xs text-green-600">ATS Score</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Save Resume Dialog */}
      <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Save Your Resume</DialogTitle>
            <DialogDescription>
              Give your resume a name to save it. You can edit and update it anytime.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="resume-title">Resume Title</Label>
              <Input
                id="resume-title"
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
                placeholder="e.g., John Doe - Software Engineer Resume"
                className="mt-1"
              />
            </div>
            <div className="text-sm text-gray-500">
              <p>This resume will be saved with:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Template: {selectedTemplate || "Modern Professional"}</li>
                <li>Completion: {completionScore}%</li>
                <li>ATS Score: {atsScore}%</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowSaveDialog(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleSaveNewResume}
              disabled={!resumeTitle.trim() || isSaving}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isSaving ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Resume
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
