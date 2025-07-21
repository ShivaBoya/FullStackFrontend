"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../components/contexts/AuthContext"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { useToast } from "../hooks/use-toast"
import {
  Plus,
  FileText,
  Download,
  Edit,
  Trash2,
  Eye,
  TrendingUp,
  Target,
  Clock,
  Zap,
  Users,
  CheckCircle,
  Lightbulb,
  Share2,
  Trophy,
  Bell,
  Settings,
  Loader2,
  RefreshCw,
  Mail,
} from "lucide-react"

// API service functions - Updated to match your backend
const API_BASE_URL = "http://localhost:3000"

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

  // Get all resumes (admin only)
  getAllResumes: () => apiCall("/allresumes"),
}

export default function Dashboard() {
  const { user } = useAuth()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState("overview")
  const [resume, setResume] = useState(null)
  const [stats, setStats] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [hasResume, setHasResume] = useState(false)

  // Load data on component mount
  useEffect(() => {
    loadDashboardData()
  }, [])

  const loadDashboardData = async () => {
    try {
      setIsLoading(true)
      const response = await resumeAPI.getResume()

      if (response.resume) {
        setResume(response.resume)
        setHasResume(true)
        const calculatedStats = calculateStatsFromResume(response.resume)
        setStats(calculatedStats)
      } else {
        setHasResume(false)
        setStats(getDefaultStats())
      }
    } catch (error) {
      console.error("Error loading dashboard data:", error)
      if (error.message.includes("Resume not found")) {
        setHasResume(false)
        setStats(getDefaultStats())
      } else {
        toast({
          title: "Error loading dashboard",
          description: error.message,
          variant: "destructive",
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const refreshData = async () => {
    setIsRefreshing(true)
    await loadDashboardData()
    setIsRefreshing(false)
    toast({
      title: "Data refreshed",
      description: "Your dashboard has been updated with the latest information.",
    })
  }

  const calculateStatsFromResume = (resumeData) => {
    const workExperienceCount = resumeData.workExperience?.length || 0
    const educationCount = resumeData.education?.length || 0
    const skillsCount = resumeData.skills?.length || 0
    const projectsCount = resumeData.projects?.length || 0
    const certificationsCount = resumeData.certifications?.length || 0

    return [
      {
        label: "Work Experience",
        value: workExperienceCount.toString(),
        change: workExperienceCount > 0 ? "Professional background" : "Add your experience",
        trend: "up",
        icon: FileText,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        label: "Education",
        value: educationCount.toString(),
        change: educationCount > 0 ? "Academic background" : "Add your education",
        trend: "up",
        icon: Target,
        color: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        label: "Skills",
        value: skillsCount.toString(),
        change: skillsCount > 0 ? "Technical expertise" : "Add your skills",
        trend: "up",
        icon: Eye,
        color: "text-purple-600",
        bgColor: "bg-purple-100",
      },
      {
        label: "Projects",
        value: projectsCount.toString(),
        change: projectsCount > 0 ? "Portfolio items" : "Add your projects",
        trend: "up",
        icon: Download,
        color: "text-orange-600",
        bgColor: "bg-orange-100",
      },
    ]
  }

  const getDefaultStats = () => [
    {
      label: "Work Experience",
      value: "0",
      change: "Add your experience",
      trend: "up",
      icon: FileText,
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      label: "Education",
      value: "0",
      change: "Add your education",
      trend: "up",
      icon: Target,
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      label: "Skills",
      value: "0",
      change: "Add your skills",
      trend: "up",
      icon: Eye,
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      label: "Projects",
      value: "0",
      change: "Add your projects",
      trend: "up",
      icon: Download,
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "create",
      message: hasResume ? "Resume updated" : "Create your first resume",
      time: hasResume ? "Recently" : "Get started",
      icon: FileText,
      color: "text-green-600",
    },
    {
      id: 2,
      type: "email",
      message: "Send resume via email",
      time: "Available",
      icon: Mail,
      color: "text-blue-600",
    },
    {
      id: 3,
      type: "download",
      message: "Download PDF version",
      time: "Ready",
      icon: Download,
      color: "text-purple-600",
    },
    {
      id: 4,
      type: "edit",
      message: "Edit resume details",
      time: "Anytime",
      icon: Edit,
      color: "text-orange-600",
    },
  ]

  const achievements = [
    {
      id: 1,
      title: "Resume Created",
      description: "Created your professional resume",
      icon: FileText,
      earned: hasResume,
      date: hasResume ? "Recently" : null,
    },
    {
      id: 2,
      title: "Complete Profile",
      description: "Added personal information",
      icon: Users,
      earned: hasResume && resume?.personalInfo?.name,
      progress: hasResume && resume?.personalInfo?.name ? 100 : 0,
    },
    {
      id: 3,
      title: "Work Experience",
      description: "Added work experience",
      icon: Target,
      earned: hasResume && resume?.workExperience?.length > 0,
      progress: hasResume && resume?.workExperience?.length > 0 ? 100 : 0,
    },
    {
      id: 4,
      title: "Skills Expert",
      description: "Added 5+ skills",
      icon: Trophy,
      earned: hasResume && resume?.skills?.length >= 5,
      progress: hasResume ? Math.min(100, ((resume?.skills?.length || 0) / 5) * 100) : 0,
    },
  ]

  const tips = [
    {
      id: 1,
      title: hasResume ? "Update Your Resume" : "Create Your Resume",
      description: hasResume
        ? "Keep your resume updated with latest information"
        : "Start building your professional resume today",
      action: hasResume ? "Update Resume" : "Create Resume",
      priority: "high",
    },
    {
      id: 2,
      title: "Add More Skills",
      description: "Include both technical and soft skills to stand out",
      action: "Add Skills",
      priority: "medium",
    },
    {
      id: 3,
      title: "Complete All Sections",
      description: "Fill out education, experience, and projects for a complete profile",
      action: "Complete Profile",
      priority: "low",
    },
  ]

  const handleSendEmail = async () => {
    if (!hasResume) {
      toast({
        title: "No resume found",
        description: "Please create a resume first before sending it via email.",
        variant: "destructive",
      })
      return
    }

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
    }
  }

  const handleDeleteResume = async () => {
    if (!hasResume) return

    if (!window.confirm("Are you sure you want to delete your resume? This action cannot be undone.")) {
      return
    }

    try {
      await resumeAPI.delete()
      setHasResume(false)
      setResume(null)
      setStats(getDefaultStats())
      toast({
        title: "Resume deleted",
        description: "Your resume has been deleted successfully.",
      })
    } catch (error) {
      toast({
        title: "Error deleting resume",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  const handleShare = () => {
    if (!hasResume) {
      toast({
        title: "No resume to share",
        description: "Please create a resume first.",
        variant: "destructive",
      })
      return
    }

    const shareText = `Check out my professional resume: ${resume?.personalInfo?.name || "My Resume"}`
    navigator.clipboard.writeText(shareText)
    toast({
      title: "Copied to clipboard",
      description: "Resume information has been copied to clipboard!",
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                <AvatarFallback className="bg-blue-600 text-white text-xl">
                  {user?.name?.charAt(0)?.toUpperCase() || resume?.personalInfo?.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome back, {user?.name?.split(" ")[0] || resume?.personalInfo?.name?.split(" ")[0] || "User"}!
                </h1>
                <p className="text-gray-600">
                  {hasResume ? (
                    <>
                      Resume status: <span className="font-semibold text-green-600">Active</span>
                      {resume?.personalInfo?.email && (
                        <>
                          {" "}
                          • Email: <span className="font-semibold text-blue-600">{resume.personalInfo.email}</span>
                        </>
                      )}
                    </>
                  ) : (
                    <span className="font-semibold text-orange-600">No resume created yet</span>
                  )}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={refreshData} disabled={isRefreshing}>
                {isRefreshing ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <RefreshCw className="w-4 h-4 mr-2" />
                )}
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    <p className={`text-sm mt-1 flex items-center ${stat.color}`}>
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {stat.change}
                    </p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm">
            <TabsTrigger value="overview" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="resume" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              My Resume
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>Get started with these common tasks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link to="/builder">
                      <Button className="w-full h-20 flex-col bg-blue-600 hover:bg-blue-700">
                        <Plus className="w-6 h-6 mb-2" />
                        {hasResume ? "Edit Resume" : "Create Resume"}
                      </Button>
                    </Link>
                    <Link to="/templates">
                      <Button variant="outline" className="w-full h-20 flex-col bg-transparent">
                        <FileText className="w-6 h-6 mb-2" />
                        Browse Templates
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full h-20 flex-col bg-transparent"
                      onClick={handleSendEmail}
                      disabled={!hasResume}
                    >
                      <Mail className="w-6 h-6 mb-2" />
                      Email Resume
                    </Button>
                    <Button variant="outline" className="w-full h-20 flex-col bg-transparent" onClick={handleShare}>
                      <Share2 className="w-6 h-6 mb-2" />
                      Share Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-green-600" />
                    Available Actions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full bg-gray-100`}>
                          <activity.icon className={`w-3 h-3 ${activity.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tips & Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  Tips & Recommendations
                </CardTitle>
                <CardDescription>Personalized suggestions to improve your resume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tips.map((tip) => (
                    <div
                      key={tip.id}
                      className={`p-4 rounded-lg border-l-4 ${
                        tip.priority === "high"
                          ? "border-red-500 bg-red-50"
                          : tip.priority === "medium"
                            ? "border-yellow-500 bg-yellow-50"
                            : "border-blue-500 bg-blue-50"
                      }`}
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{tip.title}</h4>
                      <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
                      <Link to="/builder">
                        <Button size="sm" variant="outline" className="bg-transparent">
                          {tip.action}
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Resume Tab */}
          <TabsContent value="resume" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">My Resume</h2>
                <p className="text-gray-600">Manage your professional resume</p>
              </div>
              <div className="flex items-center gap-3">
                {hasResume && (
                  <>
                    <Button variant="outline" size="sm" onClick={handleSendEmail}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email Resume
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDeleteResume}
                      className="text-red-600 hover:text-red-700 bg-transparent"
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </>
                )}
                <Link to="/builder">
                  <Button>
                    {hasResume ? (
                      <>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Resume
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 mr-2" />
                        Create Resume
                      </>
                    )}
                  </Button>
                </Link>
              </div>
            </div>

            {!hasResume ? (
              <Card className="text-center py-12">
                <CardContent>
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No resume created yet</h3>
                  <p className="text-gray-600 mb-6">Create your first professional resume to get started</p>
                  <Link to="/builder">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Create Your Resume
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{resume?.personalInfo?.name || "My Resume"}</CardTitle>
                      <CardDescription>
                        Last updated: {new Date(resume?.updatedAt || resume?.createdAt).toLocaleDateString()}
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-700">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Resume Summary */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">{resume?.workExperience?.length || 0}</div>
                      <div className="text-sm text-blue-600">Work Experience</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">{resume?.education?.length || 0}</div>
                      <div className="text-sm text-green-600">Education</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">{resume?.skills?.length || 0}</div>
                      <div className="text-sm text-purple-600">Skills</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">{resume?.projects?.length || 0}</div>
                      <div className="text-sm text-orange-600">Projects</div>
                    </div>
                  </div>

                  {/* Personal Info */}
                  {resume?.personalInfo && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-3">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        {resume.personalInfo.name && (
                          <div>
                            <span className="font-medium">Name:</span> {resume.personalInfo.name}
                          </div>
                        )}
                        {resume.personalInfo.email && (
                          <div>
                            <span className="font-medium">Email:</span> {resume.personalInfo.email}
                          </div>
                        )}
                        {resume.personalInfo.phone && (
                          <div>
                            <span className="font-medium">Phone:</span> {resume.personalInfo.phone}
                          </div>
                        )}
                        {resume.personalInfo.address && (
                          <div>
                            <span className="font-medium">Address:</span> {resume.personalInfo.address}
                          </div>
                        )}
                        {resume.personalInfo.linkedin && (
                          <div>
                            <span className="font-medium">LinkedIn:</span> {resume.personalInfo.linkedin}
                          </div>
                        )}
                        {resume.personalInfo.github && (
                          <div>
                            <span className="font-medium">GitHub:</span> {resume.personalInfo.github}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex gap-3 pt-4 border-t">
                    <Link to="/builder" className="flex-1">
                      <Button className="w-full">
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Resume
                      </Button>
                    </Link>
                    <Button variant="outline" onClick={handleSendEmail}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" onClick={handleShare}>
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Achievements</h2>
              <p className="text-gray-600">Track your progress and unlock new milestones</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`text-center ${
                    achievement.earned
                      ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
                      : "bg-gray-50"
                  }`}
                >
                  <CardHeader>
                    <div
                      className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                        achievement.earned ? "bg-yellow-500 text-white" : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      <achievement.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className={achievement.earned ? "text-yellow-700" : "text-gray-600"}>
                      {achievement.title}
                    </CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {achievement.earned ? (
                      <div className="flex items-center justify-center gap-2 text-yellow-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Earned {achievement.date}</span>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${achievement.progress || 0}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-gray-600">{Math.round(achievement.progress || 0)}% complete</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Achievement Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                  Achievement Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">
                      {achievements.filter((a) => a.earned).length}
                    </div>
                    <p className="text-gray-600">Achievements Earned</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {achievements.filter((a) => !a.earned).length}
                    </div>
                    <p className="text-gray-600">In Progress</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-400 mb-2">
                      {Math.round((achievements.filter((a) => a.earned).length / achievements.length) * 100)}%
                    </div>
                    <p className="text-gray-600">Overall Progress</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
