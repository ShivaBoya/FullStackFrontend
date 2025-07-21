"use client"

import { createContext, useContext, useState } from "react"

const defaultResumeData = {
  personalInfo: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    summary: "",
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],
  certifications: [],
}

const ResumeContext = createContext(undefined)

export function ResumeProvider({ children }) {
  const [resumeData, setResumeData] = useState(defaultResumeData)
  const [selectedTemplate, setSelectedTemplate] = useState("modern")

  const updateResumeData = (section, data) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: data,
    }))
  }

  return (
    <ResumeContext.Provider
      value={{
        resumeData,
        updateResumeData,
        selectedTemplate,
        setSelectedTemplate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (context === undefined) {
    throw new Error("useResume must be used within a ResumeProvider")
  }
  return context
}
