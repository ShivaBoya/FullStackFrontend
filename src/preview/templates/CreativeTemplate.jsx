export default function CreativeTemplate({ data }) {
  const { personalInfo, experience, education, skills, projects, certifications } = data

  return (
    <div className="max-w-4xl mx-auto bg-white">
      <div className="grid grid-cols-3 gap-8">
        {/* Left Sidebar */}
        <div className="col-span-1 bg-gradient-to-b from-purple-600 to-pink-600 text-white p-6 rounded-l-lg">
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-purple-600">
                {personalInfo.fullName ? personalInfo.fullName.charAt(0) : "Y"}
              </span>
            </div>
            <h1 className="text-2xl font-bold">{personalInfo.fullName || "Your Name"}</h1>
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 border-b border-white/30 pb-2">Contact</h2>
            <div className="space-y-2 text-sm">
              {personalInfo.email && <div>{personalInfo.email}</div>}
              {personalInfo.phone && <div>{personalInfo.phone}</div>}
              {personalInfo.location && <div>{personalInfo.location}</div>}
              {personalInfo.website && <div>{personalInfo.website}</div>}
              {personalInfo.linkedin && <div>{personalInfo.linkedin}</div>}
            </div>
          </div>

          {/* Skills */}
          {skills.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-bold mb-4 border-b border-white/30 pb-2">Skills</h2>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white rounded-full h-2"
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold mb-4 border-b border-white/30 pb-2">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="text-sm">
                    <div className="font-semibold">{edu.degree}</div>
                    <div>{edu.field}</div>
                    <div className="text-white/80">{edu.institution}</div>
                    <div className="text-white/60">
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="col-span-2 p-6">
          {/* Summary */}
          {personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-purple-600">About Me</h2>
              <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </section>
          )}

          {/* Experience */}
          {experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">Experience</h2>
              <div className="space-y-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-2 border-purple-200">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                      <span className="text-gray-500 text-sm">
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    {exp.description && <div className="text-gray-700 whitespace-pre-line">{exp.description}</div>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">Projects</h2>
              <div className="grid gap-4">
                {projects.map((project) => (
                  <div key={project.id} className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                      {project.url && (
                        <a href={project.url} className="text-purple-600 text-sm hover:underline">
                          View
                        </a>
                      )}
                    </div>
                    <p className="text-gray-700 mb-3">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
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
              <h2 className="text-2xl font-bold text-purple-600 mb-6">Certifications</h2>
              <div className="grid gap-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-gray-800">{cert.name}</h3>
                      <p className="text-purple-600 text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
