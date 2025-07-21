"use client"

import { useResume } from "../contexts/ResumeContext"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Plus, Trash2, Award } from "lucide-react"

export default function CertificationsForm() {
  const { resumeData, updateResumeData } = useResume()
  const { certifications } = resumeData

  const addCertification = () => {
    const newCertification = {
      id: Date.now().toString(),
      name: "",
      issuer: "",
      date: "",
      url: "",
    }
    updateResumeData("certifications", [...certifications, newCertification])
  }

  const updateCertification = (id, field, value) => {
    const updated = certifications.map((cert) => (cert.id === id ? { ...cert, [field]: value } : cert))
    updateResumeData("certifications", updated)
  }

  const removeCertification = (id) => {
    const filtered = certifications.filter((cert) => cert.id !== id)
    updateResumeData("certifications", filtered)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Certifications</h3>
        <Button onClick={addCertification} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Certification
        </Button>
      </div>

      {certifications.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Award className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-gray-500 text-center mb-4">
              No certifications added yet. Add your professional certifications and achievements.
            </p>
            <Button onClick={addCertification}>
              <Plus className="w-4 h-4 mr-2" />
              Add Certification
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <Card key={cert.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-base">{cert.name || `Certification ${index + 1}`}</CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeCertification(cert.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Certification Name *</Label>
                    <Input
                      value={cert.name}
                      onChange={(e) => updateCertification(cert.id, "name", e.target.value)}
                      placeholder="AWS Certified Solutions Architect"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Issuing Organization *</Label>
                    <Input
                      value={cert.issuer}
                      onChange={(e) => updateCertification(cert.id, "issuer", e.target.value)}
                      placeholder="Amazon Web Services"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Issue Date</Label>
                    <Input
                      type="month"
                      value={cert.date}
                      onChange={(e) => updateCertification(cert.id, "date", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Credential URL</Label>
                    <Input
                      value={cert.url}
                      onChange={(e) => updateCertification(cert.id, "url", e.target.value)}
                      placeholder="https://www.credly.com/badges/..."
                    />
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
