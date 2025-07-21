export default function ClassicTemplate({ data }) {
  const { personalInfo, experience, education, skills, projects, certifications } = data

  return (
    <div className="max-w-4xl mx-auto bg-white font-serif">
      {/* Header */}
      <div className="text-center border-b-2 border-gray-800 pb-6 mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{personalInfo.fullName || "Your Name"}</h1>
        <div className="flex justify-center flex-wrap gap-4 text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
        {(personalInfo.website || personalInfo.linkedin) && (
          <div className="flex justify-center flex-wrap gap-4 text-gray-600 mt-2">
            {personalInfo.website && <span>{personalInfo.website}</span>}
            {personalInfo.linkedin && personalInfo.website && <span>•</span>}
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
          </div>
        )}
      </div>

      <div className="space-y-8">
        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-3 uppercase tracking-wide">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Professional Experience</h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
                      <p className="text-gray-700 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-600 font-medium">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  {exp.description && <div className="text-gray-700 whitespace-pre-line ml-4">{exp.description}</div>}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-800">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="text-gray-700">{edu.institution}</p>
                      {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
                    </div>
                    <span className="text-gray-600 font-medium">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Core Competencies</h2>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div key={skill.id} className="flex justify-between">
                  <span className="text-gray-800">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Notable Projects</h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-800">{project.name}</h3>
                    {project.url && <span className="text-gray-600 text-sm">{project.url}</span>}
                  </div>
                  <p className="text-gray-700 mb-2">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <p className="text-gray-600 text-sm">
                      <strong>Technologies:</strong> {project.technologies.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-wide">Certifications</h2>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-800">{cert.name}</h3>
                    <p className="text-gray-700">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-600">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
