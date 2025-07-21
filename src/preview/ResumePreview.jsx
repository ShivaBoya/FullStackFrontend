import { useResume } from "../components/contexts/ResumeContext"
import ModernTemplate from "./templates/ModernTemplate"
import ClassicTemplate from "./templates/ClassicTemplate"
import CreativeTemplate from "./templates/CreativeTemplate"
import MinimalTemplate from "./templates/MinimalTemplate"
import TechnicalTemplate from "./templates/TechnicalTemplate"
import AcademicTemplate from "./templates/AcademicTemplate"

export default function ResumePreview() {
  const { selectedTemplate, resumeData } = useResume()

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern":
        return <ModernTemplate data={resumeData} />
      case "classic":
        return <ClassicTemplate data={resumeData} />
      case "creative":
        return <CreativeTemplate data={resumeData} />
      case "minimal":
        return <MinimalTemplate data={resumeData} />
      case "technical":
        return <TechnicalTemplate data={resumeData} />
      case "academic":
        return <AcademicTemplate data={resumeData} />
      default:
        return <ModernTemplate data={resumeData} />
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="aspect-[8.5/11] overflow-auto">
        <div className="min-h-full p-8 text-sm">{renderTemplate()}</div>
      </div>
    </div>
  )
}
