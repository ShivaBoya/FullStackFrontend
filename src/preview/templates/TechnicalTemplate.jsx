export default function TechnicalTemplate({ data }) {
  const { personalInfo, experience, education, skills, projects, certifications } = data

  return (
    <div className="max-w-4xl mx-auto bg-white font-mono">
      {/* Header */}
      <div className="bg-gray-900 text-green-400 p-6 rounded-lg mb-8">
        <div className="flex items-center mb-4">
          <span className="text-gray-500 mr-2">$</span>
          <span className="text-white">whoami</span>
        </div>
        <h1 className="text-3xl font-bold mb-2">{personalInfo.fullName || "Your Name"}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {personalInfo.email && (
            <div>
              <span className="text-gray-500">email:</span> {personalInfo.email}
            </div>
          )}
          {personalInfo.phone && (
            <div>
              <span className="text-gray-500">phone:</span> {personalInfo.phone}
            </div>
          )}
          {personalInfo.location && (
            <div>
              <span className="text-gray-500">location:</span> {personalInfo.location}
            </div>
          )}
          {personalInfo.website && (
            <div>
              <span className="text-gray-500">website:</span> {personalInfo.website}
            </div>
          )}
          {personalInfo.linkedin && (
            <div>
              <span className="text-gray-500">linkedin:</span> {personalInfo.linkedin}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {/* Summary */}
        {personalInfo.summary && (
          <section>
            <div className="flex items-center mb-4">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-gray-800 font-bold">cat about.txt</span>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
              <p className="text-gray-700">{personalInfo.summary}</p>
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <div className="flex items-center mb-4">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-gray-800 font-bold">ls -la skills/</span>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="flex justify-between items-center">
                    <span className="text-gray-800">{skill.name}</span>
                    <div className="flex items-center">
                      <div className="w-20 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{
                            width:
                              skill.level === "Expert"
                                ? "100%"
                                : skill.level === "Advanced"
                                  ? "80%"
                                  : skill.level === "Intermediate"
                                    ? "60%"
                                    : "40%",
                          }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section>
            <div className="flex items-center mb-4">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-gray-800 font-bold">git log --oneline experience</span>
            </div>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">{exp.position}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm bg-gray-200 px-2 py-1 rounded">
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </span>
                  </div>
                  {exp.description && (
                    <div className="text-gray-700 whitespace-pre-line font-sans">{exp.description}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section>
            <div className="flex items-center mb-4">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-gray-800 font-bold">find ./projects -type f -name "*.md"</span>
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-50 p-4 rounded border-l-4 border-purple-500">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{project.name}</h3>
                    {project.url && (
                      <a href={project.url} className="text-purple-600 text-sm hover:underline">
                        [view repo]
                      </a>
                    )}
                  </div>
                  <p className="text-gray-700 mb-3 font-sans">{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
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

        {/* Education */}
        {education.length > 0 && (
          <section>
            <div className="flex items-center mb-4">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-gray-800 font-bold">cat education.json</span>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="border-l-4 border-yellow-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-gray-800">
                          {edu.degree} in {edu.field}
                        </h3>
                        <p className="text-yellow-600">{edu.institution}</p>
                        {edu.gpa && <p className="text-gray-600 text-sm">GPA: {edu.gpa}</p>}
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-200 px-2 py-1 rounded">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <div className="flex items-center mb-4">
              <span className="text-gray-500 mr-2">$</span>
              <span className="text-gray-800 font-bold">ls certificates/</span>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex justify-between items-center border-l-4 border-red-500 pl-4">
                    <div>
                      <h3 className="font-bold text-gray-800">{cert.name}</h3>
                      <p className="text-red-600">{cert.issuer}</p>
                    </div>
                    <span className="text-gray-500 text-sm bg-gray-200 px-2 py-1 rounded">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
