"use client"

import { useState } from "react"
import { useResume } from "../contexts/ResumeContext"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Plus, X, Zap } from "lucide-react"

export default function SkillsForm() {
  const { resumeData, updateResumeData } = useResume()
  const { skills } = resumeData
  const [newSkill, setNewSkill] = useState("")
  const [newSkillLevel, setNewSkillLevel] = useState("Intermediate")

  const addSkill = () => {
    if (!newSkill.trim()) return

    const skill = {
      id: Date.now().toString(),
      name: newSkill.trim(),
      level: newSkillLevel,
    }
    updateResumeData("skills", [...skills, skill])
    setNewSkill("")
    setNewSkillLevel("Intermediate")
  }

  const removeSkill = (id) => {
    const filtered = skills.filter((skill) => skill.id !== id)
    updateResumeData("skills", filtered)
  }

  const updateSkillLevel = (id, level) => {
    const updated = skills.map((skill) => (skill.id === id ? { ...skill, level } : skill))
    updateResumeData("skills", updated)
  }

  const suggestedSkills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "TypeScript",
    "HTML/CSS",
    "SQL",
    "Git",
    "AWS",
    "Docker",
    "MongoDB",
  ]

  const addSuggestedSkill = (skillName) => {
    if (skills.some((skill) => skill.name.toLowerCase() === skillName.toLowerCase())) return

    const skill = {
      id: Date.now().toString(),
      name: skillName,
      level: "Intermediate",
    }
    updateResumeData("skills", [...skills, skill])
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Skills</h3>

        {/* Add New Skill */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Add New Skill</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="skill-name">Skill Name</Label>
                <Input
                  id="skill-name"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="e.g., JavaScript, Project Management"
                  onKeyPress={(e) => e.key === "Enter" && addSkill()}
                />
              </div>
              <div className="w-40">
                <Label>Proficiency Level</Label>
                <Select value={newSkillLevel} onValueChange={(value) => setNewSkillLevel(value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Beginner">Beginner</SelectItem>
                    <SelectItem value="Intermediate">Intermediate</SelectItem>
                    <SelectItem value="Advanced">Advanced</SelectItem>
                    <SelectItem value="Expert">Expert</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button onClick={addSkill}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suggested Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              Suggested Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {suggestedSkills.map((skill) => (
                <Button
                  key={skill}
                  variant="outline"
                  size="sm"
                  onClick={() => addSuggestedSkill(skill)}
                  disabled={skills.some((s) => s.name.toLowerCase() === skill.toLowerCase())}
                >
                  {skill}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Current Skills */}
        {skills.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Your Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="font-medium">{skill.name}</span>
                      <Badge
                        variant={
                          skill.level === "Expert"
                            ? "default"
                            : skill.level === "Advanced"
                              ? "secondary"
                              : skill.level === "Intermediate"
                                ? "outline"
                                : "outline"
                        }
                      >
                        {skill.level}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Select value={skill.level} onValueChange={(value) => updateSkillLevel(skill.id, value)}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Beginner">Beginner</SelectItem>
                          <SelectItem value="Intermediate">Intermediate</SelectItem>
                          <SelectItem value="Advanced">Advanced</SelectItem>
                          <SelectItem value="Expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeSkill(skill.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
