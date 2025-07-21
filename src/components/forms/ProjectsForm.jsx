"use client"

import { useResume } from "../contexts/ResumeContext"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Plus, Trash2, Code, X } from "lucide-react"

export default function ProjectsForm() {
  const { resumeData, updateResumeData } = useResume()
  const { projects } = resumeData

  const addProject = () => {
    const newProject = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      url: "",
    }
    updateResumeData("projects", [...projects, newProject])
  }

  const updateProject = (id, field, value) => {
    const updated = projects.map((project) => (project.id === id ? { ...project, [field]: value } : project))
    updateResumeData("projects", updated)
  }

  const removeProject = (id) => {
    const filtered = projects.filter((project) => project.id !== id)
    updateResumeData("projects", filtered)
  }

  const addTechnology = (projectId, tech) => {
    if (!tech.trim()) return
    const project = projects.find((p) => p.id === projectId)
    if (project && !project.technologies.includes(tech.trim())) {
      updateProject(projectId, "technologies", [...project.technologies, tech.trim()])
    }
  }

  const removeTechnology = (projectId, tech) => {
    const project = projects.find((p) => p.id === projectId)
    if (project) {
      updateProject(
        projectId,
        "technologies",
        project.technologies.filter((t) => t !== tech),
      )
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Projects</h3>
        <Button onClick={addProject} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Code className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-center mb-4">
              No projects added yet. Showcase your work and personal projects.
            </p>
            <Button onClick={addProject}>
              <Plus className="w-4 h-4 mr-2" />
              Add Your First Project
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {projects.map((project, index) => (
            <Card key={project.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-base">{project.name || `Project ${index + 1}`}</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeProject(project.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Project Name *</Label>
                    <Input
                      value={project.name}
                      onChange={(e) => updateProject(project.id, "name", e.target.value)}
                      placeholder="E-commerce Website"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Project URL</Label>
                    <Input
                      value={project.url}
                      onChange={(e) => updateProject(project.id, "url", e.target.value)}
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Description *</Label>
                  <Textarea
                    value={project.description}
                    onChange={(e) => updateProject(project.id, "description", e.target.value)}
                    placeholder="Describe what the project does, your role, and key achievements..."
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Technologies Used</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                        {tech}
                        <X
                          className="w-3 h-3 cursor-pointer hover:text-red-600"
                          onClick={() => removeTechnology(project.id, tech)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add technology (e.g., React, Node.js)"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          addTechnology(project.id, e.currentTarget.value)
                          e.currentTarget.value = ""
                        }
                      }}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        const input = e.currentTarget.previousElementSibling
                        addTechnology(project.id, input.value)
                        input.value = ""
                      }}
                    >
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
