export default function MinimalTemplate({ data }) {
  const { personalInfo, experience, education, skills, projects, certifications } = data

  return (
    <div className="max-w-4xl mx-auto bg-white font-light">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-thin text-gray-900 mb-4">{personalInfo.fullName || "Your Name"}</h1>
        <div className="flex flex-wrap gap-6 text-gray-600 text-sm">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.website && <span>{personalInfo.website}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </div>

      <div className="space-y-12">
        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <p className="text-gray-700 leading-relaxed text-lg">{personalInfo.summary}</p>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <h2 className="text-2xl font-thin text-gray-900 mb-8 border-b border-gray-200 pb-2">Experience</h2>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-3">
                    <div>
                      <h3 className="text-xl font-normal text-gray-900">{exp.position}</h3>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm">
                      {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed">{exp.description}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-2xl font-thin text-gray-900 mb-8 border-b border-gray-200 pb-2">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-baseline">
                    <div>
                      <h3 className="text-lg font-normal text-gray-900">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      {edu.gpa && <p className="text-gray-500 text-sm">GPA: {edu.gpa}</p>}
                    </div>
                    <span className="text-gray-500 text-sm">
                      {edu.startDate} — {edu.endDate}
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
            <h2 className="text-2xl font-thin text-gray-900 mb-8 border-b border-gray-200 pb-2">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span key={skill.id} className="text-gray-700">
                  {skill.name}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <h2 className="text-2xl font-thin text-gray-900 mb-8 border-b border-gray-200 pb-2">Projects</h2>
            <div className="space-y-6">
              {projects.map((project) => (
                <div key={project.id}>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-lg font-normal text-gray-900">{project.name}</h3>
                    {project.url && (
                      <a href={project.url} className="text-gray-500 text-sm hover:text-gray-700">
                        {project.url}
                      </a>
                    )}
                  </div>
                  <p className="text-gray-700 mb-3">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="text-gray-500 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-2xl font-thin text-gray-900 mb-8 border-b border-gray-200 pb-2">Certifications</h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex justify-between items-baseline">
                  <div>
                    <h3 className="font-normal text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-500 text-sm">{cert.date}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
