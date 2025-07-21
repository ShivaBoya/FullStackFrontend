export default function AcademicTemplate({ data }) {
  const { personalInfo, experience, education, skills, projects, certifications } = data

  return (
    <div className="max-w-4xl mx-auto bg-white font-serif">
      {/* Header */}
      <div className="text-center mb-8 pb-6 border-b-2 border-gray-300">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{personalInfo.fullName || "Your Name"}</h1>
        <div className="text-gray-600 space-y-1">
          <div className="flex justify-center flex-wrap gap-4">
            {personalInfo.email && <span>{personalInfo.email}</span>}
            {personalInfo.phone && <span>•</span>}
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
          </div>
          <div className="flex justify-center flex-wrap gap-4">
            {personalInfo.location && <span>{personalInfo.location}</span>}
            {personalInfo.website && personalInfo.location && <span>•</span>}
            {personalInfo.website && <span>{personalInfo.website}</span>}
          </div>
          {personalInfo.linkedin && <div>{personalInfo.linkedin}</div>}
        </div>
      </div>

      <div className="space-y-8">
        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">RESEARCH INTERESTS & SUMMARY</h2>
            <p className="text-gray-700 leading-relaxed text-justify">{personalInfo.summary}</p>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">EDUCATION</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="text-center">
                  <h3 className="font-bold text-gray-800 text-lg">
                    {edu.degree} in {edu.field}
                  </h3>
                  <p className="text-gray-700 font-medium">{edu.institution}</p>
                  <p className="text-gray-600">
                    {edu.startDate} - {edu.endDate}
                    {edu.gpa && ` • GPA: ${edu.gpa}`}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">ACADEMIC & PROFESSIONAL EXPERIENCE</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="text-center mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                    <p className="text-gray-600">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </p>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 whitespace-pre-line text-justify leading-relaxed">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects/Research */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">RESEARCH PROJECTS & PUBLICATIONS</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                    {project.url && <p className="text-gray-600 text-sm italic">{project.url}</p>}
                  </div>
                  <p className="text-gray-700 text-justify leading-relaxed mb-3">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <p className="text-gray-600 text-sm">
                      <strong>Methods & Tools:</strong> {project.technologies.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">TECHNICAL SKILLS & COMPETENCIES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div key={skill.id} className="text-center">
                  <h3 className="font-semibold text-gray-800">{skill.name}</h3>
                  <p className="text-gray-600 text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">CERTIFICATIONS & HONORS</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="text-center">
                  <h3 className="font-bold text-gray-800">{cert.name}</h3>
                  <p className="text-gray-700">{cert.issuer}</p>
                  <p className="text-gray-600">{cert.date}</p>
                  {cert.url && <p className="text-gray-600 text-sm italic">{cert.url}</p>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
