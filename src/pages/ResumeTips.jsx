import { Lightbulb, CheckCircle, ClipboardList } from "lucide-react"; // Optional: Icons for UX (use lucide-react)

export default function ResumeTips() {
  const sections = [
    {
      title: "🧠 General Best Practices",
      icon: <Lightbulb className="w-5 h-5 text-yellow-500" />,
      tips: [
        "Keep your resume concise — ideally 1 page for <5 years experience, 2 max.",
        "Use consistent formatting: same font, size, and bullet style.",
        "Save and share as PDF to preserve layout across devices.",
        "Avoid personal pronouns like 'I', 'me', 'my'.",
      ],
    },
    {
      title: "🎯 Tailoring to Job",
      icon: <ClipboardList className="w-5 h-5 text-blue-500" />,
      tips: [
        "Customize your resume for each job role using keywords from the job description.",
        "Mirror the tone and terminology used by the company.",
        "Highlight experience most relevant to the role you're applying for.",
      ],
    },
    {
      title: "📈 Highlighting Impact",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
      tips: [
        "Start bullet points with strong action verbs (e.g., Led, Built, Managed, Optimized).",
        "Use numbers to quantify achievements (e.g., 'Reduced onboarding time by 30%').",
        "Mention tools and technologies you used (e.g., React, Figma, SQL).",
      ],
    },
    {
      title: "🎨 Design & Readability",
      icon: <Lightbulb className="w-5 h-5 text-purple-500" />,
      tips: [
        "Use a clean, readable font like Inter, Helvetica, or Georgia.",
        "Ensure section headings stand out — use bold, slightly larger font.",
        "Keep margins and white space balanced for a professional look.",
        "Use subtle color (1-2 max) for highlights if applying for creative roles.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10 space-y-6 bg-white rounded-lg shadow">
      <h1 className="text-4xl font-bold text-center text-gray-800">📄 Resume Tips</h1>
      {sections.map((section, index) => (
        <div key={index} className="bg-gray-50 p-5 rounded-md shadow-sm">
          <h2 className="flex items-center text-xl font-semibold text-gray-700 mb-3">
            {section.icon}
            <span className="ml-2">{section.title}</span>
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {section.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
