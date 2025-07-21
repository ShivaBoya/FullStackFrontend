import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { FileText, Pencil, Trash2 } from "lucide-react"

const dummyResumes = [
  {
    id: "resume-1",
    title: "Frontend Developer Resume",
    updatedAt: "2025-07-15",
  },
  {
    id: "resume-2",
    title: "Full Stack Developer Resume",
    updatedAt: "2025-07-12",
  },
]

export default function MyResumes() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">My Resumes</h1>

      {dummyResumes.length === 0 ? (
        <p className="text-gray-600">You haven't created any resumes yet.</p>
      ) : (
        <div className="space-y-4">
          {dummyResumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white p-4 rounded-lg shadow-sm border flex justify-between items-center"
            >
              <div>
                <h2 className="font-semibold text-lg">{resume.title}</h2>
                <p className="text-sm text-gray-500">Last updated: {resume.updatedAt}</p>
              </div>
              <div className="flex space-x-2">
                <Link to={`/builder/${resume.id}`}>
                  <Button variant="outline" size="sm">
                    <Pencil className="h-4 w-4 mr-1" /> Edit
                  </Button>
                </Link>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
