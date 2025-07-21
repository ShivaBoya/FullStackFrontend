import { Briefcase, Users, TrendingUp, BookOpen } from "lucide-react";

export default function CareerAdvice() {
  const adviceSections = [
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      title: "Career Growth",
      tips: [
        "Set SMART goals for promotions and development.",
        "Track achievements and share results regularly with leadership.",
        "Ask for feedback quarterly to stay aligned with expectations.",
      ],
    },
    {
      icon: <Briefcase className="w-5 h-5 text-green-600" />,
      title: "Career Transitions",
      tips: [
        "Identify transferable skills before pivoting to a new role.",
        "Build a portfolio or take certification courses to show credibility.",
        "Tell a compelling story in your resume and interviews.",
      ],
    },
    {
      icon: <Users className="w-5 h-5 text-pink-600" />,
      title: "Networking & Opportunities",
      tips: [
        "Attend industry events and join niche communities online.",
        "Engage with professionals on LinkedIn through comments and DMs.",
        "Offer value before asking — give recommendations or share insights.",
      ],
    },
    {
      icon: <BookOpen className="w-5 h-5 text-yellow-600" />,
      title: "Soft Skills & Mindset",
      tips: [
        "Develop emotional intelligence — it's key to leadership.",
        "Practice effective communication and public speaking.",
        "Embrace lifelong learning with micro-courses, books, or podcasts.",
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        📈 Career Advice
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
        Learn how to pivot careers, grow with intention, and build a skill set
        that employers value. Our curated tips and expert insights support you
        at every stage — from entry-level to leadership.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {adviceSections.map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <h2 className="flex items-center text-xl font-semibold text-gray-800 mb-4">
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
    </div>
  );
}
